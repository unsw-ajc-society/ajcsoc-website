import Image from "next/image";
import AboutUs from "./components/AboutUs";
import PastEvents from "./components/PastEvents";
import SocialIcons from "./components/SocialIcons";
import Sponsors from "./components/Sponsors";
import UpcomingCareerEvents from "./components/UpcomingCareerEvents";
import UpcomingSocialEvents from "./components/UpcomingSocialEvents";
import ajcLogo from "./images/large-logo.png";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-items-center pb-15">
			<Image
				alt="AJC Society logo"
				className="h-auto w-2/5"
				priority={true}
				src={ajcLogo}
			/>
			<SocialIcons />
			{/* prefetch of dynamic routes is disabled by default */}
			{/* <Link
				className="mx-auto inline-block min-w-[250px] whitespace-nowrap rounded bg-primary px-2 py-2 text-center text-white uppercase shadow hover:scale-110 hover:shadow-lg"
				href="/subscribe"
				prefetch={true}
			>
				Subscribe to our Newsletter
			</Link> */}
			<AboutUs />
			<UpcomingCareerEvents />
			<UpcomingSocialEvents />
			<PastEvents />
			<Sponsors />
			<h2 className="mt-8 mb-10 text-center font-bold text-4xl">
				Connect with us and stay tuned~
			</h2>
			<SocialIcons />
		</main>
	);
}
