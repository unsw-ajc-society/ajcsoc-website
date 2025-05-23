const events = [
    {
        description: "Community connections",
        href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_ajc-welcome-event-following-on-from-o-week-activity-7306203138917605377-teNi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACWvTa8BJp0pxlYGkFGwnSigKsUP3AQs4HM",
        image: "./assets/welcomeEvent.png"
    },
    {
        description: "Professional Networking",
        href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_2025-international-womens-day-career-networking-activity-7310256419071512577-jp4g?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACWvTa8BJp0pxlYGkFGwnSigKsUP3AQs4HM",
        image: "./assets/careersEvent.png"
    },
    {
        description: "Workshops",
        href: "https://www.linkedin.com/posts/unsw-australia-japan-career-development-society_today-the-unsw-australia-japan-career-development-activity-7313813439414468608-xGh-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACWvTa8BJp0pxlYGkFGwnSigKsUP3AQs4HM",
        image: "./assets/linkedIn.png"
    }   
]

function Events() {
    return (

        <section className="bg-ajc-beige-500 w-full py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className= "text-3xl font-bold text-ajc-text mb-8 text-center"> Our recent events! </h2>
                <div className="flex flex-wrap justify center gap-6 w-full">
                    {events.map((event, index) =>(
                        <a
                        key={index}
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-[47%] lg:w-[30%] bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                    <img 
                        src={event.image}
                        alt={event.description}
                        className="w-full h-full object-contain rounded-t-xl"
                    />
                    </a>                    
                ))}
                </div>
            </div>
        </section>
    );
}

export default Events