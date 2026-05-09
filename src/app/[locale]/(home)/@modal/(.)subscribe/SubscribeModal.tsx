"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { FaX } from "react-icons/fa6";
import { subscribeNewsletter } from "./actions";

export default function SubscribeModal() {
	const t = useTranslations("HomePage.SubscribeModal");

	const router = useRouter();
	const onClose = () => {
		router.back();
	};

	const [state, action, isPending] = useActionState(subscribeNewsletter, null);

	return (
		<dialog className="modal" onClose={onClose} open={true}>
			<div className="modal-box bg-base-100 p-6">
				<form method="dialog">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
						onClick={onClose}
						type="button"
					>
						<FaX />
					</button>
				</form>
				{state?.success ? (
					<div className="flex flex-col items-center justify-center py-8">
						<h2 className="mb-6 text-2xl font-bold">{t("completed.title")}</h2>
						<p className="mb-6 text-center">{t("completed.message")}</p>
					</div>
				) : (
					<>
						<h2 className="text-2xl font-bold">{t("title")}</h2>
						<p className="py-4">{t("description")}</p>
						<form action={action} className="space-y-4">
							<input
								className="input input-primary w-full"
								name="name"
								placeholder={t("namePlaceholder")}
								required={true}
								type="text"
							/>
							<input
								className="input input-primary w-full"
								name="email"
								placeholder={t("emailPlaceholder")}
								required={true}
								type="email"
							/>
							<button
								aria-busy={isPending}
								className="btn btn-primary w-full"
								disabled={isPending}
								type="submit"
							>
								{isPending ? (
									<>
										<span className="loading loading-spinner" />
										{t("buttonTextPending")}
									</>
								) : (
									t("buttonText")
								)}
							</button>
						</form>
					</>
				)}
			</div>
			<form className="modal-backdrop" method="dialog">
				<button onClick={onClose} type="button" />
			</form>
		</dialog>
	);
}
