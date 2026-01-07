
import React from 'react';

const DataGallery = () => {
    const galleryItems = [
        {
            title: "Typologie des Anomalies",
            image: "typologie_anomalies.png",
            interpretation: "Identification des erreurs de saisie et des valeurs aberrantes avant le processus de nettoyage."
        },
        {
            title: "Analyse de la complétude",
            image: "completude_donnees.png",
            interpretation: "Nombre de données d’années manquantes par commune pour les données sur la population canine entre 2013 et 2020."
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
            title: "Performance du modèle sur les données des années 2013-2020",
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
            title: "Performance Temporelle & Stabilité",
            image: "stabilite_modele.png",
            interpretation: "Performance du modèle sur les données des années 2013-2020. La stabilité du R² et la diminution de la MAE (Erreur Moyenne) confirment la robustesse de l'algorithme sur l'historique décennal."
        }
    ];

    return (
        <section id="gallery" className="py-24 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Galerie Scientifique Complète</h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic">
                        Retrouvez l'ensemble des analyses graphiques ayant permis la validation de notre méthodologie.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, idx) => (
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
        </section>
    );
};

export default DataGallery;
