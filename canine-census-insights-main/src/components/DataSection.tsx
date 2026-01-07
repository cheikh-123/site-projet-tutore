
import React from 'react';
import { Search, Trash2, Zap, ShieldCheck, Database, Cpu } from 'lucide-react';

const DataSection = () => {
    const sampleData = [
        { id: "75001", commune: "Paris 1er Arrondissement", pop_hum: 16260, dogs_2020: "NaN" },
        { id: "49007", commune: "Angers", pop_hum: 155876, dogs_2020: "NaN" },
        { id: "48001", commune: "Albaret-le-Comtal", pop_hum: 173, dogs_2020: "NaN" },
        { id: "01004", commune: "Ambérieu-en-Bugey", pop_hum: 14081, dogs_2020: 1842 },
    ];

    const gpkgSchema = `CREATE TABLE communes_canines (
  insee TEXT PRIMARY KEY,
  nom_commune TEXT,
  pop_humaine INTEGER,
  chiens_2020 INTEGER,
  geom MULTIPOLYGON
);

-- Exemple de requête spatiale
SELECT nom_commune, chiens_2020 
FROM communes_canines 
WHERE ST_Intersects(geom, :roi);`;

    const steps = [
        {
            title: 'Audit Temporel',
            desc: 'Analyse de 4 663 communes à historique partiel (42,6% des NaNs) : reconstruction via l\'année valide la plus récente, corrigée au prorata de l\'évolution démographique humaine.',
            icon: <Search className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Spatial Lag',
            desc: 'Captation de la dépendance spatiale pour neutraliser les biais de voisinage culturels, permettant au modèle d\'isoler la variabilité structurelle de la composante régionale.',
            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Données INSEE',
            desc: 'Enrichissement via la structure des ménages, la typologie des communes et des variables socio-démographiques fines.',
            icon: <Database className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Entrainement du Modèle',
            desc: 'Réalisation de plusieurs tests et optimisation des hyperparamètres du modèle Random Forest pour garantir une robustesse optimale (MAE médiane ~38, R² = 0.90).',
            icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        },
    ];



    return (
        <section id="structure" className="py-24 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Données & Traitement</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">De la détection des 10 957 zones blanches à la donnée nettoyée : le socle de notre démonstration scientifique.</p>
                </div>

                {/* Data Representation Row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    <div className="bg-gray-900 rounded-xl p-6 shadow-xl">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <span className="text-gray-400 text-xs ml-4">Format GeoPackage (GPKG)</span>
                        </div>
                        <pre className="text-blue-300 font-mono text-sm overflow-x-auto">
                            <code>{gpkgSchema}</code>
                        </pre>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-2 h-6 bg-indigo-600 rounded mr-2" />
                            Représentation Tabulaire
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 uppercase text-[10px] tracking-widest">
                                        <th className="py-3 px-2">ID</th>
                                        <th className="py-3 px-2">Commune</th>
                                        <th className="py-3 px-2 text-right">Pop. Humaine</th>
                                        <th className="py-3 px-2 text-right">Chiens 2020</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 dark:text-gray-300">
                                    {sampleData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 transition-colors">
                                            <td className="py-3 px-2 font-mono">{row.id}</td>
                                            <td className="py-3 px-2">{row.commune}</td>
                                            <td className="py-3 px-2 text-right">{row.pop_hum.toLocaleString()}</td>
                                            <td className={`py-3 px-2 text-right font-semibold ${row.dogs_2020 === "NaN" ? "text-red-400" : "text-indigo-600 dark:text-indigo-400"}`}>
                                                {row.dogs_2020}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Treatment Row */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">Traitement des Données</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bento-card text-center group">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Galerie Scientifique Complète</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic">
                            Retrouvez l'ensemble des analyses graphiques ayant permis la validation de notre méthodologie.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Distribution Initiale",
                                image: "distrib_pop.png",
                                interpretation: "Superposition des densités de population. On observe une forte corrélation visuelle dès les données brutes."
                            },
                            {
                                title: "Typologie des Anomalies",
                                image: "typologie_anomalies.png",
                                interpretation: "Identification des erreurs de saisie et des valeurs aberrantes avant le processus de nettoyage."
                            },
                            {
                                title: "Analyse de la Vacuité",
                                image: "typologie_nan.png",
                                interpretation: "85% des NaNs sont des zones blanches structurelles, justifiant l'usage d'un proxy démographique."
                            },
                            {
                                title: "Complétude des Données",
                                image: "completude_donnees.png",
                                interpretation: "État des lieux de la couverture territoriale avant et après l'audit temporel."
                            },
                            {
                                title: "Corrélation Brute (Log)",
                                image: "scatter_log_initial.png",
                                interpretation: "Relation logarithmique initiale montrant la dispersion avant filtrage des outliers."
                            },
                            {
                                title: "Corrélation Nettoyée",
                                image: "scatter_log_cleaned.png",
                                interpretation: "L'alignement quasi-parfait après nettoyage confirme la validité du proxy humain (R² = 0.90)."
                            },
                            {
                                title: "Performance des Résidus",
                                image: "performance_residus.png",
                                interpretation: "Distribution des erreurs du modèle final, montrant une concentration autour de zéro (MAE médiane ~38)."
                            },
                            {
                                title: "Cartographie des Résidus",
                                image: "residues_map.png",
                                interpretation: "Visualisation géographique de la précision du modèle sur l'ensemble des communes."
                            },
                            {
                                title: "Clusters Spatiaux (LISA)",
                                image: "cluster_residus.png",
                                interpretation: "L'analyse LISA montre une absence de biais spatial systématique (Moran's I proche de 0)."
                            },
                            {
                                title: "Stabilité du Modèle",
                                image: "stabilite_modele.png",
                                interpretation: "Validation croisée montrant la robustesse du Random Forest face aux variations du jeu de données."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bento-card group flex flex-col overflow-hidden">
                                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg bg-white p-2 border border-gray-100 dark:border-gray-800">
                                    <img
                                        src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/galerie/${item.image}`}
                                        alt={item.title}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/600x400?text=Image+Non+Trouvée";
                                        }}
                                    />
                                </div>
                                <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-300 mb-2">{item.title}</h4>
                                <div className="bg-indigo-50/50 dark:bg-indigo-950/30 p-4 rounded-xl border border-indigo-100/50 dark:border-indigo-500/20 flex-grow">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic">
                                        <span className="font-bold text-indigo-600 dark:text-indigo-400 not-italic">Interprétation : </span>
                                        {item.interpretation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataSection;
