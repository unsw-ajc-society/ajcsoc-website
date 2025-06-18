import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	defaultLocale: "en",
	// Turn off automatic locale detection
	localeDetection: false,
	localePrefix: "as-needed",
	locales: ["en", "ja"],
});
