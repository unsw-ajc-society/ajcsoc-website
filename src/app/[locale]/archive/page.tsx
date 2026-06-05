import { use } from "react";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Archive from "../(home)/components/Archive";

export default function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params) as { locale: Locale };
    setRequestLocale(locale);
    
    return (
        <Archive />
    )
}
