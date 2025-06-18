import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	description:
		"Australia-Japan Career Development Society is focused on helping students build amazing careers, whether that's in Japan, with Japanese-affiliated (Nikkei) companies, or right here in Australia for our community!",
	openGraph: {
		description:
			"Build a global career! Join AJC society UNSW and connect with opportunities in Japan and Australia.",
		images: [
			{
			url: '/src/app/images/large-logo.png',
			width: 993,
			height: 373,
			alt: 'AJC Society UNSW Logo',
			},
		],
		locale: "en_AU",
		title: "AJC Society UNSW",
		type: "website",
		url: "https://ajcsoc.org",
	},
	title: "AJC Society UNSW",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="h-full w-full bg-background font-sans text-text">
				{children}
			</body>
		</html>
	);
}
