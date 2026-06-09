// import { useTranslations } from "next-intl";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "../../../../i18n/navigation";

const socials = [
	{
		hoverColour: "group-hover:fill-pink-500",
		href: "https://www.instagram.com/ajcsocunsw/",
		icon: FaInstagram,
		label: "Instagram",
	},
	{
		hoverColour: "group-hover:fill-blue-500",
		href: "https://www.facebook.com/people/UNSW-Australia-Japan-Career-Development-Society-AJC/100095045665332/",
		icon: FaFacebook,
		label: "Facebook",
	},
	{
		hoverColour: "group-hover:fill-blue-700",
		href: "https://www.linkedin.com/company/unsw-australia-japan-career-development-society",
		icon: FaLinkedin,
		label: "LinkedIn",
	},
	{
		hoverColour: "group-hover:fill-blue-700",
		href: "https://discord.gg/a3KJ49CwaZ",
		icon: FaDiscord,
		label: "Discord",
	},
] as const;

interface tooltipPosProps {
    tooltipPos?: "top" | "bottom";
}

export default function SocialIcons({ tooltipPos = "top" }: tooltipPosProps) {
	// const t = useTranslations("HomePage.Social");

	return (
		<section className="flex flex-col items-center gap-5 md:gap-8">
			<div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
				{socials.map(({ href, icon: Icon, hoverColour, label }) => (
					<Link
						aria-label={label}
						className={`tooltip tooltip-${tooltipPos} btn btn-ghost btn-circle group h-14 w-14 min-h-14 text-base-content hover:bg-base-200`}
						data-tip={label}
						href={href}
						key={label}
						{...(href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}
					>
						<Icon
							className={`size-8 transition-transform duration-300 group-hover:scale-110 ${hoverColour}`}
						/>
					</Link>
				))}
			</div>

			{/* Reimplement below another time */}
			{/* <Link className="btn btn-primary btn-wide uppercase" href="/subscribe" prefetch={true}>
				{t("subscribe")}
			</Link> */}
		</section>
	);
}
