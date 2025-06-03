const sponsors = [
    {
        description: "H & H Lawyers",
        href: "https://www.hhlaw.com.au/eng",
        image: "./assets/hnhlogo.png"
    },
    {
        description: "PERSOLKELLY",
        href: "https://www.persolkelly.com.au",
        image: "./assets/persolkellylogo.png"
    }
];

function Spons() {
    return (
        <section className="bg-ajc-beige-500 w-full py-8 px-4">
            <div className=" mx-auto flex flex-col items-center w-full">
                <h2 className= "text-2xl md:text-4xl font-bold text-ajc-text mb-10 text-center">
                    Our Sponsors 
                </h2>
                <div className="flex flex-wrap justify-center gap-[15vw] w-full">
                    {sponsors.map((spons, index) =>(
                        <a
                            key={index}
                            href={spons.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-wrap min-w-[60px] w-[10%] group bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
                        >
                        <img
                            src={spons.image}
                            alt={spons.description}
                            className="w-full h-full rounded-xl object-contain shadow hover:shadow-lg transition-transform duration-300 group-hover:scale-110"
                        />
                    </a>                    
                ))}
                </div>
            </div>
        </section>
    );
}

export default Spons;