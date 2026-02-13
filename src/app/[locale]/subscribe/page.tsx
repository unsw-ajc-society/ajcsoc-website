import { redirect } from "../../../i18n/navigation";
import { use } from "react";
import type { Locale } from "next-intl";

export default function Subscribe({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = use(params) as { locale: Locale };
	// TODO: Implement direct subscription page
	// For now, do not allow direct access to the subscription page
	redirect({ href: "/", locale });
}
