import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import teamPicture from "../images/team-2025.png";

export default function AboutUs() {
	const t = useTranslations("HomePage.AboutUs");

	return (
		<section>
			<div className="flex flex-col items-center px-6 py-10 md:flex-row md:px-10">
				<div className="mb-6 flex justify-center px-10 md:w-1/2">
					<Image
						alt="Picture of Our 2025 Team"
						className="h-full w-full rounded-xl object-cover shadow-lg"
						src={teamPicture}
					/>
				</div>

				<div className="max-w-xl px-4 text-center md:w-1/2 md:pl-12 md:text-left">
					<h2 className="mb-4 font-bold text-3xl capitalize">{t("title")}</h2>
					<p className="mb-5 text-md leading-relaxed">
						{t.rich("description", {
							br: () => <br />,
						})}
					</p>
					<div className="mt-4 flex">
						<Link
							className="mx-auto inline-block min-w-[250px] whitespace-nowrap rounded bg-primary px-2 py-2 text-center text-white uppercase shadow hover:scale-110 hover:shadow-lg"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdLpdySwPRQIvRFLDBuG8sDZ8VVBDTKqasKxftTqJh52Gar3g/viewform"
							rel="noopener noreferrer"
							target="_blank"
						>
							{t("joinUs")}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
