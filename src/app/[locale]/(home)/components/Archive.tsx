"use client";

import { useState } from "react";
import { Link } from "../../../../i18n/navigation";



const newsletters = [
	{
		image: "https://storage.mlcdn.com/account_image/2097742/QWKcYsYWQcNX9ioux0HYks2fAqhw4zNMXZ9MtB22.png",
		title: "2026 Term 2 Edition 6",
		date: "July 2026",
		description: "This week's feature articles explore the union organisations in Japan and Australia and compare how Japan's top universities rank against Australia's leading institutions...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/191846159343421131",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/191846097476388728"
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/DUHqfS8PCMNtIz0gNeynwDpi2teodTnaMXaDCzmR.png",
		title: "2026 Term 2 Edition 5",
		date: "June 2026",
		description: "It's hard to believe that we're already halfway through the year. We hope everyone has settled into the new term and is enjoying it so far...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/190478534089639723",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/190478534004705150",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/j2AsNv4lMnmrv1MuLaKbglQE89Cd89dGYFJiWEaa.png",
		title: "2026 Term 2 Edition 4",
		date: "June 2026",
		description: "With term 2 now underway, there's plenty to look forward to—keep a heads up for upcoming AJC events and announcements! In this week's edition, we have a roundup of some exciting events...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/189244176002450455",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/189244175610283289",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/y2t2hkR33m5lP0mqguoY9TvIvPOlnkZ8SP8o0I8i.png",
		title: "2026 Term 1 Edition 3",
		date: "April 2026",
		description: "As we approach the final stretch of the term, things are starting to get busy with exams, assessments, and preparations for the upcoming exam period—we hope you're taking care of yourselves...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/185415033478448640",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/185409308834399615",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/Tu5aI4UZgErW6FHnM9zZmB0e2Tu8c7pBWQ25QK4b.png",
		title: "2026 Term 1 Edition 2",
		date: "April 2026",
		description: "We hope you had a lovely Easter break 😆🐰In this newsletter, we welcome our 2026 Subcommittee, recap recent events, and highlight upcoming opportunities such as the TKF campus visit...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/184170898429838881",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/184170799749399556",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/KK2vvry2lVsMXDev3yftKCnQTbTo2diIMzdJXr8I.jpg",
		title: "2026 Term 1 Edition 1",
		date: "February 2026",
		description: "Welcome to the AJC Newsletter! As this is our first publication of the year, we thought it would be the perfect opportunity to tell you a little bit about who we are, what we...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/180343428726392210",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/180343366006867112",
	},
];



export default function Archive() {
	const [selected, setSelected] = useState(newsletters[0] ?? null);

	if (!selected) {
		return (
			<section className="w-full bg-base-100 px-4 py-16 text-center" id="newsletters">
				<p className="text-base-content/60">No newsletters available yet :{'('}</p>
			</section>
		)
	};

	return (
	<section className="w-full bg-base-100 px-4 py-16" id="newsletters">
		<div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
			{/* Left column list */}
			<div className="max-h-[600px] overflow-y-auto pr-2 flex flex-col gap-4">
				{newsletters.map((newsletter) => {
					const isActive = newsletter.title === selected.title;
					return (
						<button
							key={newsletter.title}
							onClick={() => setSelected(newsletter)}
							className={`text-left rounded-box border p-4 transition-colors ${isActive ? "border-primary bg-primary/5" : "border-base-300 hover:border-primary/50"}`}
						>
							<h3 className="font-semibold">{newsletter.title}</h3>
							<p className="text-sm text-base-content/60 mt-1">{newsletter.date}</p>
							<div className="flex gap-4 mt-2 text-sm">
								<Link
									href={newsletter.hrefEnglish}
									target="_blank"
									className="link link-primary"
									onClick={event => event.stopPropagation()}
								>
									Read Online
								</Link>
								<Link
									href={newsletter.hrefJapanese}
									target="_blank"
									className="link link-primary"
									onClick={event => event.stopPropagation()}
								>
									日本語で読む
								</Link>
							</div>
						</button>
					);
				})}
			</div>

			{/* Right column card previews */}
			<div className="flex items-center justify-center">
				<div
					key={selected.title}
					className="card bg-base-100 w-96 shadow-sm animate-slide-up"
				>
					<figure>
						<img
							src={selected.image}
							alt={`${selected.title} Cover Image`}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">{selected.title}</h2>
						<p>{selected.description}</p>
						<h2 className="card-title">Keep reading:</h2>
						<div className="card-actions justify-end">
							<Link className="btn btn-primary" href={selected.hrefEnglish} target="_blank">
								Read Online
							</Link>
							<Link className="btn btn-primary" href={selected.hrefJapanese} target="_blank">
								日本語で読む
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		{/* Card slide up from down animation */}
		<style jsx>{`
		@keyframes slide-up {
			from {
			opacity: 0;
			transform: translateY(30px);
			}
			to {
			opacity: 1;
			transform: translateY(0);
			}
		}
		.animate-slide-up {
			animation: slide-up 0.4s ease-out;
		}
		`}</style>
	</section>
	);
}
