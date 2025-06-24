import Image from "next/image";
import Link from "next/link";
import teamPicture from "../images/team-2025.png";

export default function AboutUs() {
	return (
		<section>
			<div className="flex flex-col items-center px-6 py-10 md:flex-row md:px-10">
				<div className="mb-6 flex justify-center px-10 md:w-1/2">
					<Image
						alt="Picture of Our 2025 Team"
						className="h-full w-full rounded-xl object-cover shadow-lg"
						src={teamPicture}
					/>
				</div>

				<div className="max-w-xl px-4 text-center md:w-1/2 md:pl-12 md:text-left">
					<h2 className="mb-4 font-bold text-3xl capitalize">About us!</h2>
					<p className="mb-5 text-md leading-relaxed">
						At the Australia-Japan Career Development Society (AJC), our focus
						is on helping students build amazing careers, whether that's in
						Japan, with Japanese-affiliated (Nikkei) companies, or right here in
						Australia for our community.
						<br />
						Our mission is simple: to guide both Japanese and non-Japanese
						students through the job search process while forging strong
						connections with a variety of companies and recruiters. <br />
						Ultimately, our aim is to see students succeed in their career
						journey!
					</p>
					<div className="mt-4 flex">
						<Link
							className="mx-auto inline-block min-w-[250px] whitespace-nowrap rounded bg-primary px-2 py-2 text-center text-white uppercase shadow hover:scale-110 hover:shadow-lg"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdLpdySwPRQIvRFLDBuG8sDZ8VVBDTKqasKxftTqJh52Gar3g/viewform"
							rel="noopener noreferrer"
							target="_blank"
						>
							Join our community!!
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
