"use server";

import { auth, sheets_v4 } from "@googleapis/sheets";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { z } from "zod/v4";

// Max attempts to retry appending data to Google Sheets
const MAX_ATTEMPTS = 3;

const { env } = getCloudflareContext();

const formDataSchema = z.object({
	email: z.email(),
	name: z.string().min(1, "Name cannot be empty").max(100, "Name is too long"),
});

type SubscribeNewsletterActionState =
	| {
			success: true;
			data: z.infer<typeof formDataSchema>;
	  }
	| {
			success: false;
			message: string;
	  };

export async function subscribeNewsletter(
	_: SubscribeNewsletterActionState | null,
	formData: FormData,
): Promise<SubscribeNewsletterActionState> {
	const email = formData.get("email");
	const name = formData.get("name");

	const { data, error: zodError } = formDataSchema.safeParse({ email, name });
	if (zodError) {
		return {
			message: zodError.message,
			success: false,
		};
	}

	const { email: validatedEmail, name: validatedName } = data;

	let sheetsClient: sheets_v4.Sheets | undefined;
	try {
		// ref: https://developers.google.com/identity/protocols/oauth2/scopes#sheets
		sheetsClient = new sheets_v4.Sheets({
			auth: await auth.getClient({
				credentials: {
					// biome-ignore lint/style/useNamingConvention: library's naming convention
					client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					// biome-ignore lint/style/useNamingConvention: library's naming convention
					private_key: env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
						/\\n/g,
						"\n",
					),
				},
				scopes: ["https://www.googleapis.com/auth/spreadsheets"],
			}),
		});
	} catch (error) {
		// biome-ignore lint/suspicious/noConsole: logging is acceptable in server actions
		console.log("Failed to initialize Google Sheets API client:", error);
		return {
			message: "Failed to initialize Google Sheets API client.",
			success: false,
		};
	}

	if (!sheetsClient) {
		// biome-ignore lint/suspicious/noConsole: logging is acceptable in server actions
		console.log("Google Sheets API client is not initialized.");
		return {
			message: "Failed to initialize Google Sheets API client.",
			success: false,
		};
	}

	const appendData = () =>
		sheetsClient.spreadsheets.values.append({
			range: env.NEWSLETTER_SUBSCRIPTION_SHEET_RANGE,
			requestBody: {
				values: [[validatedEmail, validatedName, new Date().toISOString()]],
			},
			spreadsheetId: env.NEWSLETTER_SUBSCRIPTION_SHEET_ID,
			valueInputOption: "RAW",
		});

	for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
		try {
			// biome-ignore lint/nursery/noAwaitInLoop: we need to wait for the result
			await appendData();
			break;
		} catch (error) {
			// biome-ignore lint/suspicious/noConsole: logging is acceptable in server actions
			console.log(
				`Attempt ${attempt + 1} to append data to Google Sheets failed:`,
				error,
			);
			if (attempt === MAX_ATTEMPTS - 1) {
				return {
					message: "Failed to write data to DB.",
					success: false,
				};
			}
		}
	}

	return {
		data: { email: validatedEmail, name: validatedName },
		success: true,
	};
}
