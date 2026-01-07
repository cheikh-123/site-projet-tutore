
import React from 'react';
import { Search, ShieldCheck, Database, Cpu } from 'lucide-react';

const DataTreatment = () => {
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
        <section id="treatment" className="py-24 bg-gray-50 dark:bg-gray-900/10 transition-colors duration-300">
            <div className="container mx-auto px-6">
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
        </section>
    );
};

export default DataTreatment;
