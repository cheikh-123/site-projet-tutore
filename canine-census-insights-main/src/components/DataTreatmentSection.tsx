
import React from 'react';
import { Search, Trash2, Zap, ShieldCheck } from 'lucide-react';

const DataTreatmentSection = () => {
    const steps = [
        {
            title: 'Inspection',
            desc: 'Identification des anomalies (ratios chiens/humains aberrants).',
            icon: <Search className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Nettoyage',
            desc: 'Suppression des valeurs statistiquement impossibles (>50% pop).',
            icon: <Trash2 className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Transformation',
            desc: 'Standardisation des formats Insee et géoréférencement national.',
            icon: <Zap className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Validation',
            desc: 'Contrôle de la qualité via corrélation de Pearson (Proxy Humain).',
            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
        },
    ];

    const pipeline = [
        { num: 1, title: 'Importation', desc: 'Lecture du Shapefile et des données sociodémographiques.' },
        { num: 2, title: 'Fusion Spatiale', desc: 'Jointures des données historiques (2013-2019) par Code Insee.' },
        { num: 3, title: 'Enrichissement', desc: 'Imputation temporelle des données manquantes (historique 2013-2019).' },
        { num: 4, title: 'Imputation Spatiale', desc: 'Application du KNN K=5 et Spatial Lag pour les NaNs finaux.' },
    ];

    return (
        <section id="processing" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Traitement des Données</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Transformer des données brutes en jeux de données prêts pour l'analyse.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-20">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <h3 className="text-xl font-bold text-indigo-900 mb-6">Expliquer le Pipeline de Traitement</h3>
                    {pipeline.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-6 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                                {item.num}
                            </div>
                            <div className="flex-grow bg-white p-4 rounded-xl border border-gray-100 shadow-sm group-hover:border-indigo-200 transition-colors">
                                <h4 className="font-bold text-gray-800">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataTreatmentSection;
