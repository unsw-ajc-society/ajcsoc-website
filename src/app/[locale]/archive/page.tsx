import { use } from "react";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Archive from "../(home)/components/Archive";
import Hero from "../(home)/components/Hero";

export default function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params) as { locale: Locale };
    setRequestLocale(locale);
    
    return (
        <>
            <Hero
                title="AJC Archive"
                subtitle="A living record of AJC publications and member writing."
                arrowLabel="View Our Newsletters"
                arrowTargetId="newsletters"
                backgroundImage="ajc-newsletter.png"
            />
            <Archive />
        </>
    )
}
