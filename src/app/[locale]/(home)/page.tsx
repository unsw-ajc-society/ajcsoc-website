import Image from "next/image";
import { type Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import AboutUs from "./components/AboutUs";
import PastEvents from "./components/PastEvents";
import SocialIcons from "./components/SocialIcons";
import Sponsors from "./components/Sponsors";
import UpcomingCareerEvents from "./components/UpcomingCareerEvents";
import UpcomingSocialEvents from "./components/UpcomingSocialEvents";
import ajcLogo from "./images/large-logo.png";

export default function HomePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = use(params);
	// Enable static rendering
	// ref: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
	setRequestLocale(locale);
	const t = useTranslations("HomePage");

	const _switchTargetLocale = locale === "en" ? "ja" : "en";

	return (
		<main className="flex min-h-screen flex-col items-center justify-items-center pb-15">
			<Image
				alt="AJC Society logo"
				className="h-auto w-2/5"
				priority={true}
				src={ajcLogo}
			/>
			{/* <Link
				className="mb-4 rounded bg-ajc-red px-4 py-2 text-2xl text-white"
				href="/"
				locale={switchTargetLocale}
			>
				{t("switchLocale", {
					locale: switchTargetLocale === "en" ? "英語" : "Japanese",
				})}
			</Link> */}
			<SocialIcons />
			<AboutUs />
			<UpcomingCareerEvents />
			<UpcomingSocialEvents />
			<PastEvents />
			<Sponsors />
			<h2 className="mt-8 mb-10 text-center font-bold text-4xl">
				{t("socialConnectPrompt")}
			</h2>
			<SocialIcons />
		</main>
	);
}
