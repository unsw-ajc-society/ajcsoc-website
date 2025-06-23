"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { FaX } from "react-icons/fa6";
import { subscribeNewsletter } from "./actions";

export default function SubscribeModal() {
	const router = useRouter();
	const onClose = () => {
		router.back();
	};

	const [state, action, isPending] = useActionState(subscribeNewsletter, null);

	if (state?.success) {
		// If the subscription was successful, close the modal
		onClose();
	}

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
				<form action={action} className="flex flex-col space-y-4">
					<input
						className="input input-bordered w-full"
						name="name"
						placeholder="Enter your name"
						required={true}
						type="text"
					/>
					<input
						className="input input-bordered w-full"
						name="email"
						placeholder="Enter your email"
						required={true}
						type="email"
					/>
					<button
						className="btn btn-primary"
						disabled={isPending}
						type="submit"
					>
						{isPending ? "Subscribing..." : "Subscribe"}
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
