export type ArticleCategory = "All" | "Business" | "Culture" | "Careers" | "Events";

export interface Article {
	id: string;
	title: string;
	date: string;
	authors: string[];
	categories: ArticleCategory[];
	coverImage: string;
	url: string;
}

export interface NewsletterEdition {
	id: string;
	title: string;
	date: string;
	url: string;
	featuredArticleId?: string;
}

export const articles: Article[] = [
	{
		id: "article-1",
		title: "Navigating the Japanese Job Market",
		date: "2024-06-15",
		authors: ["AJC Editorial"],
		categories: ["Careers", "Business"],
		coverImage: "/large-logo.png",
		url: "https://example.com/article-1"
	},
	{
		id: "article-2",
		title: "Spring Welcome BBQ 2024",
		date: "2024-03-01",
		authors: ["Events Team"],
		categories: ["Events", "Culture"],
		coverImage: "/large-logo.png",
		url: "https://example.com/article-2"
	},
	{
		id: "article-3",
		title: "Internship Opportunities in Tokyo",
		date: "2023-11-20",
		authors: ["Careers Team"],
		categories: ["Careers"],
		coverImage: "/large-logo.png",
		url: "https://example.com/article-3"
	},
	...Array.from({ length: 12 }).map((_, i) => ({
		id: `article-mock-${i + 4}`,
		title: `Mock Article ${i + 4} - Industry Insights`,
		date: `2023-10-${(i + 1).toString().padStart(2, "0")}`,
		authors: ["Guest Author"],
		categories: ["Business"] as ArticleCategory[],
		coverImage: "/large-logo.png",
		url: `https://example.com/article-mock-${i + 4}`
	}))
];

export const newsletters: NewsletterEdition[] = [
	{
		id: "edition-3",
		title: "Edition 3: Winter 2024",
		date: "2024-06-30",
		url: "https://preview.mailerlite.com/l4u8m9z5o2",
		featuredArticleId: "article-1"
	},
	{
		id: "edition-2",
		title: "Edition 2: Autumn 2024",
		date: "2024-04-15",
		url: "https://preview.mailerlite.com/r3x7y8w1q9",
		featuredArticleId: "article-2"
	},
	{
		id: "edition-1",
		title: "Edition 1: Welcome 2024",
		date: "2024-02-10",
		url: "https://preview.mailerlite.com/k9v4b6n2m1"
	}
];
