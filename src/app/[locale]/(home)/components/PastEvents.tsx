import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import HAndHEvent from "../images/events/H&H_Event.png";
import KPMGEvent from "../images/events/KPMG_Event.jpg";
import MyNaviEvent from "../images/events/MyNavi_Event.jpg";

const pastEvents = [
	{
		href: "https://docs.google.com/forms/d/e/1FAIpQLSfC_Zc8xWA-dJJYbjJJUL5sr-LtRgrAgrmsCc6A2UAVw-obng/viewform",
		id: "hnh",
		image: HAndHEvent,
		translationKey: "networking",
	},
	{
		href: "https://regu-20105603.hs-sites.com/kpmg-aus25",
		id: "kpmg",
		image: KPMGEvent,
		translationKey: "networking",
	},
	{
		href: "https://global.mynavi.jp/conts/event/aus_mcs2025jul/?utm_source=studentpartnar&utm_medium=textl&utm_campaign=2507",
		id: "mynavi",
		image: MyNaviEvent,
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
					{pastEvents.map(({ id, translationKey, href, image }) => (
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
