//import { useState } from "react"; ← not used
import Head from "next/head";
import AboutUs from "../components/AboutUs";
import PastEvents from "../components/PastEvents";
import Icons from "../components/Icon";
import Spons from "../components/Spons";
// import T2Welcome from "./T2Welcome"; <- save for T3
import UpcomingCareerEvents from "../components/UpcomingCareerEvents";
import UpcomingSocialEvents from "../components/UpcomingSocialEvents";


function Home() {
	return (
		<>
		<Head>
			<title>AJC UNSW</title>
			<meta
				name="description"
				content="Australia-Japan Career Development Society (AJCsoc UNSW) is focused on helping students
				build amazing careers, whether that's in Japan, with Japanese-affiliated (Nikkei)
				companies, or right here in Australia for our community!"
			/>
			<link rel="icon" type="image/png" href="./public/assets/ajclogo.png" />
			<meta property="og:title" content="AJC Society UNSW" />
			<meta
				property="og:description"
				content="Build a global career! Join AJC Society UNSW and connect with opportunities in Japan and Australia."
			/>
			<meta
				property="og:image"
				content="https://ajcsoc.org/assets/ajclogo.png"
			/>
			<meta property="og:url" content="https://ajcsoc.org" />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="AJC Society UNSW" />
			<meta
				name="twitter:description"
				content="Build a global career! Join AJC Society UNSW and connect with opportunities in Japan and Australia."
			/>
			<meta
				name="twitter:image"
				content="https://ajcsoc.org/assets/ajclogo.png"
			/>
		</Head>
		<div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
			<div className="flex flex-col items-center h-full">
				<img src="/assets/ajclogo.png" alt="logo" className="w-[62vw] h-auto" />
				<Icons />
				<AboutUs />
				<UpcomingCareerEvents />
				{/* <T2Welcome /> */}
				<UpcomingSocialEvents />
				<PastEvents />
				<Spons />
				<h2 className="mt-8 ajc-text text-bold text-4xl font-bold text-ajc-text mb-10 text-center">
					Connect with us and stay tuned~
				</h2>
				<Icons />
				<div className="mt-15"></div>
			</div>
		</div>
		</>
	);
}

export default Home;
