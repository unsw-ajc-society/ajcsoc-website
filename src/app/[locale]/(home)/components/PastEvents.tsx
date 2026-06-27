import Image from "next/image";
import { useTranslations } from "next-intl";
import PubCrawlEvent from "../images/events/pub-crawl.jpg";
import VividEvent from "../images/events/vivid-event.jpg";
import T2_Oday from "../images/events/26t2-oday.jpg";

const pastEvents = [
	{
		id: "pub-crawl",
		image: PubCrawlEvent,
		translationKey: "networking",
	},
	{
		id: "vivid-event",
		image: VividEvent,
		translationKey: "networking",
	},
	{
		id: "26t2-oday",
		image: T2_Oday,
		translationKey: "networking",
	},
] as const;

export default function PastEvents() {
	const t = useTranslations("HomePage.PastEvents");

	return (
		<section className="w-full bg-base-200 px-4 py-8">
			<div className="mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{pastEvents.map(({ id, translationKey, image }) => (
						<div
							className="card w-[26%] min-w-[140px] overflow-hidden bg-base-100 shadow-md"
							key={id}
						>
							<figure>
								<Image
									alt={t(`events.${translationKey}`)}
									className="h-full w-full object-contain"
									src={image}
								/>
							</figure>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
