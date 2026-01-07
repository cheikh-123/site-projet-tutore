
import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Explorer les Données ?</h2>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                    Téléchargez le rapport final complet ou accédez à la base de données brute corrigée au format GeoPackage.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/rapport_final.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl transition-all active:scale-95"
                    >
                        Consulter le Rapport PDF
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/donnees.gpkg`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-indigo-500/20 text-white font-bold rounded-full border border-white/30 hover:bg-indigo-500/30 transition-all"
                    >
                        Accéder à la Geodatabase (GPKG)
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center border-b border-white/5 pb-12 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">G</div>
                            <span className="font-bold text-xl tracking-tight">Démographie Canine</span>
                        </div>
                        <p className="text-slate-400 text-sm max-w-xs">
                            Une analyse rigoureuse de la démographie canine en France, utilisant des méthodes spatiales avancées.
                        </p>
                    </div>

                    <div className="flex justify-end space-x-6">
                        <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors"><Github size={20} /></a>
                        <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors"><Globe size={20} /></a>
                        <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="flex flex-col md:row justify-between items-center text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Projet Tutoré - Démographie Canine. Développé par ABDEL, ADAM, CHEIKH ; et sous la direction de Mr VINCENT GODARD.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
