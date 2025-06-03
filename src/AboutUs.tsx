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
						{language === "en" ? "About Us!" : "私たちについて!"}
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
								Australia-Japan Career Development Society (AJC)は、
								学生が素晴らしいキャリアを築く手助けをすることに焦点を当てています。
								日本で、日系企業で、またはオーストラリア国内でのキャリア構築を支援します。
								<br />
								私たちのミッションはシンプルです。
								日本人学生と非日本人学生の両方が就職活動を成功させるためのガイドとなり、
								様々な企業やリクルーターとの強い繋がりを築くことです。
								<br />
								最終的には、学生がキャリアの旅路で成功することを目指しています！
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
