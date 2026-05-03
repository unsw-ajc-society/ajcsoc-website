import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import ajcLogo from "../(home)/images/large-logo.png";

export default function Navbar() {
	const t = useTranslations("Navigation");

	return (
		<nav className="navbar bg-background text-text sticky top-0 z-50 shadow-sm px-4 lg:px-8">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl normal-case h-auto py-2">
					<Image
						src={ajcLogo}
						alt="AJC Logo"
						className="w-24 md:w-32 h-auto"
						priority
					/>
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 items-center gap-2">
					<li>
						<Link href="/">{t("home")}</Link>
					</li>
					<li>
						<details className="dropdown dropdown-end">
							<summary className="cursor-pointer">{t("archive")}</summary>
							<ul className="menu dropdown-content bg-background z-50 shadow min-w-40 rounded-box p-2 mt-4">
								<li>
									<Link href="/archive">{t("newsletter")}</Link>
								</li>
								<li>
									<Link href="/archive">{t("articles")}</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</nav>
	);
}
