import { use } from "react";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import UpcomingCareerEvents from "../(home)/components/UpcomingCareerEvents";
// import UpcomingSocialEvents from "../(home)/components/UpcomingSocialEvents";
import PastEvents from "../(home)/components/PastEvents";

export default function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params) as { locale: Locale };
    setRequestLocale(locale);
    
    return (
        <>
        {/* <UpcomingSocialEvents /> */}
        <UpcomingCareerEvents />
        <PastEvents />
        </>
    )
}
