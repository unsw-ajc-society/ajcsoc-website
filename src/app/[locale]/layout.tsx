import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale, type Locale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { routing } from "../../i18n/routing";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const countryCodeMap = {
		en: "AU",
		ja: "JP",
	} as const;

	return {
		description:
			"AJC (Australia-Japan Career Development Society) UNSW is focused on helping students build amazing careers, whether that's in Japan, with Japanese-affiliated (Nikkei) companies, or right here in Australia for our community!",
		metadataBase: new URL("https://ajcsoc.org"),
		openGraph: {
			description:
				"Build a global career! Join AJC society UNSW and connect with opportunities in Japan and Australia.",
			images: [
				{
					alt: "AJC Society UNSW Logo",
					height: 373,
					url: "/large-logo.png",
					width: 993,
				},
			],
			locale: `${locale}_${countryCodeMap[locale]}`,
			title: "AJC Society UNSW",
			type: "website",
			url: "/",
		},
		title: "AJC Society UNSW | Australia-Japan Career Development",
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	// Enable static rendering
	// ref: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#static-rendering
	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body className="h-full w-full bg-background font-sans text-text">
				<NextIntlClientProvider messages={null}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
