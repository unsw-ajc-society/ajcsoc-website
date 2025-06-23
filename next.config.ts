// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

import process from "node:process";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";
import { z } from "zod/v4";

const sheetRangeRegex =
	/^(?<sheetName>.+)!(?<startColumn>[A-Z]+):(?<endColumn>[A-Z]+)$/;

const envSchema = z.object({
	// biome-ignore-start lint/style/useNamingConvention: environment variables
	GOOGLE_SERVICE_ACCOUNT_EMAIL: z.email().endsWith("iam.gserviceaccount.com"),
	GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: z
		.string()
		.startsWith("-----BEGIN PRIVATE KEY-----\n")
		.endsWith("\n-----END PRIVATE KEY-----\n"),
	NEWSLETTER_SUBSCRIPTION_SHEET_ID: z.string().nonempty(),
	NEWSLETTER_SUBSCRIPTION_SHEET_RANGE: z
		.string()
		.nonempty()
		.regex(sheetRangeRegex, {
			message: "Invalid sheet range format. Expected format: 'SheetName!A:C'",
		})
		.refine(
			(value) => {
				const match = value.match(sheetRangeRegex);
				if (!match?.groups) {
					return false;
				}
				const { startColumn, endColumn } = match.groups;
				if (!(startColumn && endColumn)) {
					return false;
				}
				const convertColumnToNumber = (col: string) =>
					col
						.split("")
						.reduce((acc, char) => acc * 26 + (char.charCodeAt(0) - 64), 0);
				const startColNum = convertColumnToNumber(startColumn);
				const endColNum = convertColumnToNumber(endColumn);
				return endColNum - startColNum === 3; // Ensure exactly 3 columns (e.g., A:C)
			},
			{
				message: "The range must cover exactly 3 columns (e.g., A:C).",
			},
		),
	// biome-ignore-end lint/style/useNamingConvention: environment variables
});

// Validate environment variables before building the app
if (process.env.NODE_ENV === "development") {
	const { success, error } = envSchema.safeParse(process.env);
	if (!success) {
		// biome-ignore lint/suspicious/noConsole: logs in next.config.ts are shown in the build output
		console.error("Environment variable validation failed:", error);
	}
}

const nextConfig: NextConfig = {
	experimental: {
		// Enable since we only have single page
		// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss
		inlineCss: true,
		typedRoutes: true,
	},
	typescript: {
		tsconfigPath: "./tsconfig.app.json",
	},
};

initOpenNextCloudflareForDev();

export default nextConfig;
