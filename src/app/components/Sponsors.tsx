import Image from "next/image";
import Link from "next/link";

import hnhLogo from "../images/sponsors/hnh-logo.png";
import persolkellyLogo from "../images/sponsors/persolkelly-logo.png";
import mynaviLogo from "../images/sponsors/mynavi-logo.png";

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
	{
		href: "https://www.mynavi.jp/eng/",
		image: mynaviLogo,
		name: "Mynavi",
	}
] as const;

export default function Sponsors() {
	return (
		<section className="w-full px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl md:text-4xl">
					Our Sponsors
				</h2>
				<div className="flex w-full flex-wrap justify-center gap-[15vw]">
					{sponsors.map(({ name, href, image }) => (
						<Link
							className="group w-[10%] min-w-[60px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
							href={href}
							key={name}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Image
								alt={name}
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
