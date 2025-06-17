import Image from "next/image";
import SocialIcons from "./components/SocialIcons";
import ajcLogo from "./images/large-logo.png";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-items-center">
			<Image
				alt="AJC Society logo"
				className="h-auto w-3/5"
				priority={true}
				src={ajcLogo}
			/>
			<SocialIcons />
		</main>
	);
}
