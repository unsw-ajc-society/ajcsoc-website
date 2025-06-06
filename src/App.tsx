import "./App.css";
import { useState } from "react";
import AboutUs from "./AboutUs";
import PastEvents from "./PastEvents";
import Icons from "./Icon";
import Spons from "./Spons";
import T2Welcome from "./T2Welcome";
import UpcomingEvents from "./UpcomingEvents";

function App() {
	return (
		<div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
			<div className="flex flex-col items-center h-full">
				<img src="/assets/ajclogo.png" alt="logo" className="w-[62vw] h-auto" />
				<Icons />
				<AboutUs />
				<UpcomingEvents />
				<T2Welcome />
				<PastEvents />
				<Spons />
				<h2 className="mt-8 ajc-text text-bold text-4xl font-bold text-ajc-text mb-10 text-center">
					Connect with us and stay tuned~
				</h2>
				<Icons />
				<div className="mt-15"></div>
			</div>
		</div>
	);
}

export default App;
