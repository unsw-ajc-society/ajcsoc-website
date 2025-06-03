const events = [
	{
		description: "T2 O-Week Welcome Event",
		href: "https://forms.gle/SVugSNDwHM3kyb1q7",
		image: "./assets/WelcomeEventT2.png",
	},
	{
		description: "Subcommittee Recruitment",
		href: "https://docs.google.com/forms/d/e/1FAIpQLSeB5LERTQHxuPzAlHXrnh-CBMMFnMEeVy03TfdYQ4_lWJRgbA/viewform?usp=dialog", //change later
		image: "./assets/subbieRecruitT2.png",
	},
];

function T2Welcome() {
	return (
		<section className="w-full px-5 py-3 md:py-15 bg-ajc-red-500">
			<div className=" mx-auto flex flex-col items-center max-w-screen-xl">
				<h2 className="text-2xl md:text-4xl mb-3 md:mb-10 text-white font-bold text-ajc-text text-center">
					Click to register for our Welcome Event and apply for our
					Subcommittee!
				</h2>
				<div className="flex flex-wrap justify-center w-full gap-[10vw] px-0 md:px-10">
					{events.map((event, index) => (
						<a
							key={index}
							href={event.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-wrap min-w-[150px] w-[28%] group bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
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

export default T2Welcome;
