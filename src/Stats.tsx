import React, { useState, useEffect } from 'react';
import { BadgeCheckIcon, BanIcon } from '@heroicons/react/solid'

export default function Stats() {
    interface Candidat {
        id: number;
        name: string;
        votes: number;
        votesRatioStep: number;
        votesRatioProgress: number;
    }

    const [stats, setStats] = useState<Candidat[]>([]);
    const [error, setError] = useState(false);
    const [nbVotes, setNbVotes] = useState(0);

    const step: number = 500;
    const votants: number = 42000;

    // Calculer le nombre de jours restants avant le 10/04/2022
    const date = new Date();
    const dateFin = new Date(2022, 4, 10);
    const diff = dateFin.getTime() - date.getTime();
    const nbJours = Math.ceil(diff / (1000 * 3600 * 24));

    useEffect(() => {
        // Load JSON data from local file
        fetch('/stats.json').then(response => response.json()).then(data => {
            console.log(data);
            let formattedData: Candidat[] = [];
            let id = 0;
            let votesTotal = 0;
            
            for (let [key, value] of Object.entries(data)) {
                votesTotal = votesTotal + parseInt(String(value));
                let votesRatioStep = (100 * parseInt(String(value))) / step;
                let votesRatioProgress = votesRatioStep > 100 ? 100 : votesRatioStep;
                formattedData.push({"id": id, "name": key, "votes": parseInt(String(value)), "votesRatioStep": votesRatioStep, "votesRatioProgress": votesRatioProgress});
                id++;
            };
            setNbVotes(votesTotal);
            setStats(formattedData);
        }).catch(error => {
            console.log(error);
            setError(true);
        });
    }, []);

    return (
        <div>
            {nbVotes > 0 && <p className="text-xl"><span className="text-semibold underline underline-offset-1">Nombre de signatures :</span><br className="block sm:hidden"/>{nbVotes} /{votants} ({((100*nbVotes)/votants).toFixed(2)}%)</p>}
            {nbJours > 0 && <p className="text-xl pt-3">{nbJours} jours restants avant le 10 avril 2022 <br className="block sm:hidden"/>(fin des recueils de signatures)</p>}
        <div className="space-y-5 mt-10">
            {(stats && stats.length > 0) ? stats.map((candidat) => (
                <div className="flex align-center w-full">
                    <div className="text-sm flex align-center text-right">
                        {candidat.id == 0 && <span className="text-green-800 pr-3 font-bold text-xl my-auto w-12">1st</span>}
                        {candidat.id == 1 && <span className="text-green-700 pr-3 font-bold text-xl my-auto w-12">2nd</span>}
                        {candidat.id == 2 && <span className="text-green-600 pr-3 font-bold text-xl my-auto w-12">3rd</span>}
                        {candidat.votes >= 500 ? 
                            <BadgeCheckIcon className="text-green-600 w-12" /> : 
                            <BanIcon className="text-red-600 w-12" />
                        }
                    </div>
                    <div className="pl-4 w-full my-auto">
                        <div className="text-left">
                        <p key={candidat.id} className="text-lg">
                            <span className="font-normal">{candidat.name}</span> :<br className="block sm:hidden"/> <span className="font-semibold">{candidat.votes}/{step} ({((100 * candidat.votes) / nbVotes).toFixed(2)}%)</span>
                        </p>
                        </div>


                        {candidat.votesRatioProgress != 100 && <div className="w-full bg-gray-300 rounded-full h-3.5">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{width: candidat.votesRatioProgress + "%"}}></div>
                        </div>}
                    </div>
                </div>
            )) : error ? <p className="text-red-800 text-bold text-xl">Erreur lors du chargement des résultats.</p>: <p className="text-cyan-800 text-bold text-xl">Chargement des résultats en cours.</p>}
        </div>
        </div>
    );
}