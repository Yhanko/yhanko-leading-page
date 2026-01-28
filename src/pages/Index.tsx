import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TeamSection } from "@/components/TeamSection";
import { EventsSection } from "@/components/EventsSection";
import { AcademySection } from "@/components/AcademySection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

// Client logos
import roseartAtelier from "@/assets/clients/rosarte-logo.png";
import margem from "@/assets/clients/margem.png";

// Partner logos
import fdf from "@/assets/partners/fdf.jpeg";
import educaRealiza from "@/assets/partners/educa-e-realiza.png";
import acaoDigital from "@/assets/partners/acao-digital.png";
import ghettoArt from "@/assets/clients/ghetto-art.png";

// Team photos
import cajamba from "@/assets/team/romeu.jpeg";
import osvaldo from "@/assets/team/osvaldo.jpeg";
import bruno from "@/assets/team/bruno.png";
import helio from "@/assets/team/helio.jpeg";
import joel from "@/assets/team/joel.png";
import kalei from "@/assets/team/kalei.jpg";
import manuel from "@/assets/team/manuel.jpeg";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <SectorsSection />
        <ClientsSection />
        <TeamSection
        />
        <EventsSection />
        <AcademySection />
        <ProcessSection />
        <FAQSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
