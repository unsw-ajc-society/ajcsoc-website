// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

import process from "node:process";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
	experimental: {
		// Enable since we only have single page
		// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss
		inlineCss: true,
		typedRoutes: true,
	},
	typescript: {
		tsconfigPath: "./tsconfig.app.json",
	},
});

if (process.env.NODE_ENV !== "development") {
	initOpenNextCloudflareForDev();
}

export default nextConfig;
