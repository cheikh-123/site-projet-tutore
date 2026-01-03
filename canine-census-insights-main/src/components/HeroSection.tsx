import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 36594, label: 'Communes Analysées', suffix: '', color: 'primary' },
    { value: 10957, label: 'NaNs Initiaux', suffix: '', color: 'warning' },
    { value: 78, label: 'NaNs Finaux', suffix: '', color: 'success' },
    { value: 99.28, label: 'Récupération', suffix: '%', decimals: 2, color: 'accent' },
  ];
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-semibold tracking-wider uppercase">
            Analyse Démographique & Spatiale
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
            La démographie humaine comme proxy du nombre de chiens
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            Ce projet propose une estimation inédite du nombre de chiens pour l'ensemble des communes de France. En utilisant la démographie humaine comme proxy statistique, nous avons restauré les données manquantes pour offrir une cartographie complète de la population canine nationale.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 grid grid-cols-2 gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-white/20"></div>
          <div className="text-center space-y-3 border-r border-white/20 pr-4">
            <span className="block text-4xl md:text-5xl font-bold">
              <AnimatedCounter end={36594} />
            </span>
            <div className="space-y-1">
              <span className="block text-xs md:text-sm uppercase tracking-widest text-white font-semibold">Communes</span>
              <p className="text-[10px] md:text-xs text-white/60 leading-tight">Couverture exhaustive du territoire national.</p>
            </div>
          </div>
          <div className="text-center space-y-3">
            <span className="block text-4xl md:text-5xl font-bold">
              <AnimatedCounter end={10879} />
            </span>
            <div className="space-y-1">
              <span className="block text-xs md:text-sm uppercase tracking-widest text-white font-semibold">NaNs Retrouvés</span>
              <p className="text-[10px] md:text-xs text-white/60 leading-tight">Restauration des zones blanches par proxy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract background shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
