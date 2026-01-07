import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Loader2 } from "lucide-react";

// Categorical colors based on the 'categories' column
const getCategoryColor = (category: string) => {
    if (!category || typeof category !== 'string') return '#94a3b8';

    const cat = category.toLowerCase();
    if (cat.includes('01.')) return '#ef4444'; // Forte Surestimation
    if (cat.includes('02.')) return '#f97316'; // Surestimation Modérée
    if (cat.includes('03.')) return '#22c55e'; // Modèle Précis
    if (cat.includes('04.')) return '#3b82f6'; // Sous-estimation Modérée
    if (cat.includes('05.')) return '#8b5cf6'; // Forte Sous-estimation
    if (cat.includes('99.')) return '#d1d5db'; // Indéterminé (Light grey)

    return '#94a3b8'; // Default grey
};

const mapStyle = (feature: any) => {
    const color = getCategoryColor(feature.properties.categories);
    return {
        fillColor: color,
        weight: 0.2, // Much thinner borders for 36k polygons
        opacity: 0.5,
        color: '#333333',
        fillOpacity: 0.85 // Much higher opacity for visibility
    };
};

const MapLegend = () => (
    <div className="absolute bottom-6 right-6 z-[1000] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-xl border shadow-2xl text-[10px] space-y-2 border-primary/20">
        <h4 className="font-bold mb-2 text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter">Précision du Modèle</h4>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#22c55e' }}></div>
            <span className="font-medium">Précis (+/- 10%)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#f97316' }}></div>
            <span className="font-medium">Surestimation (10-50%)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#ef4444' }}></div>
            <span className="font-medium">Forte Surestimation (&gt;50%)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#3b82f6' }}></div>
            <span className="font-medium">Sous-estimation (10-50%)</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#8b5cf6' }}></div>
            <span className="font-medium">Forte Sous-estimation (&gt;50%)</span>
        </div>
        <div className="flex items-center gap-2 border-t pt-2 border-gray-100 dark:border-gray-800">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: '#d1d5db' }}></div>
            <span className="text-muted-foreground italic">Données Indéterminées</span>
        </div>
    </div>
);

const ResidualMap = () => {
    const [geoData, setGeoData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Fetching GeoJSON...");
        const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
        fetch(`${basePath}/carte_residus_optimized.geojson`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log("GeoJSON loaded successfully:", data.features?.length, "features");
                setGeoData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading GeoJSON:", err);
                setLoading(false);
            });
    }, []);

    const onEachFeature = (feature: any, layer: any) => {
        const props = feature.properties;
        const tooltipContent = `
      <div class="p-2 space-y-1 font-sans">
        <div class="font-bold border-b pb-1 mb-1">${props.NOM_COMM}</div>
        <div class="flex justify-between gap-4">
          <span class="text-muted-foreground">Pop. Humaine:</span>
          <span class="font-medium">${Number(props.Pop_huma20).toLocaleString()}</span>
        </div>
        <div class="flex justify-between gap-4">
          <span class="text-muted-foreground">Chiens Prédits:</span>
          <span class="font-medium">${Math.round(props.y_pred).toLocaleString()}</span>
        </div>
        <div class="flex justify-between gap-4">
          <span class="text-muted-foreground">Chiens Réels:</span>
          <span class="font-medium">${props.Po_chien_h ? Math.round(props.Po_chien_h).toLocaleString() : 'N/A'}</span>
        </div>
        <div class="mt-2 text-[10px] italic text-primary">
          ${props.categories}
        </div>
      </div>
    `;
        layer.bindTooltip(tooltipContent, { sticky: true, opacity: 0.9 });

        layer.on({
            mouseover: (e: any) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 1.5,
                    color: '#333',
                    fillOpacity: 1
                });
            },
            mouseout: (e: any) => {
                const layer = e.target;
                layer.setStyle(mapStyle(feature));
            }
        });
    };

    return (
        <div className="w-full space-y-4">
            <Card className="overflow-hidden border-2 border-primary/10 shadow-xl">
                <CardHeader className="bg-primary/5 pb-4">
                    <CardTitle>Distribution Spatiale des Résidus</CardTitle>
                    <CardDescription>
                        Analyse interactive de l'écart entre la population canine réelle et les prédictions du modèle (Basé sur 36,000+ communes)
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 relative">
                    {loading ? (
                        <div className="h-[600px] flex flex-col items-center justify-center gap-4 bg-muted/20">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <p className="text-muted-foreground font-medium animate-pulse">Chargement des données cartographiques (19MB)...</p>
                        </div>
                    ) : (
                        <div className="h-[600px] w-full relative">
                            <MapContainer
                                center={[46.603354, 1.888334]}
                                zoom={6}
                                className="h-full w-full"
                                scrollWheelZoom={true}
                                preferCanvas={true}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                />
                                {geoData && (
                                    <GeoJSON
                                        key={`geojson-${geoData.features?.length || 0}`}
                                        data={geoData}
                                        style={mapStyle}
                                        onEachFeature={onEachFeature}
                                    />
                                )}
                                <MapLegend />
                            </MapContainer>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ResidualMap;
