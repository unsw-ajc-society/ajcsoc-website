import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import ajcLogo from "../(home)/images/large-logo.png";

export default function Navbar() {
	const t = useTranslations("Navigation");

	return (
		<nav className="navbar sticky top-0 z-50 bg-base-100 px-4 text-base-content shadow-sm lg:px-8">
			<div className="flex-1">
				<Link className="btn btn-ghost h-auto py-2 text-xl normal-case" href="/">
					<Image alt="AJC Logo" className="h-auto w-24 md:w-32" priority={true} src={ajcLogo} />
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal items-center gap-2 px-1">
					<li>
						<Link href="/">{t("home")}</Link>
					</li>
					<li>
						<details className="dropdown dropdown-end">
							<summary className="cursor-pointer">{t("archive")}</summary>
							<ul className="menu dropdown-content z-50 mt-4 min-w-40 rounded-box bg-base-100 p-2 shadow">
								<li>
									<Link href="/archive#newsletter">{t("newsletter")}</Link>
								</li>
								<li>
									<Link href="/archive#articles">{t("articles")}</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</nav>
	);
}
