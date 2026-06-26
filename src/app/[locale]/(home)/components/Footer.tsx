import Link from 'next/link'
import SocialIcons from './SocialIcons'

export default function Footer() {
	return (
		<footer role="contentinfo" className="bg-gray-900 text-gray-200">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex flex-col space-y-4">
						<div className="flex items-center space-x-4">
							<Link href="/" className="text-white font-semibold text-lg">AJC Soc</Link>
							<p className="text-sm text-gray-400">Student society</p>
						</div>
					<div className="[&_svg]:fill-white">
						<SocialIcons />
					</div>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
					<p className="text-sm text-gray-500">© {new Date().getFullYear()} AJC Society. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
