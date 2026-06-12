import { Link } from "../../../../i18n/navigation";

const languages = [
	{ code: "en", aria: "English", text: "English"},
	{ code: "ja", aria: "Japanese", text: "日本語"},
] as const;

export default function LanguageSelect() {
	return (
		<div className="flex items-center gap-4">
			{languages.map(({ code, aria, text}) => (
				<Link
					key={code}
					href={`/`}
          locale={code}
					aria-label={aria}
					className="tab text-lg"
					data-tip={aria}
				>
          {text}
				</Link>
			))}
		</div>
	);
}
