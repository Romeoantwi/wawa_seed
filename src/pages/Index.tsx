import { Construction } from 'lucide-react';

// ========================================
// ORIGINAL SITE CODE - UNCOMMENT TO RESTORE
// ========================================
// import Header from '@/components/Header';
// import HeroSection from '@/components/HeroSection';
// import FounderSection from '@/components/FounderSection';
// import AboutSection from '@/components/AboutSection';
// import ProgramsSection from '@/components/ProgramsSection';
// import GallerySection from '@/components/GallerySection';
// import ImpactSection from '@/components/ImpactSection';
// import PartnersSection from '@/components/PartnersSection';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <HeroSection />
//         <FounderSection />
//         <AboutSection />
//         <ProgramsSection />
//         <GallerySection />
//         <ImpactSection />
//         <PartnersSection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };
// ========================================

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <Construction className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Coming Soon
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          This website is currently under construction. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default Index;
