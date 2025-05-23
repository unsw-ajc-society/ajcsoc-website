function AboutUs() {
    return (
        <section className="bg-ajc-beige-500 w-screen">
            <div className="flex flex-col md:flex-row items-center
                px-10 py-10">
            
                {/* Team Image */}
                <div className="md:w-1/2 flex justify-center px-15">
                    <img
                        src="/assets/2025team.png"
                        alt="Picture of Our 2025 Team"
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Text*/}
                <div className="md:w-1/2 pl-12 text-center text-left max-w-xl">
                    <h2 className="text-3xl font-bold text-ajc-text mb-4">About Us!</h2>
                    <p className="text-ajc-text text-md leading-relaxed mb-5">
                        At the Australia-Japan Career Development Society (AJC), 
                        our focus is on helping students build amazing careers, 
                        whether that's in Japan, with Japanese-affiliated (Nikkei) companies, 
                        or right here in Australia for our community.<br />
                        Our mission is simple: 
                        to guide both Japanese and non-Japanese students through the job 
                        search process while forging strong connections with a variety of 
                        companies and recruiters. <br />
                        Ultimately, our aim is to see students succeed 
                        in their career journey!
                    </p>
            
                    <a 
                    className="block mx-30 bg-ajc-red-500 text-white px-2 py-2 rounded text-center hover:scale-110"
                    href = "https://docs.google.com/forms/d/e/1FAIpQLSdLpdySwPRQIvRFLDBuG8sDZ8VVBDTKqasKxftTqJh52Gar3g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    JOIN OUR COMMUNITY!!
                </a>
                </div>                
            </div>
        </section>
    );
}

export default AboutUs;