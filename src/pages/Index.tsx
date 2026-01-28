import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { TeamYhanko } from "@/components/TeamSection";
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


const clients = [
  { id: 1, name: "RoseArte Atelier", image: roseartAtelier },
  { id: 2, name: "Margem", image: margem },
];

const partners = [
  { id: 1, name: "FDF", image: fdf },
  { id: 2, name: "Educa e Realiza", image: educaRealiza },
  { id: 3, name: "Ação Digital", image: acaoDigital },
  { id: 4, name: "Ghetto Art", image: ghettoArt },
];

const team = [
  { id: 1, name: "Romeu Cajamba", role: "Chief Executive Officer", image: cajamba },
  { id: 2, name: "Bruno Paulo", role: "Designer Gráfico", image: bruno },
  { id: 3, name: "Kalei Diogo", role: "Contabilista Sênior", image: kalei },
  { id: 4, name: "Joel da Silva", role: "Full Stack Developer", image: joel },
  { id: 5, name: "Manuel Malanga", role: "Secretário Geral", image: manuel },
  { id: 6, name: "Hélio Mendonça", role: "Contabilista Júnior", image: helio },
  { id: 7, name: "Osvaldo Pedro", role: "Backend Developer", image: osvaldo },
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
        <ClientsSection />
        <TeamYhanko
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
