import React from 'react';
import Footer from './Footer';
import Stats from './Stats';

function App() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 text-left sm:px-6 lg:px-8 lg:py-12">
        <h1 className="text-4xl font-semibold">Parrainages</h1>
        <h2 className="text-2xl text-cyan-700 pt-2">Présidentielles 2022</h2>
        <div className="mt-12">
          <p>Site mis à jour tous les jours à 19h.</p>
          <p>Ce service n'est associé à aucun parti politique.</p>
          <p className="mb-4">Données obtenues du <a href="https://presidentielle2022.conseil-constitutionnel.fr/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-800 hover:underline">site du Conseil Constitutionnel</a>.</p>
          <div className="relative mb-12">
				<div
					className="absolute inset-0 flex items-center"
					aria-hidden="true"
				>
					<div className="w-full border-t border-gray-300" />
				</div>
			</div>
          <Stats />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
