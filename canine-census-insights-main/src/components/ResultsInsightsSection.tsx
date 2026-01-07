import ResidualMap from './ResidualMap';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { Cpu, Zap } from 'lucide-react';

const ResultsInsightsSection = () => {
    const kpis = [
        {
            label: 'Modèle Précis (+/- 10%)',
            value: 79.4,
            prefix: '',
            suffix: '%',
            decimals: 1,
            colorClass: 'text-success',
        },
        {
            label: 'Surestimations (> 10%)',
            value: 5.1,
            prefix: '',
            suffix: '%',
            decimals: 1,
            colorClass: 'text-warning',
        },
        {
            label: 'Sous-estimations (> 10%)',
            value: 15.3,
            prefix: '',
            suffix: '%',
            decimals: 1,
            colorClass: 'text-blue-500',
        },
        {
            label: 'Précision R² (RF)',
            value: 0.90,
            prefix: '',
            suffix: '',
            decimals: 2,
            colorClass: 'text-indigo-500',
        },
    ];

    return (
        <section id="results" className="py-24 bg-gray-50 dark:bg-background overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Résultats & Analyses</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Visualisation spatiale des performances du modèle <strong>Random Forest</strong>. La médiane des résidus est de <strong>-1.12</strong>, indiquant une très faible erreur centrale malgré quelques valeurs extrêmes locales.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="space-y-12">
                        <ResidualMap />

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {kpis.map((kpi, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm text-center transform transition-all hover:scale-105"
                                >
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">{kpi.label}</p>
                                    <p className={`text-3xl md:text-4xl font-bold ${kpi.colorClass}`}>
                                        <AnimatedCounter
                                            end={kpi.value}
                                            suffix={kpi.suffix}
                                            prefix={kpi.prefix}
                                            decimals={kpi.decimals || 0}
                                        />
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Analysis Section for Graph 7 */}
                        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Cpu className="w-32 h-32 text-indigo-500" />
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        <Zap className="w-3 h-3" />
                                        <span>Analyse Approfondie</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Performance et Fidélité des Résidus</h3>
                                    <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        <p>
                                            L'analyse de la distribution des résidus (Graphique n°7) révèle une performance exceptionnelle du modèle <strong>Random Forest</strong>.
                                            La concentration massive des erreurs autour de zéro démontre que le modèle capture l'essence structurelle de la démographie canine sans biais systématique.
                                        </p>
                                        <ul className="space-y-3">
                                            <li>
                                                <strong className="text-gray-900 dark:text-gray-200">Dispersion Contrôlée :</strong>
                                                La distribution suit une loi quasi-normale centrée, avec une <strong>MAE médiane de ~38 chiens</strong>, ce qui est négligeable au regard de la précision demandée pour les politiques publiques.
                                            </li>
                                            <li>
                                                <strong className="text-gray-900 dark:text-gray-200">Gestion des Outliers :</strong>
                                                Les rares écarts extrêmes correspondent aux communes atypiques (refuges, zones de chasse intense) identifiées lors de l'audit initial, confirmant que l'erreur du modèle est corrélée à des facteurs exogènes non démographiques.
                                            </li>
                                            <li>
                                                <strong className="text-gray-900 dark:text-gray-200">Stabilité Prédictive :</strong>
                                                L'absence de traîne lourde (fat tails) dans les résidus valide la robustesse de l'approche par Random Forest face aux anciens modèles Poisson/Tweedie.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative rounded-xl overflow-hidden bg-white p-4 border border-gray-100 dark:border-gray-700 shadow-inner">
                                    <img
                                        src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/galerie/performance_residus.png`}
                                        alt="Performance des Résidus"
                                        className="w-full h-auto object-contain rounded-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/600x400?text=Image+Analyse+Non+Trouvée";
                                        }}
                                    />
                                    <div className="mt-4 text-center">
                                        <span className="text-[10px] text-gray-400 italic">Figure 7 : Courbe de densité et distribution des erreurs résiduelles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ResultsInsightsSection;
