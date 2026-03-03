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
