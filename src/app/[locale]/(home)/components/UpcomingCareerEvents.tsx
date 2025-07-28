import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import HAndHEvent from "../images/events/H&H_Event.png";
import KPMGEvent from "../images/events/KPMG_Event.jpg";
import MyNaviEvent from "../images/events/MyNavi_Event.jpg";

const events = [
	{
		href: "https://docs.google.com/forms/d/e/1FAIpQLSfC_Zc8xWA-dJJYbjJJUL5sr-LtRgrAgrmsCc6A2UAVw-obng/viewform",
		image: HAndHEvent,
		translationKey: "careersNetworkingEvent",
	},
	{
		href: "https://regu-20105603.hs-sites.com/kpmg-aus25",
		image: KPMGEvent,
		translationKey: "careersNetworkingEvent",
	},
	{
		href: "https://global.mynavi.jp/conts/event/aus_mcs2025jul/?utm_source=studentpartnar&utm_medium=textl&utm_campaign=2507",
		image: MyNaviEvent,
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
