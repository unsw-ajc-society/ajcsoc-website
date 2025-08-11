import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import ajcVivid from "../images/events/ajc-vivid.png";
import persolkellyWebinar from "../images/events/persolkelly-webinar.png";
import welcomeEventT2 from "../images/events/welcome-event-t2.png";

const pastEvents = [
	{
		href: "https://www.instagram.com/p/DKg8lRbvDKs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: persolkellyWebinar,
		translationKey: "persolkellyWebinar",
	},
	{
		href: "https://www.instagram.com/p/DKRz-9Xvpq_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: welcomeEventT2,
		translationKey: "welcomeEventT2",
	},
	{
		href: "https://www.instagram.com/p/DKi8xWERn3a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: ajcVivid,
		translationKey: "vivid",
	},
] as const;

export default function PastEvents() {
	const t = useTranslations("HomePage.PastEvents");

	return (
		<section className="w-full bg-ajc-beige-500 px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl text-ajc-text md:text-4xl">
					{t("title")}
				</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{pastEvents.map(({ translationKey, href, image }) => (
						<Link
							className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
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
