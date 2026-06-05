import Image from "next/image";
import { type Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
// import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import PastEvents from "./components/PastEvents";
import SocialIcons from "./components/SocialIcons";
import Sponsors from "./components/Sponsors";
import UpcomingSocialEvents from "./components/UpcomingSocialEvents";
import ajcLogo from "./images/large-logo.png";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = use(params) as { locale: Locale };
	// Enable static rendering
	// ref: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
	setRequestLocale(locale);
	const t = useTranslations("HomePage");

	return (
		<main className="min-h-screen bg-base-100 pb-16 text-base-content">
			{/* <NavBar /> */}

			<section className="hero px-4 py-8">
				<div className="hero-content flex-col">
					<Image
						alt="AJC Society logo"
						className="h-auto w-2/5 min-w-[220px] max-w-lg"
						priority={true}
						src={ajcLogo}
					/>
					<SocialIcons />
				</div>
			</section>
			<AboutUs />
			<UpcomingSocialEvents />
			<PastEvents />
			<Sponsors />
			<section className="hero px-4 py-8">
				<div className="hero-content flex-col text-center">
					<h2 className="text-4xl font-bold">{t("socialConnectPrompt")}</h2>
					<SocialIcons />
				</div>
			</section>
		</main>
	);
}
