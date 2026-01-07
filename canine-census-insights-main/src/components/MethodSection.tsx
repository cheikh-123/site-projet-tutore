import { useEffect, useRef } from 'react';
import Tooltip from './Tooltip';

const MethodSection = () => {
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

  const methods = [
    {
      step: '01',
      title: 'Imputation Temporelle',
      description: 'Analyse des historiques de données sur la période 2013-2019 pour identifier les patterns de population.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      step: '02',
      title: 'Imputation Spatiale (KNN)',
      description: (
        <>
          Algorithme utilisant les{' '}
          <Tooltip content="K-Nearest Neighbors : méthode d'apprentissage automatique qui prédit les valeurs manquantes en se basant sur les données des communes géographiquement proches.">
            5 plus proches voisins
          </Tooltip>{' '}
          géographiques pour combler les lacunes de données.
        </>
      ),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'accent',
    },
    {
      step: '03',
      title: 'Modélisation Statistique',
      description: (
        <>
          Comparaison des modèles{' '}
          <Tooltip content="Distribution de Poisson : modèle statistique adapté aux données de comptage (nombres entiers positifs) comme le nombre de chiens.">
            Poisson
          </Tooltip>{' '}
          et{' '}
          <Tooltip content="Distribution de Tweedie : famille de distributions flexible qui combine propriétés de Poisson et Gamma, idéale pour les données avec beaucoup de zéros.">
            Tweedie
          </Tooltip>{' '}
          pour une précision optimale (R² {'>'} 0.90).
        </>
      ),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'success',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-success text-sm font-medium tracking-widest uppercase mb-4">
              Méthodologie
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Le <span className="gradient-text">Moteur</span> d'Imputation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche multi-niveaux combinant analyse temporelle, spatiale et statistique.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {methods.map((method, index) => (
              <div
                key={index}
                className="bento-card scroll-animate"
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Step Number */}
                  <span className={`text-${method.color} text-sm font-mono mb-4`}>
                    {method.step}
                  </span>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${method.color}/10 flex items-center justify-center mb-6 text-${method.color}`}>
                    {method.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {method.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-${method.color} to-transparent`} />
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mt-16 scroll-animate" style={{ transitionDelay: '0.6s' }}>
            <div className="glass-container rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-warning/20 border border-warning/30 flex items-center justify-center">
                    <span className="text-warning font-bold">NaN</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Données Initiales</p>
                    <p className="text-2xl font-bold text-warning">Zones Blanches</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center flex-1 px-8">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-warning via-primary to-success" />
                  <svg className="w-8 h-8 text-success -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                <div className="md:hidden">
                  <svg className="w-8 h-8 text-primary rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-success/20 border border-success/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Données Imputées</p>
                    <p className="text-2xl font-bold text-success">99,28% Récupérés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
