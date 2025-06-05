import "./App.css";
import { useState } from "react";
import AboutUs from "./AboutUs";
import Events from "./Events";
import Icons from "./Icon";
import Spons from "./Spons";
import T2Welcome from "./T2Welcome";
import type { Language } from "./types";

function App() {
	const [language, setLanguage] = useState<Language>("en");
	return (
		<div className="w-full h-full bg-ajc-beige-500 text-ajc-text">
			<div className="flex flex-col items-center h-full">
				<img src="/assets/ajclogo.png" alt="logo" className="w-[62vw] h-auto" />
				{/* language toggle button */}
				<div className="flex justify-end w-full p-4">
					<button
						onClick={() => setLanguage(language === "en" ? "ja" : "en")}
						className="text-ajc-text bg-ajc-beige-700 hover:bg-ajc-beige-600 px-4 py-2 rounded"
					>
						{language === "en" ? "日本語" : "English"}
					</button>
				</div>
				<Icons />
				<AboutUs language={language} />
				<T2Welcome language={language} />
				<Events language={language} />
				<Spons language={language} />
				<h2 className="mt-8 ajc-text text-bold text-4xl font-bold text-ajc-text mb-10 text-center">
					{language === "en"
						? "Connect with us and stay tuned~"
						: "コミュニティで最新情報をゲット！"}
				</h2>
				<Icons />
				<div className="mt-15"></div>
			</div>
		</div>
	);
}

export default App;
