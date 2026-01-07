
import React from 'react';
import { Activity, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const SpatialImputation = () => {
    return (
        <section className="py-12 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="bg-gray-900 dark:bg-indigo-950/40 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative border border-white/5 dark:border-indigo-500/20">
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
            </div>
        </section>
    );
};

export default SpatialImputation;
