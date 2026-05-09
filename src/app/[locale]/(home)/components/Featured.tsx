import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import subcomRecruitment from "../images/subcom-recruitment.png";
import welcomeEvent from "../images/welcome-event.png";

const features = [
	{
		altKey: "subcomAlt",
		href: "https://forms.gle/tsGYkz3nnXCzL9UcA",
		image: subcomRecruitment,
		titleKey: "subcomTitle",
	},
	{
		altKey: "welcomeAlt",
		href: "https://forms.gle/eP9ruxk9DGujmdWE8",
		image: welcomeEvent,
		titleKey: "welcomeTitle",
	},
] as const;

export default function Featured() {
	const t = useTranslations("HomePage.Featured");

	return (
		<section className="w-full bg-base-100 px-4 py-8">
			<div className="mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{t("title")}</h2>
				<div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
					{features.map(({ altKey, href, image, titleKey }) => (
						<Link
							className="card group bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							href={href}
							key={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<figure>
								<Image
									alt={t(altKey)}
									className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
									src={image}
								/>
							</figure>
							<div className="card-body items-center p-4">
								<span className="btn btn-primary btn-wide">{t(titleKey)}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
