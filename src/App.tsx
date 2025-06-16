import "./App.css";
//import { useState } from "react"; ← not used
import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import PastEvents from "./PastEvents";
import Icons from "./Icon";
import Spons from "./Spons";
// import T2Welcome from "./T2Welcome"; <- save for T3
import UpcomingCareerEvents from "./UpcomingCareerEvents";
import UpcomingSocialEvents from "./UpcomingSocialEvents";

function App() {
	return (
		<>
		<Helmet>
			<title>
				AJC society UNSW
			</title>
			<meta 
				name="description"
				content="Australia-Japan Career Development Society is focused on helping students
				build amazing careers, whether that's in Japan, with Japanese-affiliated (Nikkei)
				companies, or right here in Australia for our community!"
			/>
			<meta 
				property="og:description"  
				content="Build a global career! Join AJC soceity UNSW and connect with opportunities in Japan and Australia."
			/>
			<meta property="og:title" content="AJC society UNSW" />
  			<meta property="og:image" content="./assets/ajclogo.png" />
  			<meta property="og:url" content="https://ajcsoc.org" />
  			<meta property="og:type" content="website" />
		</Helmet>
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

export default App;
