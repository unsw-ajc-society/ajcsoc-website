import Image from "next/image";
import ajcLogo from "./../images/large-logo.png";
import SocialIcons from "./SocialIcons";
import { Link } from "../../../../i18n/navigation";

const navigationPages = [
    { name: "About Us", href: "/about-us" },
    { name: "Events", href: "/events" },
    { name: "Archive", href: "/archive" },
    { name: "Contact Us", href: "/contact-us" }
]

const NavBar = () => {
    return (
        <section>
            {/* Mobile drawer - only visible below lg */}
            <div className="drawer lg:hidden">
                <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

                <nav className="drawer-content relative flex w-full items-center bg-base-100 px-4 py-4">
                    {/* Hamburger on the left */}
                    <label htmlFor="mobile-drawer" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    {/* Logo absolutely centered */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link href="/" prefetch={true}>
                            <Image alt="AJC Society logo" className="h-10 w-auto" src={ajcLogo} />
                        </Link>
                    </div>
                </nav>

                <nav className="drawer-side z-50">
                    <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay" />
                    
                    <ul className="menu bg-base-100 min-h-full w-55 p-4 gap-1">
                        {navigationPages.map((page) => (
                            <li key={page.name}>
                                <Link
                                    href={page.href}
                                    prefetch={true}
                                    className="hover:bg-base-200 text-lg"
                                >
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                        {/* Social icons pinned to bottom */}
                        <div className="bg-base-100 hover:bg-base-200 rounded-sm mt-auto pt-4 transition-colors transition-duration-500">
                            <SocialIcons />
                        </div>
                    </ul>
                </nav>
            </div>

            {/* Desktop navbar - only visible at lg and above */}
            <nav className="tabs tabs-border hidden lg:flex w-full bg-base-100 px-4 py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" prefetch={true}>
                        <Image alt="AJC Society logo" className="h-10 w-auto" src={ajcLogo} />
                    </Link>
                    {navigationPages.map((page) => (
                        <Link
                            key={page.name}
                            href={page.href}
                            prefetch={true}
                            className="tab text-lg"
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>
                <div className="ml-auto flex items-center gap-4">
                    <SocialIcons tooltipPos='bottom' />
                </div>
            </nav>
        </section>
    )
}

export default NavBar;

// Old:
        // <nav className="tabs tabs-border flex w-full bg-base-100 px-4 py-4">
        //     <div className="flex items-center gap-8">
        //         <Link href="/" prefetch={true}>
        //             <Image alt="AJC Society logo" className="h-10 w-auto" src={ajcLogo} />
        //         </Link>
                
        //         <Link className="tab text-lg" href="/about-us" prefetch={true}>About Us</Link>
        //         <Link className="tab text-lg" href="/events" prefetch={true}>Events</Link>
        //         <Link className="tab text-lg" href="/archive" prefetch={true}>Archive</Link>
        //         <Link className="tab text-lg" href="/contact-us" prefetch={true}>Contact Us</Link>
        //     </div>
        //     <div className="ml-auto flex items-center gap-4">
        //         {/* <a className="tab" href="./about-us">About Us</a>
        //         <a className="tab" href="./events">Events</a>
        //         <a className="tab" href="./archive">Archive</a>
        //         <a className="tab" href="./contact-us">Contact Us</a> */}
        //         <SocialIcons />
        //     </div>
        // </nav>
