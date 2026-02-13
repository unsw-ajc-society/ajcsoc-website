import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import subcomRecruitment from "../images/subcom-recruitment.png";
import welcomeEvent from "../images/welcome-event.png";

export default function Featured() {
	const t = useTranslations("HomePage.Featured");

	return (
		<section className="w-full px-4 py-8">
			<div className="mx-auto flex w-full flex-col items-center gap-8 md:flex-row md:justify-center md:items-start">
				<div className="flex flex-col items-center gap-4 w-full md:w-1/4 group">
					<Link
						href="https://forms.gle/tsGYkz3nnXCzL9UcA"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center gap-4 w-full transition-transform hover:scale-105"
					>
						<Image
							src={subcomRecruitment}
							alt={t("subcomAlt")}
							className="h-auto w-full rounded-lg shadow-lg"
						/>
						<span className="rounded-full bg-ajc-red px-6 py-2 text-white font-bold shadow-md transition-colors hover:bg-red-700">
							{t("subcomTitle")}
						</span>
					</Link>
				</div>

				<div className="flex flex-col items-center gap-4 w-full md:w-1/4 group">
					<Link
						href="https://forms.gle/eP9ruxk9DGujmdWE8"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center gap-4 w-full transition-transform hover:scale-105"
					>
						<Image
							src={welcomeEvent}
							alt={t("welcomeAlt")}
							className="h-auto w-full rounded-lg shadow-lg"
						/>
						<span className="rounded-full bg-ajc-red px-6 py-2 text-white font-bold shadow-md transition-colors hover:bg-red-700">
							{t("welcomeTitle")}
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
