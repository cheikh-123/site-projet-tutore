
import React from 'react';
import { Trophy, Timer, CheckCircle, TrendingUp } from 'lucide-react';

const ResultsInsightsSection = () => {
    return (
        <section id="results" className="py-24 bg-gray-50 dark:bg-background overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Résultats & Analyses</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Cette section accueillera prochainement les résultats détaillés de l'analyse démographique et spatiale.</p>
                </div>

                <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800/50 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                        <Timer className="w-8 h-8 text-indigo-400 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Analyses en cours de finalisation</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
                        Les cartes, clusters LISA et statistiques de restauration seront intégrés dès réception du dossier de résultats final.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ResultsInsightsSection;
