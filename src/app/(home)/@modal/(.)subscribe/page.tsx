"use client";

import { useRouter } from "next/navigation";
import SubscribeModal from "../../components/SubscribeModal";

export default function SubscribeModalPage() {
	const router = useRouter();

	return <SubscribeModal onClose={() => router.back()} />;
}
