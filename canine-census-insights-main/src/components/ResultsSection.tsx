import { useEffect, useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import Tooltip from './Tooltip';

const ResultsSection = () => {
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

  const kpis = [
    {
      label: 'NaNs Initiaux',
      value: 12847,
      prefix: '',
      suffix: '',
      color: 'warning',
    },
    {
      label: 'NaNs Finaux',
      value: 92,
      prefix: '',
      suffix: '',
      color: 'success',
    },
    {
      label: 'Taux de Récupération',
      value: 99.28,
      prefix: '',
      suffix: '%',
      decimals: 2,
      color: 'primary',
    },
    {
      label: 'Précision R²',
      value: 0.94,
      prefix: '',
      suffix: '',
      decimals: 2,
      color: 'accent',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Résultats
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              L'<span className="gradient-text">Impact</span> Mesuré
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dashboard des indicateurs clés de performance de notre méthodologie d'imputation.
            </p>
          </div>

          {/* KPI Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="bento-card text-center scroll-animate"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <p className="text-sm text-muted-foreground mb-2">{kpi.label}</p>
                <p className={`text-3xl md:text-4xl font-bold text-${kpi.color}`}>
                  <AnimatedCounter
                    end={kpi.value}
                    suffix={kpi.suffix}
                    prefix={kpi.prefix}
                    decimals={kpi.decimals || 0}
                  />
                </p>
              </div>
            ))}
          </div>

          {/* Visual Results Gallery */}
          <div className="scroll-animate" style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-2xl font-semibold mb-8 text-center">Visualisations Cartographiques</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recovery Map */}
              <div className="glass-container rounded-3xl p-6 group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary mb-4">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* France outline */}
                    <path
                      d="M200 20 L280 50 L320 100 L350 150 L360 220 L340 270 L280 290 L200 295 L120 280 L80 240 L60 180 L70 120 L100 70 L150 40 Z"
                      fill="hsl(var(--secondary))"
                      stroke="hsl(var(--primary) / 0.5)"
                      strokeWidth="2"
                    />
                    
                    {/* Heat zones - filled areas */}
                    <ellipse cx="180" cy="120" rx="50" ry="40" fill="hsl(var(--primary) / 0.3)" />
                    <ellipse cx="240" cy="180" rx="60" ry="45" fill="hsl(var(--primary) / 0.4)" />
                    <ellipse cx="150" cy="200" rx="45" ry="35" fill="hsl(var(--primary) / 0.35)" />
                    <ellipse cx="280" cy="240" rx="40" ry="30" fill="hsl(var(--primary) / 0.25)" />
                    
                    {/* Scan effect */}
                    <rect className="scan-line" x="60" y="0" width="300" height="300" fill="transparent" />
                  </svg>
                  
                  {/* Overlay label */}
                  <div className="absolute bottom-4 left-4 glass-container rounded-lg px-3 py-1.5">
                    <span className="text-sm font-medium text-primary">Carte de Récupération</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Visualisation des communes ayant bénéficié de l'imputation de données.
                </p>
              </div>

              {/* LISA Hotspots Map */}
              <div className="glass-container rounded-3xl p-6 group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary mb-4">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* France outline */}
                    <path
                      d="M200 20 L280 50 L320 100 L350 150 L360 220 L340 270 L280 290 L200 295 L120 280 L80 240 L60 180 L70 120 L100 70 L150 40 Z"
                      fill="hsl(var(--secondary))"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    
                    {/* Hot spots (red) */}
                    <circle cx="240" cy="160" r="30" fill="hsl(var(--destructive) / 0.6)" />
                    <circle cx="180" cy="200" r="25" fill="hsl(var(--destructive) / 0.5)" />
                    <circle cx="290" cy="220" r="20" fill="hsl(var(--destructive) / 0.4)" />
                    
                    {/* Cold spots (blue) */}
                    <circle cx="140" cy="120" r="28" fill="hsl(var(--primary) / 0.5)" />
                    <circle cx="280" cy="100" r="22" fill="hsl(var(--primary) / 0.4)" />
                    <circle cx="120" cy="220" r="18" fill="hsl(var(--primary) / 0.35)" />
                    
                    {/* Legend */}
                    <g transform="translate(320, 20)">
                      <rect x="0" y="0" width="70" height="60" rx="4" fill="hsl(var(--card))" />
                      <circle cx="15" cy="15" r="6" fill="hsl(var(--destructive) / 0.6)" />
                      <text x="28" y="19" fill="hsl(var(--foreground))" fontSize="9">Hot Spot</text>
                      <circle cx="15" cy="35" r="6" fill="hsl(var(--primary) / 0.5)" />
                      <text x="28" y="39" fill="hsl(var(--foreground))" fontSize="9">Cold Spot</text>
                    </g>
                  </svg>
                  
                  {/* Overlay label */}
                  <div className="absolute bottom-4 left-4 glass-container rounded-lg px-3 py-1.5">
                    <Tooltip content="Local Indicators of Spatial Association : méthode statistique pour identifier les clusters spatiaux significatifs de valeurs similaires.">
                      <span className="text-sm font-medium text-destructive">LISA Hotspots</span>
                    </Tooltip>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Identification des clusters de concentration canine (Hot/Cold Spots).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
