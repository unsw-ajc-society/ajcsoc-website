import type { Language } from "./types";

function AboutUs({ language }: { language: Language }) {
	return (
		<section className="bg-ajc-beige-500 w-full">
			<div className="flex flex-col md:flex-row items-center px-6 md:px-10 py-10">
				{/* Team Image */}
				<div className="md:w-1/2 flex justify-center px-10 mb-6">
					<img
						src="/assets/2025team.png"
						alt="Picture of Our 2025 Team"
						className="w-full h-full object-cover rounded-xl shadow-lg"
					/>
				</div>

				{/* Text*/}
				<div className="md:w-1/2 px-4 md:pl-12 text-center md:text-left max-w-xl">
					<h2 className="text-3xl font-bold text-ajc-text mb-4">
						{language === "en" ? "About Us!" : "AJCについて"}
					</h2>
					<p className="text-ajc-text text-md leading-relaxed mb-5">
						{language === "en" ? (
							<>
								At the Australia-Japan Career Development Society (AJC), our
								focus is on helping students build amazing careers, whether
								that's in Japan, with Japanese-affiliated (Nikkei) companies, or
								right here in Australia for our community.
								<br />
								Our mission is simple: to guide both Japanese and non-Japanese
								students through the job search process while forging strong
								connections with a variety of companies and recruiters.
								<br />
								Ultimately, our aim is to see students succeed in their career
								journey!
							</>
						) : (
							<>
								Australia-Japan Career Development Society (AJC) は、
								学生一人ひとりが望むキャリアを実現できるよう、日々情熱を持って活動しています。
								<br />
								わたしたちの使命はただひとつ。国籍を問わず、すべての学生が就職活動を通じて、
								さまざまな企業やリクルーターと強い「つながり」を持てるようサポートすることです。
								<br />
								学生の皆さんがキャリアという旅の中で、それぞれ自分らしい人生を切り拓いてゆくのを見届けることこそ、私たちの最大の喜びです。
								<br />
								そのためにAJCでは、就職活動に役立つワークショップやセミナーを多数開催。
								<br />
								さらに、オーストラリアと日本の業界で活躍するプロフェッショナルと直接交流できるネットワーキングイベントも企画しています。
								<br />
								これらのイベントでは就活に有利なヒントを得られるだけでなく、将来を大きく変える出会いがあり、自分でも気づかなかった可能性を広げるきっかけにもなります。
								<br />
								私たちと一緒に、輝く未来への第一歩を踏み出しませんか？
							</>
						)}
					</p>
					<div className="flex justify-center mt-4">
						<a
							className="inline-block min-w-[250px] whitespace-nowrap mx-auto bg-ajc-red-500 text-white px-2 py-2 rounded text-center hover:scale-110 shadow hover:shadow-lg"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdLpdySwPRQIvRFLDBuG8sDZ8VVBDTKqasKxftTqJh52Gar3g/viewform"
							target="_blank"
							rel="noopener noreferrer"
						>
							{language === "en"
								? "JOIN OUR COMMUNITY!!"
								: "私たちのコミュニティに参加しよう!!"}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
