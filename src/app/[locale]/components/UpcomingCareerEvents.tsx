import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import careersNetworkingEvent from "../images/events/careers-networking-event.png";

const events = [
	{
		href: "https://www.eventbrite.com.au/e/working-across-worlds-japan-australia-career-pathways-tickets-1404596348489",
		image: careersNetworkingEvent,
		translationKey: "careersNetworkingEvent",
	},
] as const;

export default function UpcomingCareerEvents() {
	const t = useTranslations("HomePage.UpcomingCareerEvents");

	return (
		<section className="w-full bg-primary px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl text-white md:text-4xl">
					{t("title")}
				</h2>
				<div className="mb-[2%] flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ translationKey, href, image }) => (
						<Link
							className="group mx-[10%] w-full min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
							href={href}
							key={translationKey}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Image
								alt={t(`events.${translationKey}`)}
								className="h-full w-full rounded-xl object-contain shadow transition-transform duration-300 hover:shadow-lg group-hover:scale-110"
								src={image}
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
