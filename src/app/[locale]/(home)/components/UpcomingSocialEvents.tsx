import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import studySession from "../images/events/study-session.jpg";
import vividEvent2026 from "../images/events/vivid-event.jpg";

const events = [
	{
		href: "https://www.instagram.com/p/DVXaw-gjyqB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: studySession,
		translationKey: "studySession",
	},
	{
		href: "https://docs.google.com/forms/d/e/1FAIpQLScotDF1LlH0Ld3NZy3d_kfs2w0QhL7q584qvO04qemovrIpyw/viewform?usp=publish-editor",
		image: vividEvent2026,
		translationKey: "vividEvent2026",
	},
] as const;

export default function UpcomingSocialEvents() {
	const t = useTranslations("HomePage.UpcomingSocialEvents");

	return (
		<section className="w-full bg-base-100 px-4 py-8">
			<div className="mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ translationKey, href, image }) => {
						const EventImage = (
							<Image
								alt={t(`events.${translationKey}`)}
								className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
								key={translationKey}
								src={image}
							/>
						);

						return href !== undefined ? (
							<Link
								className="card group w-[26%] min-w-[140px] overflow-hidden bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
								href={href}
								key={translationKey}
								rel="noopener noreferrer"
								target="_blank"
							>
								<figure>{EventImage}</figure>
							</Link>
						) : (
							<div
								className="card group w-[26%] min-w-[140px] overflow-hidden bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
								key={translationKey}
							>
								<figure>{EventImage}</figure>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
