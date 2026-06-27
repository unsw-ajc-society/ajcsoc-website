import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import interviewWorkshop from "../images/events/Interview_Workshop_Event.png"

const events = [
	{
		href: "https://docs.google.com/forms/d/e/1FAIpQLSfEYJE8ib2x74ZEb2GdMu7Qybr3L8Fws2SzZqtsKZygwmnnRg/viewform",
		id: "interviewWks",
		image: interviewWorkshop,
		translationKey: "careersNetworkingEvent",
	},
];

export default function UpcomingCareerEvents() {
	const t = useTranslations("HomePage.UpcomingCareerEvents");

	if (events.length === 0) {
		return (
			<section className="w-full bg-primary px-4 py-8 text-primary-content">
				<div className="mx-auto flex w-full flex-col items-center">
					<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
					<p className="text-base-content/60 text-white">No upcoming careers events yet :{'('}</p>
				</div>
			</section>
		)
	};

	return (
		<section className="w-full bg-primary px-4 py-8 text-primary-content">
			<div className="mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
				<div className="mb-[2%] flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ id, translationKey, href, image }) => (
						<Link
							className="card group w-[26%] min-w-[140px] overflow-hidden bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							href={href}
							key={id}
							rel="noopener noreferrer"
							target="_blank"
						>
							<figure>
								<Image
									alt={t(`events.${translationKey}`)}
									className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
									src={image}
								/>
							</figure>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
