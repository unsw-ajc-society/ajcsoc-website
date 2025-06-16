// ref: https://nextjs.org/docs/app/api-reference/config/next-config-js

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		tsconfigPath: "./tsconfig.app.json",
	},
};

export default nextConfig;

initOpenNextCloudflareForDev();
