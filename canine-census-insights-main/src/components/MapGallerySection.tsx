import { useEffect, useRef } from 'react';
import Tooltip from './Tooltip';

const MapGallerySection = () => {
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

  const maps = [
    {
      id: 'zones-blanches',
      title: 'Zones Blanches',
      description: 'Localisation du secret statistique (Insee). Ces zones représentent les communes où les données canines sont manquantes ou protégées.',
      color: 'warning',
      spots: [
        { cx: 180, cy: 130, r: 25, opacity: 0.7 },
        { cx: 250, cy: 180, r: 30, opacity: 0.6 },
        { cx: 140, cy: 200, r: 20, opacity: 0.5 },
        { cx: 290, cy: 140, r: 22, opacity: 0.55 },
        { cx: 200, cy: 240, r: 28, opacity: 0.65 },
        { cx: 120, cy: 150, r: 18, opacity: 0.45 },
      ],
    },
    {
      id: 'hotspots-lisa',
      title: 'Hotspots LISA',
      description: 'Clusters significatifs de données manquantes identifiés par analyse spatiale. Hot spots (rouge) et Cold spots (bleu).',
      color: 'destructive',
      isLisa: true,
    },
    {
      id: 'population-restauree',
      title: 'Population Restaurée',
      description: 'Carte nationale complète après application du proxy démographique. 99,28% des données récupérées.',
      color: 'success',
      spots: [
        { cx: 180, cy: 120, r: 50, opacity: 0.3 },
        { cx: 240, cy: 180, r: 60, opacity: 0.4 },
        { cx: 150, cy: 200, r: 45, opacity: 0.35 },
        { cx: 280, cy: 240, r: 40, opacity: 0.25 },
        { cx: 200, cy: 160, r: 70, opacity: 0.45 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Cartographies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Galerie des <span className="gradient-text">Preuves</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trois visualisations clés illustrant l'étendue du problème et l'efficacité de notre solution.
            </p>
          </div>

          {/* Maps Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {maps.map((map, index) => (
              <div
                key={map.id}
                className="bento-card scroll-animate group"
                style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Map Visualization */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary/50 mb-4 flex items-center justify-center">
                  <img
                    src={`/${map.id}.png`}
                    alt={map.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                  {/* Scan line effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-1 bg-primary/20 absolute top-0 animate-[scan_3s_linear_infinite]" />
                  </div>
                </div>

                {/* Map Info */}
                <div className="space-y-2">
                  <h3 className={`text-lg font-semibold text-${map.color}`}>
                    {map.id === 'hotspots-lisa' ? (
                      <Tooltip content="Local Indicators of Spatial Association : méthode statistique pour identifier les clusters spatiaux significatifs.">
                        {map.title}
                      </Tooltip>
                    ) : (
                      map.title
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {map.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapGallerySection;
