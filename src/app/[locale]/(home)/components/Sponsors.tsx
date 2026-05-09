import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import hnhLogo from "../images/sponsors/hnh-logo.png";
import persolkellyLogo from "../images/sponsors/persolkelly-logo.png";

const sponsors = [
	{
		href: "https://www.hhlaw.com.au/eng",
		image: hnhLogo,
		name: "H & H Lawyers",
	},
	{
		href: "https://www.persolkelly.com.au",
		image: persolkellyLogo,
		name: "PERSOLKELLY",
	},
] as const;

export default function Sponsors() {
	const t = useTranslations("HomePage.Sponsors");

	return (
		<section className="w-full bg-base-100 px-4 py-8">
			<div className="mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
				<div className="flex w-full flex-wrap justify-center gap-[15vw]">
					{sponsors.map(({ name, href, image }) => (
						<Link
							className="card group w-[10%] min-w-[60px] overflow-hidden bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							href={href}
							key={name}
							rel="noopener noreferrer"
							target="_blank"
						>
							<figure>
								<Image
									alt={name}
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
