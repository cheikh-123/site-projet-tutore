import { useEffect, useRef } from 'react';
import Tooltip from './Tooltip';

const HypothesisSection = () => {
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
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              L'Hypothèse
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Le <span className="gradient-text">Proxy Humain</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La population humaine est le miroir de la population canine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Correlation Graph */}
            <div className="scroll-animate" style={{ transitionDelay: '0.2s' }}>
              <div className="glass-container rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  Corrélation Population Humaine / Canine
                </h3>
                
                <div className="relative aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Grid */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <g key={i}>
                        <line 
                          x1="50" y1={50 + i * 75} 
                          x2="380" y2={50 + i * 75} 
                          stroke="hsl(var(--border))" 
                          strokeWidth="1" 
                        />
                        <line 
                          x1={50 + i * 82.5} y1="50" 
                          x2={50 + i * 82.5} y2="350" 
                          stroke="hsl(var(--border))" 
                          strokeWidth="1" 
                        />
                      </g>
                    ))}

                    {/* Axis labels */}
                    <text x="215" y="385" fill="hsl(var(--muted-foreground))" fontSize="12" textAnchor="middle">
                      Population Humaine
                    </text>
                    <text x="20" y="200" fill="hsl(var(--muted-foreground))" fontSize="12" textAnchor="middle" transform="rotate(-90, 20, 200)">
                      Population Canine
                    </text>

                    {/* Regression line */}
                    <line 
                      x1="70" y1="330" 
                      x2="360" y2="70" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth="3" 
                      strokeDasharray="8,4"
                      className="animate-fade-in"
                      style={{ animationDelay: '0.5s' }}
                    />

                    {/* Data points */}
                    {[
                      { x: 90, y: 310 }, { x: 110, y: 290 }, { x: 130, y: 275 },
                      { x: 150, y: 255 }, { x: 170, y: 240 }, { x: 190, y: 220 },
                      { x: 210, y: 205 }, { x: 230, y: 185 }, { x: 250, y: 175 },
                      { x: 270, y: 155 }, { x: 290, y: 140 }, { x: 310, y: 120 },
                      { x: 330, y: 105 }, { x: 350, y: 85 },
                      { x: 100, y: 300 }, { x: 140, y: 265 }, { x: 180, y: 230 },
                      { x: 220, y: 195 }, { x: 260, y: 165 }, { x: 300, y: 130 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="hsl(var(--accent))"
                        opacity="0.8"
                        className="animate-fade-in"
                        style={{ animationDelay: `${0.7 + i * 0.05}s` }}
                      />
                    ))}

                    {/* R² indicator */}
                    <g transform="translate(280, 320)">
                      <rect x="0" y="0" width="90" height="30" rx="4" fill="hsl(var(--secondary))" />
                      <text x="45" y="20" fill="hsl(var(--primary))" fontSize="14" fontWeight="bold" textAnchor="middle">
                        R² = 0.94
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="scroll-animate" style={{ transitionDelay: '0.4s' }}>
              <div className="space-y-8">
                <blockquote className="relative pl-6 border-l-4 border-primary">
                  <p className="text-xl md:text-2xl text-foreground/90 italic font-light leading-relaxed">
                    "L'homme et le chien partagent le même espace, les mêmes contraintes et la même dynamique démographique."
                  </p>
                </blockquote>

                <div className="space-y-6">
                  <div className="glass-container rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Corrélation Linéaire Forte</h4>
                        <p className="text-muted-foreground text-sm">
                          Les données révèlent une corrélation exceptionnellement forte (
                          <Tooltip content="Le coefficient R² mesure la proportion de variance expliquée par le modèle. 0.94 signifie que 94% de la variation est expliquée.">
                            R² = 0.94
                          </Tooltip>
                          ) entre population humaine et canine.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-container rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Validation Scientifique</h4>
                        <p className="text-muted-foreground text-sm">
                          Cette hypothèse permet de prédire la population canine avec une précision statistiquement significative.
                        </p>
                      </div>
                    </div>
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

export default HypothesisSection;
