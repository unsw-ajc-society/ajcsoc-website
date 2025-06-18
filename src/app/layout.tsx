import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	description:
		"AJC (Australia-Japan Career Development Society) UNSW is focused on helping students build amazing careers, whether that's in Japan, with Japanese-affiliated (Nikkei) companies, or right here in Australia for our community!",
	title: "AJC Society UNSW | Australia-Japan Career Development",
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
		locale: "en_AU",
		title: "AJC Society UNSW",
		type: "website",
		url: "https://ajcsoc.org",
	},
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
