import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import OWeek from "../images/events/O-Week_26.jpg";

const events = [
	{
		href: "https://www.instagram.com/p/DUP7vKrkTrF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: OWeek,
		translationKey: "oweek",
	},
] as const;

export default function UpcomingSocialEvents() {
	const t = useTranslations("HomePage.UpcomingSocialEvents");

	return (
		<section className="w-full px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl md:text-4xl">{t("title")}</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ translationKey, href, image }) => {
						const EventImage = (
							<Image
								alt={t(`events.${translationKey}`)}
								className="h-full w-full rounded-xl object-contain shadow transition-transform duration-300 hover:shadow-lg group-hover:scale-110"
								key={translationKey}
								src={image}
							/>
						);

						return href !== undefined ? (
							<Link
								className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
								href={href}
								key={translationKey}
								rel="noopener noreferrer"
								target="_blank"
							>
								{EventImage}
							</Link>
						) : (
							<div
								className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
								key={translationKey}
							>
								{EventImage}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
