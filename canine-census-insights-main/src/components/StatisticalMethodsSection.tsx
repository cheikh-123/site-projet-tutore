
import React from 'react';
import { BarChart3, LineChart, PieChart, Activity, Cpu, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const StatisticalMethodsSection = () => {
    const cards = [
        { title: 'Statistiques Descriptives', items: ['Skewness & Kurtosis', 'Dispersion des Ratios', 'Distribution spatiale des NaNs'], icon: <BarChart3 className="w-5 h-5" /> },
        { title: 'Inférence & Validation', items: ['Validation croisée', 'MAE Médian: 38 chiens', 'R² = 0.90'], icon: <Activity className="w-5 h-5" /> },
        { title: 'Modélisation Random Forest', items: ['Ensemble Learning', 'Non-linéarité', 'Robustesse aux Outliers'], icon: <Cpu className="w-5 h-5" /> },
    ];

    return (
        <section id="methods" className="py-24 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Méthodes Statistiques</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Notre approche utilise un modèle <strong>Random Forest</strong> (Forêts Aléatoires) pour capturer les relations complexes et non-linéaires entre la démographie humaine et canine, surpassant les modèles linéaires traditionnels.
                    </p>
                </div>

                {/* Detailed Scientific Content */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center">
                            <Activity className="w-5 h-5 mr-2" />
                            L'Hypothèse du Proxy
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Nous postulons que la population humaine est un <strong>prédicteur robuste</strong> de la population canine. Dans les zones à données manquantes (NaNs), le ratio local observé dans les communes voisines sert de base à une imputation par <i>Spatial Lag</i>, pondérée par la masse démographique humaine.
                        </p>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center">
                            <Cpu className="w-5 h-5 mr-2" />
                            Choix du Modèle : Random Forest
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Les modèles linéaires (Poisson, Tweedie) ont montré leurs limites face à l'extrême variance des données (450k+).
                            <ul className="mt-2 space-y-2">
                                <li><strong>Problème</strong> : Incapacité à gérer simultanément les métropoles et les micro-villages ("Plafond de verre").</li>
                                <li><strong>Solution</strong> : Le Random Forest gère nativement cette hétérogénéité et les effets de seuil non-linéaires.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Validation & R²
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            La fiabilité est mesurée par le <strong>coefficient de détermination R²</strong>. Avec un score de 0.90, le modèle explique 90% de la variance observée. L'erreur absolue médiane (MAE) est de seulement 38 chiens, prouvant une grande précision locale malgré la dispersion nationale.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Visualisation 1: Modèles */}
                    <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-xl">
                        <h3 className="font-bold mb-4">Importance des Variables (Feature Importance)</h3>
                        <div className="h-48 border-l border-b border-white/20 relative flex items-end px-4 space-x-2">
                            <div className="flex-1 bg-white/10 h-[20%] rounded-t" />
                            <div className="flex-1 bg-white/20 h-[45%] rounded-t" />
                            <div className="flex-1 bg-white/40 h-[75%] rounded-t" />
                            <div className="flex-1 bg-white/80 h-[90%] rounded-t" />
                            <div className="flex-1 bg-white/30 h-[35%] rounded-t" />
                            <div className="absolute top-4 right-4 text-[10px] text-white/60 uppercase tracking-widest">Convergence Stochastic</div>
                        </div>
                        <p className="text-xs text-indigo-200 mt-6 italic">
                            La population humaine (2020) domine largement, suivie par la densité, le lag spatial et la superficie. Les variables socio-économiques fines n'apportent qu'un gain marginal.
                        </p>
                    </div>

                    {/* Visualisation 2: Corrélation */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center text-indigo-600 dark:text-indigo-400">Force du Modèle : R² = 0.90</h3>
                        <div className="relative h-48 bg-gray-50 dark:bg-gray-900/50 rounded-xl flex items-center justify-center p-8">
                            <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                            <div className="w-full h-px bg-indigo-500/20 absolute rotate-[320deg]" />
                            <div className="flex justify-around w-full relative z-10">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 transform" style={{ marginTop: `${i * 10}px` }} />
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 italic text-center">
                            Dispersion résiduelle minimale : la prédiction suit la ligne de régression avec une déviance inférieure à 5%.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 dark:bg-indigo-950/40 text-white rounded-3xl p-8 md:p-12 shadow-2xl mt-12 overflow-hidden relative border border-white/5 dark:border-indigo-500/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest border border-indigo-500/30">
                                Focus Technique : Imputation Spatiale
                            </div>
                            <h3 className="text-3xl font-bold">Continuité Spatiale & Imputation</h3>
                            <p className="text-indigo-100/80 text-lg leading-relaxed">
                                Au-delà du modèle global, nous appliquons une <strong>Imputation par les K-Plus Proches Voisins (KNN)</strong> sur les résidus.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                                        <span className="font-bold text-sm">K=5</span>
                                    </div>
                                    <p className="text-sm text-indigo-200">Si une commune est manquante, nous analysons la déviance de ses 5 voisins les plus proches pour ajuster notre estimation locale.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm text-indigo-200 italic">Respect de la Loi de Tobler : "Tout est lié à tout le reste, mais les choses proches sont plus liées que les choses lointaines."</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-inner">
                            <div className="grid grid-cols-3 gap-4 relative">
                                {/* Connecting lines (visual fluff) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <div className="w-full h-px bg-indigo-400 rotate-45" />
                                    <div className="w-full h-px bg-indigo-400 -rotate-45" />
                                </div>

                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500",
                                            i === 4
                                                ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_30px_rgba(79,70,229,0.5)] scale-110 z-10 animate-pulse'
                                                : i % 2 === 0
                                                    ? 'bg-white/10 border-white/20'
                                                    : 'bg-white/5 border-white/10 opacity-40'
                                        )}
                                    >
                                        {i === 4 ? (
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        ) : i % 2 === 0 ? (
                                            <div className="w-2 h-2 rounded-full bg-indigo-400" />
                                        ) : (
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-between text-[10px] uppercase tracking-widest text-indigo-300/60 font-bold px-2">
                                <span>Input Proxy</span>
                                <span>Output KNN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-colors">
                            <div className="text-indigo-600 dark:text-indigo-400 mb-4">{card.icon}</div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3">{card.title}</h4>
                            <ul className="space-y-2">
                                {card.items.map((item, j) => (
                                    <li key={j} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                        <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticalMethodsSection;
