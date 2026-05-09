import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import teamPicture from "../images/team-2025.png";

export default function AboutUs() {
	const t = useTranslations("HomePage.AboutUs");

	return (
		<section className="hero bg-base-100 py-10">
			<div className="hero-content flex-col gap-8 px-6 md:flex-row md:px-10">
				<figure className="flex justify-center md:w-1/2">
					<Image
						alt="Picture of Our 2025 Team"
						className="h-full w-full rounded-box object-cover shadow-lg"
						src={teamPicture}
					/>
				</figure>

				<div className="max-w-xl px-4 text-center md:w-1/2 md:pl-12 md:text-left">
					<h2 className="mb-4 text-3xl font-bold capitalize">{t("title")}</h2>
					<p className="mb-5 leading-relaxed">
						{t.rich("description", {
							br: () => <br />,
						})}
					</p>
					<div className="mt-4 flex justify-center md:justify-start">
						<Link
							className="btn btn-primary btn-wide uppercase"
							href="https://campus.hellorubric.com/?tab=memberships&s=12445"
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
