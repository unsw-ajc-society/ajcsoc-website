import Image from "next/image";
import Link from "next/link";
import careersNetworkingEvent from "../images/events/careers-networking-event.png";

const events = [
	{
		description: "Careers Networking Event",
		href: "https://www.eventbrite.com.au/e/working-across-worlds-japan-australia-career-pathways-tickets-1404596348489",
		image: careersNetworkingEvent,
	},
] as const;

export default function UpcomingCareerEvents() {
	return (
		<section className="w-full bg-primary px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl text-white md:text-4xl">
					Click to see our upcoming careers events!
				</h2>
				<div className="mb-[2%] flex w-full flex-wrap justify-center gap-[4vw]">
					{events.map(({ description, href, image }) => (
						<Link
							className="group mx-[10%] w-full min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
							href={href}
							key={description}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Image
								alt={description}
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
