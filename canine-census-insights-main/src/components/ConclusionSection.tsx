import { useEffect, useRef } from 'react';

const ConclusionSection = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center scroll-animate">
            <span className="inline-block text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">
              Conclusion
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Un <span className="gradient-text">Proxy Fiable</span> Validé
            </h2>
            
            <div className="glass-container rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                Cette étude démontre que la démographie humaine constitue un proxy robuste et fiable 
                pour estimer la population canine à l'échelle communale. Avec un taux de récupération 
                de <span className="text-primary font-semibold">99,28%</span> des données manquantes 
                et une précision statistique de <span className="text-primary font-semibold">R² = 0,94</span>, 
                notre méthodologie offre une solution viable pour combler les lacunes des données démographiques canines.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 glass-container rounded-full px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm">Méthodologie Reproductible</span>
                </div>
                <div className="flex items-center gap-2 glass-container rounded-full px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm">Précision Statistique Élevée</span>
                </div>
                <div className="flex items-center gap-2 glass-container rounded-full px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm">Applications Multiples</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <footer className="scroll-animate" style={{ transitionDelay: '0.3s' }}>
            <div className="glass-container rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Projet Data Science</p>
                  <p className="font-semibold">Démographie Canine par Proxy Humain</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 glass-container rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/50 hover:glow-primary"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code Source
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 glass-container rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/50 hover:glow-primary"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Rapport PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                © 2024 — Projet de Recherche en Data Science
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
