import messages from "../messages/en.json" with { type: "json" };
import type { routing } from "./i18n/routing";

declare module "next-intl" {
	interface AppConfig {
		// biome-ignore-start lint/style/useNamingConvention: Following next-intl conventions
		Locale: (typeof routing.locales)[number];
		Messages: typeof messages;
		// biome-ignore-end lint/style/useNamingConvention: Following next-intl conventions
	}
}
