import Image from "next/image";
import Link from "next/link";
import linkedInEvent from "../images/events/linked-in-event.png";
import pastCareersEvent from "../images/events/past-careers-event.png";
import welcomeEvent from "../images/events/welcome-event.png";

const pastEvents = [
	{
		description: "Community connections",
		href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_ajc-welcome-event-following-on-from-o-week-activity-7306203138917605377-teNi",
		image: welcomeEvent,
	},
	{
		description: "Professional Networking",
		href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_2025-international-womens-day-career-networking-activity-7310256419071512577-jp4g",
		image: pastCareersEvent,
	},
	{
		description: "Workshops",
		href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_today-the-unsw-australia-japan-career-development-activity-7313813439414468608-xGh-",
		image: linkedInEvent,
	},
] as const;

export default function PastEvents() {
	return (
		<section className="w-full bg-ajc-beige-500 px-4 py-8">
			<div className=" mx-auto flex w-full flex-col items-center">
				<h2 className="mb-10 text-center font-bold text-2xl text-ajc-text md:text-4xl">
					Click to see our Recent Events!
				</h2>
				<div className="flex w-full flex-wrap justify-center gap-[4vw]">
					{pastEvents.map(({ description, href, image }) => (
						<Link
							className="group w-[26%] min-w-[140px] flex-wrap rounded-xl bg-white shadow transition duration-300 hover:shadow-lg"
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
