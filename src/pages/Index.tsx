import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import GallerySection from '@/components/GallerySection';
import ImpactSection from '@/components/ImpactSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <ImpactSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
