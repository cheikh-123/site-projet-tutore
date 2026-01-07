
import React from 'react';
import { ArrowRight, ArrowDown, HelpCircle, CheckCircle, XCircle, Database, Filter, Calculator } from 'lucide-react';
import { cn } from "@/lib/utils";

const MethodologyFlowchart = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Algorithme de Décision & Reconstruction</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Notre processus rigoureux de filtrage et d'imputation temporelle garantit l'intégrité scientifique des données restaurées.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl rounded-full scale-110 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/30">
                            <img
                                src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/imputation_temporelle_responsive.png`}
                                alt="Algorithme d'Imputation Temporelle"
                                className="w-full h-auto object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        </div>

                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                            Logique Finale Appliquée
                        </div>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 flex items-start gap-4">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 leading-none uppercase text-xs tracking-tight">Données Historiques</h4>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">Exploitation des archives 2013-2019 pour créer un modèle de tendance fiable par commune.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 flex items-start gap-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                                <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 leading-none uppercase text-xs tracking-tight">Projection 2020</h4>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">Application de la courbe démographique sur l'année T la plus récente pour une estimation optimale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologyFlowchart;
