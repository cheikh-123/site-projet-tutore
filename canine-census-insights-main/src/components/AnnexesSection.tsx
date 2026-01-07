import { useEffect, useRef } from 'react';

const AnnexesSection = () => {
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

  const resources = [
    {
      title: 'Rapport PDF',
      description: 'Document structuré complet avec titres, graphiques et cartes.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/rapport_final.pdf',
      color: 'destructive',
      badge: 'PDF',
    },
    {
      title: 'Geodatabase',
      description: 'Fichier GeoPackage (.gpkg) contenant toutes les couches spatiales.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      link: '/donnees.gpkg',
      color: 'primary',
      badge: 'GPKG',
    },
    {
      title: 'Story Map',
      description: 'Récit cartographique interactif pour explorer les résultats.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      link: '#',
      color: 'accent',
      badge: 'Web',
    },
    {
      title: 'Scripts Python',
      description: 'Code source pour la récupération et la modélisation des données.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: '#',
      color: 'success',
      badge: 'GitHub',
    },
  ];

  return (
    <section ref={sectionRef} id="annexes" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Ressources
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Rendu Final & <span className="gradient-text">Annexes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Téléchargez les livrables et accédez aux ressources techniques du projet.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {resources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.link}
                className="bento-card scroll-animate group flex items-start gap-5 hover:border-primary/40"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-${resource.color}/10 flex items-center justify-center text-${resource.color} group-hover:scale-110 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded bg-${resource.color}/20 text-${resource.color}`}>
                      {resource.badge}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Project Info */}
          <div className="glass-container rounded-2xl p-6 md:p-8 scroll-animate text-center" style={{ transitionDelay: '0.5s' }}>
            <p className="text-muted-foreground mb-4">
              Projet réalisé dans le cadre d'une étude en Data Science géospatiale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Temps de suivi : 120h
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2024
              </span>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border text-center scroll-animate" style={{ transitionDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground">
              © 2024 · Démographie Canine · Tous droits réservés
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default AnnexesSection;
