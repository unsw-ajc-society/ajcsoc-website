"use server";

import { z } from "zod/v4";

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

	const { data, error } = formDataSchema.safeParse({ email, name });
	if (error) {
		return {
			message: error.message,
			success: false,
		};
	}

	const { email: validatedEmail, name: validatedName } = data;

	// TODO: save the email and name to a database
	// wait for 5 seconds to simulate a network request
	await new Promise((resolve) => setTimeout(resolve, 5000));

	return {
		data: { email: validatedEmail, name: validatedName },
		success: true,
	};
}
