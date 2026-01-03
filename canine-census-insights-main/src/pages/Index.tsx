import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataSection from "@/components/DataSection";
import StatisticalMethodsSection from "@/components/StatisticalMethodsSection";
import ResultsInsightsSection from "@/components/ResultsInsightsSection";
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
        <DataSection />
      </ScrollReveal>
      <ScrollReveal>
        <StatisticalMethodsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ResultsInsightsSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
