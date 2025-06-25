import Image from "next/image";
import Link from "next/link";
// import linkedInEvent from "../images/events/linked-in-event.png";
// import pastCareersEvent from "../images/events/past-careers-event.png";
// import welcomeEvent from "../images/events/welcome-event.png";
import ajcVivid from "../images/events/ajc-vivid.png";
import persolkellyWebinar from "../images/events/persolkelly-webinar.png";
import welcomeEventT2 from "../images/events/welcome-event-t2.png";

const pastEvents = [
	{
		description: "PERSOLKELLY Webinar",
		href: "https://www.instagram.com/p/DKg8lRbvDKs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: persolkellyWebinar,
	},
	{
		description: "Welcome Event Term 2",
		href: "https://www.instagram.com/p/DKRz-9Xvpq_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: welcomeEventT2,
	},
	{
		description: "AJC Vivid",
		href: "https://www.instagram.com/p/DKi8xWERn3a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		image: ajcVivid,
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
