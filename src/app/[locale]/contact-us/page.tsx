import { use } from "react";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ContactUs from "../(home)/components/ContactUs";

export default function ContactUsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params) as { locale: Locale };
    setRequestLocale(locale);
    
    return (
        <ContactUs />
    )
}
