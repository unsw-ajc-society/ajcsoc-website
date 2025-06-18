// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

// import process from "node:process";
import type { NextConfig } from "next";
//just for lint......line 27 doesn't want empty {} and doesn't want console...
const logError = (message: string, error: unknown) => {
    process.stderr.write(`${message}: ${error}\n`);
};

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

if (process.env.NODE_ENV !== "development") {
	try {
		const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
		initOpenNextCloudflareForDev();
	} catch (error:unknown) {
		logError("Failed to initialize Cloudflare:", error);
	}
}

export default nextConfig;
