import SubscribeModal from "./SubscribeModal";

// Intercepting route must be a dynamic route with OpenNext
// I guess this is because we cannot intercept to static routes as they are published as ASSETS
export const dynamic = "force-dynamic";

export default function SubscribeModalPage() {
	return <SubscribeModal />;
}
