export const articleCategories = ["Business", "Culture", "Careers", "Events"] as const;
export type ArticleCategory = (typeof articleCategories)[number];

export const articleFilterCategories = ["All", ...articleCategories] as const;
export type ArticleFilterCategory = (typeof articleFilterCategories)[number];

export interface Article {
	id: string;
	title: string;
	dateISO: string;
	dateLabel: string;
	authors: string[];
	categories: ArticleCategory[];
	coverImage: string;
	url: string;
}

export interface NewsletterEdition {
	id: string;
	title: string;
	dateISO: string;
	dateLabel: string;
	url: string;
}

export const articles: Article[] = [];

export const newsletters: NewsletterEdition[] = [];
