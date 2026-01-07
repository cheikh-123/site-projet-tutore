import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataStructure from "@/components/DataStructure";
import DataTreatment from "@/components/DataTreatment";
import DataGallery from "@/components/DataGallery";
import SpatialImputation from "@/components/SpatialImputation";
import MethodologyFlowchart from "@/components/MethodologyFlowchart";
import ResultsInsightsSection from "@/components/ResultsInsightsSection";
import ResidualMap from "@/components/ResidualMap";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-100 selection:text-indigo-600 dark:selection:bg-indigo-900/30 dark:selection:text-indigo-400 overflow-x-hidden transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <HeroSection />

      <ScrollReveal>
        <div className="py-12 bg-gray-50 dark:bg-gray-900/10">
          <div className="container mx-auto px-6">
            <ResidualMap />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ResultsInsightsSection />
      </ScrollReveal>

      <ScrollReveal>
        <DataStructure />
      </ScrollReveal>

      <ScrollReveal>
        <DataTreatment />
      </ScrollReveal>

      <ScrollReveal>
        <SpatialImputation />
      </ScrollReveal>

      <ScrollReveal>
        <MethodologyFlowchart />
      </ScrollReveal>



      <ScrollReveal>
        <DataGallery />
      </ScrollReveal>

      <Footer />
    </main>
  );
};

export default Index;
