
import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#' },
        { label: 'Data', href: '#structure' },
        { label: 'Methods', href: '#methods' },
        { label: 'Results', href: '#results' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
            isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-3" : "bg-transparent"
        )}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                        <Database className="text-white w-6 h-6" />
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight",
                        isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 md:text-white dark:text-white"
                    )}>Démographie Canine</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                                isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-800 md:text-white/90 dark:text-white/90"
                            )}
                        >
                            {link.label === 'Home' ? 'Accueil' :
                                link.label === 'Data' ? 'Données' :
                                    link.label === 'Methods' ? 'Méthodes' :
                                        link.label === 'Results' ? 'Résultats' : link.label}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4">
                        <a
                            href="#download"
                            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                        >
                            Rapport PDF
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 p-6 animate-fade-in shadow-xl">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label === 'Home' ? 'Accueil' :
                                    link.label === 'Data' ? 'Données' :
                                        link.label === 'Methods' ? 'Méthodes' :
                                            link.label === 'Results' ? 'Résultats' : link.label}
                            </a>
                        ))}
                        <a
                            href="#download"
                            className="w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Rapport PDF
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
