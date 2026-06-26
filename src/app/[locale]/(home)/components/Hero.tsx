// import Image from "next/image";
// import heroBg from "";
// import { useTranslations } from "next-intl";
// import { Link } from "../../../../i18n/navigation";

type HeroProps = {
    title?: string;
    subtitle?: string;
    arrowLabel?: string;
    arrowTargetId?: string;
    backgroundImage?: string;
};

export default function Hero({ title, subtitle, arrowLabel, arrowTargetId, backgroundImage }: HeroProps) {
	// const t = useTranslations("HomePage.PastEvents");

	return (
        <section className="hero bg-base-200 min-h-screen relative">
            {/* Fixed background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            />

            {/* Adjust opacity */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Hero Content */}
            <div className="hero-content text-center relative z-10">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-gray-200">{title}</h1>
                    <p className="py-6 text-gray-200">{subtitle}</p>

                    {/* Arrow Button */}
                    <a
                        href={ `#${arrowTargetId}` }
                        className="flex flex-col items-center gap-1 mt-8 animate-bounce hover:opacity-70 transition-opacity"
                    >
                        <span className="text-sm font-medium text-gray-300">{arrowLabel}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
	);
}
