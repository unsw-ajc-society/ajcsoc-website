import { redirect } from "next/navigation";

export default function Subscribe() {
	// TODO: Implement direct subscription page
	// For now, do not allow direct access to the subscription page
	redirect("/");
}
