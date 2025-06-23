import Image from "next/image";
import Link from "next/link";
import bbqEvent from "../images/events/bbq-event.png";

const events = [
	{
		description: "AJC BBQ",
		href: "https://www.instagram.com/ajcsocunsw/p/DLKHkOSxsib/",
		image: bbqEvent,
	},
] as const;

export default function UpcomingSocialEvents() {
	return (
		<section className="w-full px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl md:text-4xl">
					Click to see our upcoming social events!
				</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ description, href, image }) => {
						const EventImage = (
							<Image
								alt={description}
								className="h-full w-full rounded-xl object-contain shadow transition-transform duration-300 hover:shadow-lg group-hover:scale-110"
								key={description}
								src={image}
							/>
						);

						return href !== undefined ? (
							<Link
								className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
								href={href}
								key={description}
								rel="noopener noreferrer"
								target="_blank"
							>
								{EventImage}
							</Link>
						) : (
							<div
								className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
								key={description}
							>
								{EventImage}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
