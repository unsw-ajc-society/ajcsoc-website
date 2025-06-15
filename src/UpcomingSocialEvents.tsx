const upcomingSocialEvents = [
	{
		description: "AJC BBQ",
		href: "",
		image: "./assets/bbqEvent.png",
	}
];

function UpcomingSocialEvents() {
	return (
		<section className="bg-ajc-beige-500 w-full py-8 px-4">
			<div className=" mx-auto flex flex-col items-center w-full">
				<h2 className="text-2xl md:text-4xl font-bold text-ajc-text mb-10 text-center">
					Click to see our upcoming social events!
				</h2>
				<div className="flex flex-wrap justify-center gap-[4vw] w-full">
					{upcomingSocialEvents.map((event, index) => (
						<a
							key={index}
							href={event.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-wrap min-w-[140px] w-[26%] group bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
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

export default UpcomingSocialEvents;
