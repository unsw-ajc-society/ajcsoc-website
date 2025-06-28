import type { ReactNode } from "react";

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>) {
	return (
		<>
			{children}
			{modal}
		</>
	);
}
