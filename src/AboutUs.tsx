function AboutUs() {
    return (
        // flex flex-col is for flexbox layout
        // md:flex-row <- is a row layout, so 2 colomns
        // items-center centers the things based on the 
        // justify-center centers horizontally
        // items-center centers vertically
        <section className="bg-ajc-beige-500 w-screen">
            <div className="flex flex-col md:flex-row items-center
                px-10 py-10">
            
                {/* Image Right half */}
                {/* md:w-1/2 on bigger screens it takes half the screen */}
                <div className="md:w-1/2 flex justify-center px-15">
                    <img
                        src="/assets/2025team.png" // source of the picture
                        alt="Picture of Our 2025 Team" // The text that comes up when 
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        // style of the picture covers the container
                        // has large rounded corners
                        // has a shadow 
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 pl-12 text-center text-left max-w-xl">
                {/* mb-4 margin from the bottom */}
                    <h2 className="text-3xl font-bold text-ajc-text mb-5">About Us!</h2>
                    {/* text-ls large text 
                    leadig-relaxed relaxed spacing */}
                    <p className="text-ajc-text text-lg leading-relaxed mb-5">
                        At the Australia-Japan Career Development Society (AJC), 
                        our focus is on helping students build amazing careers, 
                        whether that's in Japan, with Japanese-affiliated (Nikkei) companies, 
                        or right here in Australia for our community.<br /><br />
                        Our mission is simple: 
                        to guide both Japanese and non-Japanese students through the job 
                        search process while forging strong connections with a variety of 
                        companies and recruiters. Ultimately, our aim is to see students succeed 
                        in their career journey!
                    </p>
            
                    <a 
                    className="block mx-30 bg-ajc-red-500 text-white px-2 py-2 rounded text-center"
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