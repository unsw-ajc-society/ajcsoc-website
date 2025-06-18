import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale, type Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { routing } from "../../i18n/routing";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata" });
	const countryCodeMap = {
		en: "AU",
		ja: "JP",
	} as const;

	return {
		description: t("description"),
		metadataBase: new URL("https://ajcsoc.org"),
		openGraph: {
			description: t("shortDescription"),
			images: [
				{
					alt: `${t("shortName")} Logo`,
					height: 373,
					url: "/large-logo.png",
					width: 993,
				},
			],
			locale: `${locale}_${countryCodeMap[locale]}`,
			title: t("shortName"),
			type: "website",
			url: "/",
		},
		title: `${t("shortName")} | ${t("fullName")}`,
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
