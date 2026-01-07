
import React from 'react';

const DataStructure = () => {
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

    return (
        <section id="structure" className="py-24 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Données & Traitement</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">De la détection des 10 957 zones blanches à la donnée nettoyée : le socle de notre démonstration scientifique.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center w-full">
                            <span className="w-2 h-6 bg-indigo-600 rounded mr-2" />
                            Répartition de la Typologie des Communes
                        </h3>
                        <div className="relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900/50 p-4 border border-gray-100 dark:border-gray-700 shadow-inner w-full flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/galerie/typologie_nan.png`}
                                alt="Répartition de la Typologie des Communes"
                                className="w-full h-auto object-contain rounded-md dark:mix-blend-lighten contrast-125"
                            />
                        </div>
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
            </div>
        </section>
    );
};

export default DataStructure;
