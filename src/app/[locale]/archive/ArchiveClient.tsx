"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
	type Article,
	type ArticleFilterCategory,
	articleFilterCategories,
	type NewsletterEdition,
} from "../../../data/archive";

type ArchiveSection = "newsletter" | "articles";

export interface ArchiveTranslations {
	articles: string;
	byline: string;
	categories: Record<ArticleFilterCategory, string>;
	loadMore: string;
	newsletter: string;
	noArticles: string;
	noNewsletters: string;
	readOnline: string;
}

interface ArchiveClientProps {
	articles: Article[];
	locale: string;
	newsletters: NewsletterEdition[];
	translations: ArchiveTranslations;
}

function getSectionFromHash(): ArchiveSection {
	return window.location.hash === "#articles" ? "articles" : "newsletter";
}

export default function ArchiveClient({
	articles,
	locale,
	newsletters,
	translations,
}: ArchiveClientProps) {
	const [activeSection, setActiveSection] = useState<ArchiveSection>("newsletter");
	const [activeCategory, setActiveCategory] = useState<ArticleFilterCategory>("All");
	const [visibleArticlesCount, setVisibleArticlesCount] = useState(9);
	const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterEdition | undefined>(
		newsletters[0],
	);

	useEffect(() => {
		const syncSectionFromHash = () => setActiveSection(getSectionFromHash());

		syncSectionFromHash();
		window.addEventListener("hashchange", syncSectionFromHash);

		return () => window.removeEventListener("hashchange", syncSectionFromHash);
	}, []);

	const handleSectionChange = (section: ArchiveSection) => {
		setActiveSection(section);
		window.history.replaceState(null, "", `#${section}`);
	};

	const filteredArticles = useMemo(
		() =>
			activeCategory === "All"
				? articles
				: articles.filter((article) => article.categories.includes(activeCategory)),
		[activeCategory, articles],
	);
	const visibleArticles = filteredArticles.slice(0, visibleArticlesCount);
	const authorListFormatter = useMemo(
		() => new Intl.ListFormat(locale, { style: "long", type: "conjunction" }),
		[locale],
	);

	return (
		<div className="flex w-full flex-col items-center">
			<div className="join mb-10 rounded-full bg-base-200 p-1">
				<button
					aria-pressed={activeSection === "newsletter"}
					className={`btn join-item rounded-full ${
						activeSection === "newsletter" ? "btn-primary" : "btn-ghost"
					}`}
					onClick={() => handleSectionChange("newsletter")}
					type="button"
				>
					{translations.newsletter}
				</button>
				<button
					aria-pressed={activeSection === "articles"}
					className={`btn join-item rounded-full ${
						activeSection === "articles" ? "btn-primary" : "btn-ghost"
					}`}
					onClick={() => handleSectionChange("articles")}
					type="button"
				>
					{translations.articles}
				</button>
			</div>

			{activeSection === "newsletter" && (
				<section className="w-full">
					{newsletters.length === 0 ? (
						<div className="alert mx-auto max-w-3xl bg-base-200">
							<span>{translations.noNewsletters}</span>
						</div>
					) : (
						<div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-8 lg:flex-row lg:gap-12">
							<div className="flex flex-1 flex-col gap-4">
								{newsletters.map((edition) => (
									<button
										aria-pressed={selectedNewsletter?.id === edition.id}
										className={`card w-full border border-base-200 bg-base-100 text-left shadow-sm transition-colors hover:bg-base-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
											selectedNewsletter?.id === edition.id ? "ring-2 ring-primary" : ""
										}`}
										key={edition.id}
										onClick={() => setSelectedNewsletter(edition)}
										type="button"
									>
										<span className="card-body p-6">
											<time className="text-sm opacity-70" dateTime={edition.dateISO}>
												{edition.dateLabel}
											</time>
											<span className="card-title text-xl">{edition.title}</span>
										</span>
									</button>
								))}
							</div>

							{selectedNewsletter && (
								<div className="self-start lg:sticky lg:top-24 lg:flex-[1.5]">
									<div className="mockup-browser overflow-hidden rounded-box border border-base-300 bg-base-300 shadow-2xl">
										<div className="mockup-browser-toolbar">
											<div className="input truncate border border-base-300 text-sm">
												{selectedNewsletter.url}
											</div>
										</div>
										<div className="relative flex h-[500px] w-full justify-center bg-base-200 lg:h-[700px]">
											<iframe
												className="h-full w-full bg-white"
												loading="lazy"
												referrerPolicy="no-referrer"
												sandbox="allow-scripts"
												src={selectedNewsletter.url}
												title={selectedNewsletter.title}
											/>
										</div>
									</div>
									<a
										className="btn btn-primary mt-4 w-full"
										href={selectedNewsletter.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										{translations.readOnline}
									</a>
								</div>
							)}
						</div>
					)}
				</section>
			)}

			{activeSection === "articles" && (
				<section className="flex w-full flex-col items-center">
					<div className="mb-6 flex w-full justify-start overflow-x-auto pb-4 lg:justify-center">
						<div className="flex gap-2 px-2">
							{articleFilterCategories.map((category) => (
								<button
									className={`btn btn-sm rounded-full ${
										activeCategory === category ? "btn-primary" : "btn-outline"
									}`}
									key={category}
									onClick={() => {
										setActiveCategory(category);
										setVisibleArticlesCount(9);
									}}
									type="button"
								>
									{translations.categories[category]}
								</button>
							))}
						</div>
					</div>

					{visibleArticles.length === 0 ? (
						<div className="alert mx-auto max-w-3xl bg-base-200">
							<span>{translations.noArticles}</span>
						</div>
					) : (
						<div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{visibleArticles.map((article) => (
								<a
									className="card group overflow-hidden border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
									href={article.url}
									key={article.id}
									rel="noopener noreferrer"
									target="_blank"
								>
									<figure className="relative aspect-[3/2] bg-base-200">
										<Image
											alt={article.title}
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											fill={true}
											sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
											src={article.coverImage}
										/>
									</figure>
									<div className="card-body p-6">
										<div className="mb-2 flex flex-wrap gap-2">
											{article.categories.map((category) => (
												<span className="badge badge-primary badge-outline" key={category}>
													{translations.categories[category]}
												</span>
											))}
										</div>
										<h3 className="card-title line-clamp-2 text-xl">{article.title}</h3>
										<p className="line-clamp-1 text-sm opacity-70">
											{translations.byline.replace(
												"{authors}",
												authorListFormatter.format(article.authors),
											)}
										</p>
										<div className="mt-auto text-sm opacity-60">
											<time dateTime={article.dateISO}>{article.dateLabel}</time>
										</div>
									</div>
								</a>
							))}
						</div>
					)}

					{visibleArticles.length < filteredArticles.length && (
						<div className="mt-12 text-center">
							<button
								className="btn btn-outline"
								onClick={() => setVisibleArticlesCount((count) => count + 9)}
								type="button"
							>
								{translations.loadMore}
							</button>
						</div>
					)}
				</section>
			)}
		</div>
	);
}
