import { Handshake } from 'lucide-react';
import graceMovementLogo from '@/assets/partners/grace-movement-logo.jpg';
import interfaithTourismLogo from '@/assets/partners/interfaith-tourism-logo.jpg';

const PartnersSection = () => {
  const partners = [
    { name: 'The Grace Movement', logo: graceMovementLogo },
    { name: 'Adea', logo: null },
    { name: 'Interfaith Tourism', logo: interfaithTourismLogo },
    { name: 'Image Ghana', logo: null },
  ];

  return (
    <section id="partners" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Handshake className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Partners</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Working Together for Change
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-muted/50 px-6 py-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted transition-all duration-300 flex items-center gap-3"
            >
              {partner.logo && (
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-10 h-10 object-contain rounded"
                />
              )}
              <span className="font-display text-lg font-semibold text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
