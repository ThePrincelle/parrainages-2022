import React from 'react';

export default function Footer() {
    return (
        <div className="mt-24">
			<div className="relative">
				<div
					className="absolute inset-0 flex items-center"
					aria-hidden="true"
				>
					<div className="w-full border-t border-gray-300 dark:border-gray-400" />
				</div>
			</div>

			<footer className="bg-white dark:bg-slate-900 dark:text-white">
				<div className="max-w-7xl mx-auto pt-10 px-4 overflow-hidden sm:px-6 lg:px-8">
					<p className="text-center text-base text-gray-400">
						<span className="block">
							&copy; {new Date().getFullYear()} • Tous
							droits réservés.{" "}
						</span>
						<span className="block">Application Open-Source (<a href="https://github.com/ThePrincelle/parrainages-2022/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors">MIT</a>) • <a href="https://github.com/ThePrincelle/parrainages-2022" className="text-gray-400 hover:text-gray-500 transition-colors" rel="noreferrer"
								target="_blank">Lien vers le code source</a></span>
						<span className="block">
							Conçu par{" "}
							<a
								className="text-gray-400 hover:text-gray-500 transition-colors"
								href="https://princelle.org"
								rel="noreferrer"
								target="_blank"
							>
								Maxime Princelle
							</a>
							.
						</span>
					</p>
				</div>
			</footer>
		</div>
    );
}