import { useEffect, useRef } from 'react';

const ProblemSection = () => {
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
    <section id="problem" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-warning text-sm font-medium tracking-widest uppercase mb-4">
              Le Défi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Le Problème des <span className="gradient-text-warning">Zones Blanches</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Le défi du manque de données communales dans l'estimation de la population canine française.
            </p>
          </div>

          {/* Map Visualization */}
          <div className="relative scroll-animate" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-container rounded-3xl p-8 md:p-12 scan-line">
              {/* Stylized France Map with Data Holes */}
              <div className="relative aspect-[4/3] md:aspect-[16/9]">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  {/* France silhouette approximation */}
                  <path
                    d="M400 50 L550 100 L600 180 L650 250 L700 350 L680 450 L600 500 L500 550 L400 560 L300 540 L200 480 L150 400 L120 300 L150 200 L200 120 L300 80 Z"
                    fill="hsl(var(--secondary))"
                    stroke="hsl(var(--primary) / 0.3)"
                    strokeWidth="2"
                  />
                  
                  {/* Data zones (filled) */}
                  <circle cx="350" cy="200" r="40" fill="hsl(var(--primary) / 0.4)" className="animate-pulse" style={{ animationDelay: '0s' }} />
                  <circle cx="450" cy="280" r="35" fill="hsl(var(--primary) / 0.4)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <circle cx="300" cy="350" r="45" fill="hsl(var(--primary) / 0.4)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <circle cx="500" cy="400" r="38" fill="hsl(var(--primary) / 0.4)" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
                  <circle cx="380" cy="450" r="42" fill="hsl(var(--primary) / 0.4)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />

                  {/* Zones Blanches (data holes) */}
                  <circle cx="250" cy="250" r="30" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="550" cy="320" r="25" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="420" cy="380" r="28" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="320" cy="480" r="22" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="480" cy="180" r="26" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="200" cy="380" r="24" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Legend */}
                  <g transform="translate(600, 480)">
                    <circle cx="0" cy="0" r="8" fill="hsl(var(--primary) / 0.4)" />
                    <text x="15" y="5" fill="hsl(var(--foreground))" fontSize="12">Données disponibles</text>
                    <circle cx="0" cy="25" r="8" fill="hsl(var(--warning) / 0.3)" stroke="hsl(var(--warning))" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="15" y="30" fill="hsl(var(--foreground))" fontSize="12">Zones Blanches</text>
                  </g>
                </svg>

                {/* Scanning effect overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
                </div>
              </div>
            </div>

            {/* Alert Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-container glow-warning rounded-full px-6 py-3 border-warning/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-warning animate-pulse" />
                <span className="text-warning font-medium">
                  Données critiques absentes dans de nombreuses régions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
