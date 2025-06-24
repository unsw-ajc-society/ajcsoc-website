// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

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
