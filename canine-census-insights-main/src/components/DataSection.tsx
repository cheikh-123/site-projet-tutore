
import React from 'react';
import { Search, Trash2, Zap, ShieldCheck } from 'lucide-react';

const DataSection = () => {
    const sampleData = [
        { id: "75001", commune: "Paris 1er Arrondissement", pop_hum: 16260, dogs_2020: "NaN" },
        { id: "49007", commune: "Angers", pop_hum: 155876, dogs_2020: "NaN" },
        { id: "48001", commune: "Albaret-le-Comtal", pop_hum: 173, dogs_2020: "NaN" },
        { id: "01004", commune: "Ambérieu-en-Bugey", pop_hum: 14081, dogs_2020: 1842 },
    ];

    const rawJson = `{
  "insee": "75001",
  "commune": "Paris",
  "metrics": {
    "pop_2020": 2145906,
    "statut_initial": "NaN",
    "potentiel_reconstruction": "Élevé"
  }
}`;

    const steps = [
        {
            title: 'Audit Temporel',
            desc: '42,6% des NaNs de 2020 ont pu être restaurés via les données historiques (2013-2019).',
            icon: <Search className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Filtrage Outliers',
            desc: 'Élimination des communes avec un ratio chiens/humains > 0.5 (erratiques).',
            icon: <Trash2 className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Standardisation',
            desc: 'Alignement des codes INSEE et fusion avec la base ADMIN-EXPRESS de l\'IGN.',
            icon: <Zap className="w-6 h-6 text-indigo-600" />,
        },
        {
            title: 'Validation KNN',
            desc: 'Imputation des 57,4% restants par voisinage spatial (K=5) et lag temporel.',
            icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
        },
    ];

    const pipeline = [
        { num: 1, title: 'Extraction Source', desc: 'Lecture des flux I-CAD et recalage sur les limites communales.' },
        { num: 2, title: 'Analyse des Ruptures', desc: 'Identification des zones de non-déclaration (zones blanches).' },
        { num: 3, title: 'Reconstruction Temporelle', desc: 'Utilisation de la plus ancienne valeur valide entre 2013 et 2019 comme base de calcul.' },
        { num: 4, title: 'Estimation Finale', desc: 'Calcul de la population canine finale par modèles de régression robustes.' },
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
                            <span className="text-gray-400 text-xs ml-4">Format JSON / GeoJSON</span>
                        </div>
                        <pre className="text-blue-300 font-mono text-sm overflow-x-auto">
                            <code>{rawJson}</code>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">Processus de Nettoyage</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {step.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pipeline Section */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-8 flex items-center justify-center">
                        <span className="w-8 h-px bg-indigo-200 dark:bg-indigo-500/30 mr-4" />
                        Pipeline de Traitement des Données
                        <span className="w-8 h-px bg-indigo-200 dark:bg-indigo-500/30 ml-4" />
                    </h3>
                    <div className="space-y-4">
                        {pipeline.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-6 group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform text-sm">
                                    {item.num}
                                </div>
                                <div className="flex-grow bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm group-hover:border-indigo-200 dark:group-hover:border-indigo-400 transition-colors">
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
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
