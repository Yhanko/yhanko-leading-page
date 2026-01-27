import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { SectorsSection } from "@/components/SectorsSection";
import { CarouselSection } from "@/components/CarouselSection";
import { EventsSection } from "@/components/EventsSection";
import { AcademySection } from "@/components/AcademySection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

// Client logos
import roseartAtelier from "@/assets/clients/rosarte-logo.png";
import margem from "@/assets/clients/margem.png";
import ghettoArt from "@/assets/clients/ghetto-art.png";

// Partner logos
import fdf from "@/assets/partners/fdf.jpeg";
import educaRealiza from "@/assets/partners/educa-e-realiza.png";
import acaoDigital from "@/assets/partners/acao-digital.png";

// Team photos
import ceoPhoto from "@/assets/team/ceo.jpeg";
import ctoPhoto from "@/assets/team/cto.jpeg";
import designerPhoto from "@/assets/team/designer.jpeg";
import developerPhoto from "@/assets/team/developer.jpeg";
import marketingPhoto from "@/assets/team/marketing.jpeg";

const clients = [
  { id: 1, name: "RoseArte Atelier", image: roseartAtelier },
  { id: 2, name: "Margem", image: margem },
  { id: 3, name: "Ghetto Art", image: ghettoArt },
  { id: 5, name: "Margem", image: margem },
];

const partners = [
  { id: 1, name: "FDF", image: fdf },
  { id: 2, name: "Educa e Realiza", image: educaRealiza },
  { id: 3, name: "Ação Digital", image: acaoDigital },
  { id: 4, name: "Ghetto Art", image: ghettoArt },
];

const team = [
  { id: 1, name: "João Silva", role: "Chief Executive Officer", image: ceoPhoto },
  { id: 2, name: "Pedro Santos", role: "Chief Technology Officer", image: ctoPhoto },
  { id: 3, name: "Ana Fernandes", role: "UI/UX Lead Designer", image: designerPhoto },
  { id: 4, name: "Miguel Costa", role: "Full Stack Developer", image: developerPhoto },
  { id: 5, name: "Carla Mendes", role: "Marketing Manager", image: marketingPhoto },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <SectorsSection />
        <CarouselSection
          id="clientes"
          tag="Confiança"
          title="Nossos"
          highlightedTitle="Clientes"
          items={clients}
          isLogo={true}
        />
        <CarouselSection
          id="parceiros"
          tag="Colaboração"
          title="Nossos"
          highlightedTitle="Parceiros"
          items={partners}
          isLogo={true}
        />
        <CarouselSection
          id="team"
          tag="Equipe"
          title="Nosso"
          highlightedTitle="Team"
          items={team}
          isLogo={false}
        />
        <EventsSection />
        <AcademySection />
        <ProcessSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
