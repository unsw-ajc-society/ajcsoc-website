import { type Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import ArchiveClient from "./ArchiveClient";
import { articles, newsletters } from "../../../data/archive";

export default function ArchivePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = use(params);
	// Enable static rendering
	setRequestLocale(locale);

	const t = useTranslations("ArchivePage");

	const translations = {
		title: t("title"),
		subtitle: t("subtitle"),
		newsletter: t("newsletter"),
		articles: t("articles"),
		readOnline: t("readOnline"),
		feature: t("feature", { title: "{title}" }),
		categories: {
			All: t("categories.All"),
			Business: t("categories.Business"),
			Culture: t("categories.Culture"),
			Careers: t("categories.Careers"),
			Events: t("categories.Events"),
		},
		loadMore: t("loadMore"),
		noArticles: t("noArticles"),
	};

	return (
		<main className="min-h-screen flex flex-col w-full pb-20">
			{/* Hero Section */}
			<section className="w-full bg-ajc-red text-white py-16 px-4 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">{translations.title}</h1>
				<p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
					{translations.subtitle}
				</p>
			</section>

			{/* Interactive Client Component */}
			<div className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 mt-8">
				<ArchiveClient
					articles={articles}
					newsletters={newsletters}
					translations={translations}
				/>
			</div>
		</main>
	);
}
