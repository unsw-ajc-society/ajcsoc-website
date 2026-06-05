import { use } from "react";
import type { Locale } from "next-intl";
// import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server";
import AboutUs from "../(home)/components/AboutUs";

export default function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params) as { locale: Locale };
    setRequestLocale(locale);
    // const t = useTranslations("HomePage.AboutUs");
    
    return (
        <AboutUs />
    )
}
