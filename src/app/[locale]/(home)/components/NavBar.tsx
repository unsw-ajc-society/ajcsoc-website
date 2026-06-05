import Image from "next/image";
import ajcLogo from "./../images/large-logo.png";
import SocialIcons from "./SocialIcons";
import { Link } from "../../../../i18n/navigation";

const NavBar = () => {
    return (
        <nav className="tabs tabs-border flex w-full bg-base-100 px-4 py-4">
            <div className="flex items-center gap-8">
                <Link href="/" prefetch={true}>
                    <Image alt="AJC Society logo" className="h-10 w-auto" src={ajcLogo} />
                </Link>
                
                <Link className="tab text-lg" href="/about-us" prefetch={true}>About Us</Link>
                <Link className="tab text-lg" href="/events" prefetch={true}>Events</Link>
                <Link className="tab text-lg" href="/archive" prefetch={true}>Archive</Link>
                <Link className="tab text-lg" href="/contact-us" prefetch={true}>Contact Us</Link>
            </div>
            <div className="ml-auto flex items-center gap-4">
                {/* <a className="tab" href="./about-us">About Us</a>
                <a className="tab" href="./events">Events</a>
                <a className="tab" href="./archive">Archive</a>
                <a className="tab" href="./contact-us">Contact Us</a> */}
                <SocialIcons />
            </div>
        </nav>
    )
}

export default NavBar;
