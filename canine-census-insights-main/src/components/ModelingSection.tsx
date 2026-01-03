import { useEffect, useRef } from 'react';
import Tooltip from './Tooltip';

const ModelingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const models = [
    {
      name: 'Modèle Poisson',
      description: 'Régression adaptée aux données de comptage avec distribution asymétrique.',
      r2: 0.91,
      residuals: 'Faible dispersion',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M4 24L12 16L18 20L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="16" r="2" fill="currentColor"/>
          <circle cx="18" cy="20" r="2" fill="currentColor"/>
          <circle cx="28" cy="8" r="2" fill="currentColor"/>
        </svg>
      ),
      color: 'primary',
    },
    {
      name: 'Modèle Tweedie',
      description: 'Distribution compound Poisson-Gamma pour la gestion de la surdispersion.',
      r2: 0.94,
      residuals: 'Optimal',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M4 28C4 28 8 20 16 20C24 20 28 12 28 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 24C4 24 10 18 16 18C22 18 28 10 28 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ),
      color: 'accent',
      recommended: true,
    },
    {
      name: 'Modèles Linéaires',
      description: 'OLS et GLM classiques utilisés comme baseline de comparaison.',
      r2: 0.87,
      residuals: 'Hétéroscédasticité',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <line x1="4" y1="28" x2="28" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="22" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="26" cy="8" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      ),
      color: 'muted-foreground',
    },
  ];

  return (
    <section ref={sectionRef} id="modeling" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Modélisation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Analyse de <span className="gradient-text">Régression</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comparaison des modèles statistiques pour valider le proxy démographique humain → canin.
            </p>
          </div>

          {/* Models Comparison */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {models.map((model, index) => (
              <div
                key={model.name}
                className={`bento-card scroll-animate relative ${model.recommended ? 'ring-2 ring-accent/50' : ''}`}
                style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
              >
                {model.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Recommandé
                  </div>
                )}

                <div className={`text-${model.color} mb-4`}>
                  {model.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{model.description}</p>

                <div className="space-y-4">
                  {/* R² Score */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <Tooltip content="Coefficient de détermination : mesure la qualité d'ajustement du modèle.">
                        <span className="text-muted-foreground">R² Score</span>
                      </Tooltip>
                      <span className={`font-semibold text-${model.color}`}>{model.r2}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${model.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${model.r2 * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Residuals */}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Résidus</span>
                    <span className={`text-${model.color === 'muted-foreground' ? 'warning' : 'success'}`}>
                      {model.residuals}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="glass-container rounded-2xl p-6 md:p-8 scroll-animate" style={{ transitionDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Conclusion Modélisation</h4>
                <p className="text-muted-foreground">
                  Le <span className="text-accent font-medium">modèle Tweedie</span> avec un R² de 0.94 offre le meilleur compromis entre 
                  précision et gestion de la surdispersion, validant ainsi l'utilisation du proxy démographique humain pour estimer 
                  la population canine communale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelingSection;
