"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import GoogleAuth, { type GoogleKey } from "cloudflare-workers-and-google-oauth";
import { z } from "zod";

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
		console.log({
			zodError: zodError.message,
			zodErrorMessage: "Invalid form data submitted for newsletter subscription.",
		});
		return {
			message: zodError.message,
			success: false,
		};
	}

	const { email: validatedEmail, name: validatedName } = data;

	// ref: https://developers.google.com/identity/protocols/oauth2/scopes#sheets
	const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
	const googleAuth = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}") as GoogleKey;

	let token: string | undefined;
	try {
		const oauth = new GoogleAuth(googleAuth, scopes);
		token = await oauth.getGoogleAuthToken();
		if (!token) {
			throw new Error("Google Auth token is undefined.");
		}
	} catch (error) {
		console.log({
			oauthTokenError: error,
			oauthTokenErrorMessage: "Failed to get Google Auth token.",
		});
		return {
			message: "Cannot subscribe to newsletter due to a internal server error.",
			success: false,
		};
	}

	// ref: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append
	const apiUrl = new URL(
		`https://sheets.googleapis.com/v4/spreadsheets/${
			env.NEWSLETTER_SUBSCRIPTION_SHEET_ID
		}/values/${env.NEWSLETTER_SUBSCRIPTION_SHEET_RANGE}:append`,
	);
	apiUrl.searchParams.append("valueInputOption", "RAW");
	apiUrl.searchParams.append("insertDataOption", "INSERT_ROWS");
	const appendData = () =>
		fetch(apiUrl.toString(), {
			body: JSON.stringify({
				range: env.NEWSLETTER_SUBSCRIPTION_SHEET_RANGE,
				values: [[validatedEmail, validatedName, new Date().toISOString()]],
			}),
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
		});

	for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
		try {
			await appendData();
			break;
		} catch (error) {
			console.log({
				appendDataError: error,
				appendDataErrorMessage: `Failed to append data to Google Sheets on attempt ${attempt + 1}.`,
			});
			if (attempt === MAX_ATTEMPTS - 1) {
				return {
					message: "Cannot subscribe to newsletter due to a internal server error.",
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
