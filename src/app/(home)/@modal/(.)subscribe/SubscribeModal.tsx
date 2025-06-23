"use client";

import { useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";

export default function SubscribeModal() {
	const router = useRouter();
	const onClose = () => {
		router.back();
	};
	return (
		<dialog className="modal" onClose={onClose} open={true}>
			<div className="modal-box bg-ajc-beige">
				<h2 className="font-bold text-2xl">Subscribe to our Newsletter</h2>
				<p className="py-4">
					Stay updated with the latest news and events from AJC Society UNSW.
				</p>
				<form method="dialog">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
						onClick={onClose}
						type="button"
					>
						<FaX />
					</button>
				</form>
				<form
					action="https://example.com/subscribe"
					className="flex flex-col space-y-4"
					method="POST"
				>
					<input
						className="input input-bordered w-full"
						name="email"
						placeholder="Enter your email"
						required={true}
						type="email"
					/>
					<button className="btn btn-primary" type="submit">
						Subscribe
					</button>
				</form>
			</div>
			<form className="modal-backdrop" method="dialog">
				<button onClick={onClose} type="button">
					close
				</button>
			</form>
		</dialog>
	);
}
