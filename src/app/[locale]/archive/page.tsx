import { type Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import ArchiveClient from "./ArchiveClient";
import { articles, newsletters } from "../../../data/archive";

export default function ArchivePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale: routeLocale } = use(params);
	const locale = routeLocale as Locale;
	// Enable static rendering
	setRequestLocale(locale);

	const t = useTranslations("ArchivePage");

	const translations = {
		title: t("title"),
		subtitle: t("subtitle"),
		newsletter: t("newsletter"),
		articles: t("articles"),
		readOnline: t("readOnline"),
		byline: t("byline", { authors: "{authors}" }),
		categories: {
			All: t("categories.All"),
			Business: t("categories.Business"),
			Culture: t("categories.Culture"),
			Careers: t("categories.Careers"),
			Events: t("categories.Events"),
		},
		loadMore: t("loadMore"),
		noArticles: t("noArticles"),
		noNewsletters: t("noNewsletters"),
	};

	return (
		<main className="flex min-h-screen w-full flex-col bg-base-100 pb-20">
			<section className="hero bg-primary px-4 py-16 text-center text-primary-content">
				<div className="hero-content flex-col">
					<h1 className="text-4xl font-bold md:text-5xl">{translations.title}</h1>
					<p className="max-w-2xl text-lg opacity-90 md:text-xl">{translations.subtitle}</p>
				</div>
			</section>

			<div className="mx-auto mt-8 w-full max-w-7xl flex-1 px-4 lg:px-8">
				<ArchiveClient
					articles={articles}
					locale={locale}
					newsletters={newsletters}
					translations={translations}
				/>
			</div>
		</main>
	);
}
