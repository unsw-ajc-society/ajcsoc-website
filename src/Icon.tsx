import { FaInstagram, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";

const socials = [
    {
        href: "https://www.instagram.com/ajcsocunsw/",
        icon: FaInstagram,
        hoverColour: "group-hover:text-pink-500",
    }, 
    {
        href: "https://www.facebook.com/people/UNSW-Australia-Japan-Career-Development-Society-AJC/100095045665332/",
        icon: FaFacebook,
        hoverColour: "group-hover:text-blue-500",

    },
    {
        href: "https://www.linkedin.com/company/unsw-australia-japan-career-development-society",
        icon: FaLinkedin,
        hoverColour: "group-hover:text-blue-700",
    },
    {
        href: "https://discord.gg/a3KJ49CwaZ",
        icon: FaDiscord,
        hoverColour: "group-hover:text-blue-700",
    },
];

function Icons() {
    return (
        <div className="flex items-center gap-x-[5vw]">
            {socials.map(({ href, icon: Icon, hoverColour }, index) => (
                <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                <Icon
                    className={`text-ajc-text cursor-pointer group-hover:scale-110 transition-transform duration-300 ${hoverColour}`}
                    style={{ width: '8vw', height: 'auto' }}
                />
                </a>
            ))}
        </div>
    );
}

export default Icons