// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

// initOpenNextCloudflareForDev();
const initCloudflare = () => {
	if (process.env.NODE_ENV !== "development") {
	  try {
		const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
		initOpenNextCloudflareForDev();
	  } catch (error) {
		console.warn("Cloudflare initialization failed:", error);
	  }
	}
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

initCloudflare();

export default nextConfig;
