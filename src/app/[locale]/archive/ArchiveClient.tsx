"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import type { Article, ArticleCategory, NewsletterEdition } from "../../../data/archive";

interface ArchiveClientProps {
	articles: Article[];
	newsletters: NewsletterEdition[];
	translations: any;
}

export default function ArchiveClient({
	articles,
	newsletters,
	translations,
}: ArchiveClientProps) {
	const [activeSection, setActiveSection] = useState<"newsletter" | "articles">("newsletter");
	const [activeCategory, setActiveCategory] = useState<ArticleCategory>("All");
	const [visibleArticlesCount, setVisibleArticlesCount] = useState(9);
	const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterEdition | undefined>(newsletters[0]);

	// Handle initial load based on window hash
	useEffect(() => {
		const hash = window.location.hash.replace("#", "");
		if (hash === "articles" || hash === "newsletter") {
			setActiveSection(hash as "newsletter" | "articles");
		}
	}, []);

	// Handle section change and update hash without scrolling
	const handleSectionChange = (section: "newsletter" | "articles") => {
		setActiveSection(section);
		window.history.replaceState(null, "", `#${section}`);
	};

	const filteredArticles = activeCategory === "All"
		? articles
		: articles.filter((a) => a.categories.includes(activeCategory));

	const visibleArticles = filteredArticles.slice(0, visibleArticlesCount);

	const handleLoadMore = () => {
		setVisibleArticlesCount((prev) => prev + 9);
	};

	const categories: ArticleCategory[] = ["All", "Business", "Culture", "Careers", "Events"];

	return (
		<div className="w-full flex flex-col items-center">
			{/* Section Toggle */}
			<div className="join bg-base-200 p-1 rounded-full mb-10 w-fit">
				<button
					type="button"
					className={`join-item btn rounded-full ${
						activeSection === "newsletter" ? "btn-primary text-white" : "btn-ghost"
					}`}
					onClick={() => handleSectionChange("newsletter")}
				>
					{translations.newsletter}
				</button>
				<button
					type="button"
					className={`join-item btn rounded-full ${
						activeSection === "articles" ? "btn-primary text-white" : "btn-ghost"
					}`}
					onClick={() => handleSectionChange("articles")}
				>
					{translations.articles}
				</button>
			</div>

			<div className="w-full">
				{activeSection === "newsletter" && (
					<div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
						{/* Newsletter List */}
						<div className="flex-1 flex flex-col gap-4">
							{newsletters.map((edition) => (
								<div
									key={edition.id}
									className={`card bg-base-100 shadow-sm border border-base-200 transition-colors cursor-pointer hover:bg-base-200 ${
										selectedNewsletter?.id === edition.id ? "ring-2 ring-primary" : ""
									}`}
									onClick={() => setSelectedNewsletter(edition)}
								>
									<div className="card-body p-6">
										<p className="text-sm opacity-70 mb-1">{edition.date}</p>
										<h3 className="card-title text-xl mb-3">{edition.title}</h3>
										
										<div className="flex flex-col gap-2 mt-auto">
											<a
												href={edition.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline font-medium inline-flex items-center"
												onClick={(e) => e.stopPropagation()}
											>
												{translations.readOnline}
											</a>

											{edition.featuredArticleId && (
												<Link
													href={`/archive#articles`}
													className="text-sm opacity-80 hover:opacity-100 hover:underline"
													onClick={(e) => {
														e.stopPropagation();
														const article = articles.find((a) => a.id === edition.featuredArticleId);
														if (article) {
															handleSectionChange("articles");
															// In a real app we might navigate to the specific article
														}
													}}
												>
													{translations.feature.replace(
														"{title}",
														articles.find((a) => a.id === edition.featuredArticleId)?.title || "Article"
													)}
												</Link>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Preview Panel */}
						{selectedNewsletter && (
							<div className="flex-1 lg:flex-[1.5] lg:sticky lg:top-24 self-start">
								<div className="mockup-browser border bg-base-300 border-base-300 shadow-2xl rounded-2xl overflow-hidden transition-transform duration-700 ease-in-out hover:-translate-y-2">
									<div className="mockup-browser-toolbar">
										<div className="input border border-base-300 truncate text-sm">
											{selectedNewsletter.url}
										</div>
									</div>
									<div className="flex justify-center bg-base-200 w-full h-[500px] lg:h-[700px] relative">
										<iframe
											src={selectedNewsletter.url}
											className="w-full h-full bg-white"
											title={selectedNewsletter.title}
											loading="lazy"
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				)}

				{activeSection === "articles" && (
					<div className="w-full flex flex-col items-center">
						{/* Category Filters */}
						<div className="w-full overflow-x-auto pb-4 mb-6 scrollbar-hide flex justify-start lg:justify-center">
							<div className="flex gap-2 px-2">
								{categories.map((category) => (
									<button
										key={category}
										type="button"
										className={`btn btn-sm rounded-full ${
											activeCategory === category
												? "btn-primary text-white"
												: "btn-outline border-base-300"
										}`}
										onClick={() => {
											setActiveCategory(category);
											setVisibleArticlesCount(9);
										}}
									>
										{translations.categories[category]}
									</button>
								))}
							</div>
						</div>

						{/* Articles Grid */}
						{visibleArticles.length === 0 ? (
							<div className="py-20 text-center opacity-70">
								{translations.noArticles}
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
								{visibleArticles.map((article) => (
									<a
										key={article.id}
										href={article.url}
										target="_blank"
										rel="noopener noreferrer"
										className="card bg-base-100 shadow-md border border-base-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
									>
										<figure className="aspect-[3/2] bg-base-200 relative overflow-hidden">
											<Image
												src={article.coverImage}
												alt={article.title}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</figure>
										<div className="card-body p-6">
											<div className="flex flex-wrap gap-2 mb-2">
												{article.categories.map((cat) => (
													<span
														key={cat}
														className="badge badge-sm badge-primary badge-outline"
													>
														{translations.categories[cat]}
													</span>
												))}
											</div>
											<h3 className="card-title text-xl mb-1 line-clamp-2">
												{article.title}
											</h3>
											<p className="text-sm opacity-70 mb-4 line-clamp-1">
												By {article.authors.join(", ")}
											</p>
											<div className="mt-auto flex justify-between items-center text-sm opacity-60">
												<span>{article.date}</span>
											</div>
										</div>
									</a>
								))}
							</div>
						)}

						{/* Load More */}
						{visibleArticles.length < filteredArticles.length && (
							<div className="mt-12 text-center">
								<button
									type="button"
									className="btn btn-outline border-base-300"
									onClick={handleLoadMore}
								>
									{translations.loadMore}
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
