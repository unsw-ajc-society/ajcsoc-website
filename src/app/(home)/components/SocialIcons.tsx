import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
	{
		hoverColour: "group-hover:fill-pink-500",
		href: "https://www.instagram.com/ajcsocunsw/",
		icon: FaInstagram,
		key: "instagram",
	},
	{
		hoverColour: "group-hover:fill-blue-500",
		// biome-ignore lint/nursery/noSecrets: This is a public link
		href: "https://www.facebook.com/people/UNSW-Australia-Japan-Career-Development-Society-AJC/100095045665332/",
		icon: FaFacebook,
		key: "facebook",
	},
	{
		hoverColour: "group-hover:fill-blue-700",
		href: "https://www.linkedin.com/company/unsw-australia-japan-career-development-society",
		icon: FaLinkedin,
		key: "linkedin",
	},
	{
		hoverColour: "group-hover:fill-blue-700",
		href: "https://discord.gg/a3KJ49CwaZ",
		icon: FaDiscord,
		key: "discord",
	},
] as const;

export default function SocialIcons() {
	return (
		<section>
			<div className="flex items-center gap-x-[5vw]">
				{socials.map(({ href, icon: Icon, hoverColour, key }) => (
					<Link
						className="group"
						href={href}
						key={key}
						{...(href.startsWith("http")
							? { rel: "noopener noreferrer", target: "_blank" }
							: {})}
					>
						<Icon
							className={`h-auto w-[5vw] min-w-[55px] transition-transform duration-300 group-hover:scale-110 ${hoverColour}`}
						/>
					</Link>
				))}
			</div>
			<div className="justify-centre mt-5 flex md:mt-8">
				<Link
					className="mx-auto inline-block min-w-[280px] whitespace-nowrap rounded bg-primary px-2 py-2 text-center text-white uppercase shadow hover:scale-105 hover:shadow-lg"
					href="/subscribe"
					prefetch={true}
				>
					Subscribe to our Newsletter
				</Link>
			</div>
		</section>
	);
}
