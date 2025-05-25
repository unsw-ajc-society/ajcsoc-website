const events = [
    {
        description: "T2 O-Week Welcome Event",
        href: "https://www.instagram.com/p/DJ_llKgPPRt/",
        image: "./assets/OWeekT2.png" //temporary image i reckon
    }, 
    {
        description: "Subcommittee Recruitment",
        href: "https://www.instagram.com/p/DJ_llKgPPRt/", //change later
        image: "./assets/subcomT2.png" //temporary image maybe this is different
    },
]

function T2Welcome() {
    return (
        <section className="w-full px-5 py-3 md:py-15 bg-ajc-red-500">
            <div className=" mx-auto flex flex-col items-center max-w-screen-xl">
                <h2 className= "text-2xl mb-3 md:mb-10 text-white md:text-5xl font-bold text-ajc-text text-center">
                    Check Out Our O-Week Welcome! 
                </h2>
                <div className="flex flex-wrap justify-center w-full gap-[10vw] px-0 md:px-10">
                    {events.map((event, index) =>(
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