const upcomingCareerEvents = [
	// {
	// 	description: "AJC VIVID",
	// 	href: "https://docs.google.com/forms/d/e/1FAIpQLSfOvsBHAVU98Dj0jb2fIGSfelyf3Th2_qSIDdOGg2nPGrCiig/viewform",
	// 	image: "./assets/vivid.png",
	// },
	{
		description: "Careers Networking Event",
		href: "https://www.eventbrite.com.au/e/working-across-worlds-japan-australia-career-pathways-tickets-1404596348489",
		image: "./assets/careersNetworkingEvent.png",
	},
];

function UpcomingCareerEvents() {
	return (
		<section className="bg-ajc-red-500 w-full py-8 px-4">
			<div className=" mx-auto flex flex-col items-center w-full">
				<h2 className="text-2xl md:text-4xl font-bold text-ajc-text mb-10 text-center text-white">
					Click to see our upcoming careers events!
				</h2>
				<div className="flex flex-wrap justify-center gap-[4vw] w-full mb-[2%]">
					{upcomingCareerEvents.map((event, index) => (
						<a
							key={index}
							href={event.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-wrap min-w-[140px] w-full mx-[10%] group bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
						>
							<img
								src={event.image}
								alt={event.description}
								className="w-full h-full rounded-xl object-contain shadow hover:shadow-lg transition-transform duration-300 group-hover:scale-110"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default UpcomingCareerEvents;
