"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "../../../../i18n/navigation";
import InterviewWorkshop from "../images/events/interview_workshop_event.jpg";
import speedFriending from "../images/events/speed-friending.jpg";
import internshipCareerNight from "../images/events/Internship_career_night_August.jpg";
import agmPhoto from "../images/events/agm_2026.jpg";


const newsletters = [
	{
		image: agmPhoto,
		title: "2026 Term 2 Edition 10",
		date: "October 2026",
		description: "We will first highlight our upcoming Resume Workshop Event, as well as look back on our speed-friending event, the Mynavi Career Fair, and the AJC Annual General Meeting",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/200011462439076934?signature=ea11c5b8f1a2a246d6f1af59cd1743fc67fd26c5349141c7b8d563a8329619e5",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/200011525448008994?signature=559a36277b6e68f89095a9cf1e2dd3e5ec7c0daa4f2e057cd7fe90b8b5265b65"
	},
	{
		image: speedFriending,
		title: "2026 Term 2 Edition 9",
		date: "September 2026",
		description: "We are sharing details about our upcoming speed-friending event, where you will get to learn more about AJC while building new connections through fun team activities.",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/198730209222985647?signature=2150073c07f28626af3806137ce3e5f845857fb0f95afa191d4b97ff7ee8af6d",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/198730271176000617?signature=c6ad992233be0915f11f47fbdbca5ab09d162d5f933424e64f18dfa4d0b4b61d"
	},
	{
		image: internshipCareerNight,
		title: "2026 Term 2 Edition 8",
		date: "August 2026",
		description: "This edition brings you the latest information for our Japan x Australia Internship Pathways Night",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/194283908318102691?signature=031d0636ace58862f80367d687d180efdb165e18c69315aa719acaffa95a1f05",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/194283908457563228?signature=bd31b260a97ec50240ecaf044715cdac8f979f5615801455d855edfb6ee59a18"
	},
	{
		image: InterviewWorkshop,
		title: "2026 Term 2 Edition 7",
		date: "July 2026",
		description: "We're thrilled to share the details on our upcoming Internship Pathway Night and our MyNavi event! We also have two new feature pieces: one exploring how Japan Airlines' First Woman CEO...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/193015234931197169?signature=e0b202347415313170d5cf72a29010a0c10eecb17b098b7fd1aeb16588b88141",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/193015234777056345?signature=7ff9106417983b75168c951bae8e09ab1a15f6290984f1530af23a0b159400d8"
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/QWKcYsYWQcNX9ioux0HYks2fAqhw4zNMXZ9MtB22.png",
		title: "2026 Term 2 Edition 6",
		date: "July 2026",
		description: "This week's feature articles explore the union organisations in Japan and Australia and compare how Japan's top universities rank against Australia's leading institutions...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/191780861408970319?signature=cf75fe35b0c1048b840cf322e36e5118f9a280d392fefc137a806ba081160b66",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/191780861572548364?signature=fe38b5cbf03bea689926e8ed445f3687ba2560014ccb4fa0078219b13f2b41d3"
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/DUHqfS8PCMNtIz0gNeynwDpi2teodTnaMXaDCzmR.png",
		title: "2026 Term 2 Edition 5",
		date: "June 2026",
		description: "It's hard to believe that we're already halfway through the year. We hope everyone has settled into the new term and is enjoying it so far...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/190478534088591124?signature=b58cc774afe9daa86ccc7319093c3749b11765ef80f03faa50cf9ef0055e0406",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/190478534002607968?signature=984143eb7f6cc4112139f770c602ff603345a07beacb68b6c1e5588bd27dc4e9",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/j2AsNv4lMnmrv1MuLaKbglQE89Cd89dGYFJiWEaa.png",
		title: "2026 Term 2 Edition 4",
		date: "June 2026",
		description: "With term 2 now underway, there's plenty to look forward to—keep a heads up for upcoming AJC events and announcements! In this week's edition, we have a roundup of some exciting events...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/189244176002450433?signature=5f350e2955ee5d0994ff409c16cdb91d2dc603e01ad937ea506ad3cbf3bbef3d",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/189244175606088936?signature=d30840c43286831e666c5fc6cdc5407639f02fddbab1fd57411e0d590a8c9323",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/y2t2hkR33m5lP0mqguoY9TvIvPOlnkZ8SP8o0I8i.png",
		title: "2026 Term 1 Edition 3",
		date: "April 2026",
		description: "As we approach the final stretch of the term, things are starting to get busy with exams, assessments, and preparations for the upcoming exam period—we hope you're taking care of yourselves...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/185415033477400044?signature=2cec397bf709a7f4ef488ccd4e0dd9eb893cef81f91cb90d437320d67b122c09",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/185409308830205289?signature=84f91723286afc6b8746f4407775973c25d12f541c9dc98b9379c4eb07d7bf4e",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/Tu5aI4UZgErW6FHnM9zZmB0e2Tu8c7pBWQ25QK4b.png",
		title: "2026 Term 1 Edition 2",
		date: "April 2026",
		description: "We hope you had a lovely Easter break 😆🐰In this newsletter, we welcome our 2026 Subcommittee, recap recent events, and highlight upcoming opportunities such as the TKF campus visit...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/184170898428790283?signature=07080dab45d0aa50a2beb381124ca066f4670a58f9d6b0ea53ea5ac36ac659bd",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/184170799748351981?signature=905afe6b6c170efe47f979e394f600d7d14fea4b092ba76e64cd9a566cb06cc1",
	},
	{
		image: "https://storage.mlcdn.com/account_image/2097742/KK2vvry2lVsMXDev3yftKCnQTbTo2diIMzdJXr8I.jpg",
		title: "2026 Term 1 Edition 1",
		date: "February 2026",
		description: "Welcome to the AJC Newsletter! As this is our first publication of the year, we thought it would be the perfect opportunity to tell you a little bit about who we are, what we...",
		hrefEnglish: "https://preview.mailerlite.io/emails/webview/2097742/180343428726392187?signature=e454e3d790ffe5ee189b1f3394e3e4d658ebd08a46b69e7eda49a17b637f9363",
		hrefJapanese: "https://preview.mailerlite.io/emails/webview/2097742/180343366005818514?signature=b7706541c4b00c33af52f4d5ecea807b380ddae3bf0dc48a304993c6abb83b9c",
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
					{ typeof selected.image === 'string' && <figure>
						<img
							src={selected.image}
							alt={`${selected.title} Cover Image`}
						/>
					</figure>}
					{ typeof selected.image !== 'string' && selected.image && <figure>
						<Image
							alt={`${selected.title} Cover Image`}
							src={selected.image}
						/>
						{/* <img
							src={selected.image}
							alt={`${selected.title} Cover Image`}
						/> */}
					</figure>}
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
