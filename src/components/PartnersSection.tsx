import { Handshake } from 'lucide-react';
import { useSection } from '@/hooks/useSiteContent';

const PartnersSection = () => {
  const partners = useSection('partners');

  return (
    <section id="partners" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Handshake className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{partners.label}</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{partners.heading}</h2>
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">{partners.intro}</p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {partners.items.map((partner, index) => (
            <div
              key={index}
              className="bg-muted/50 px-6 py-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted transition-all duration-300 flex items-center gap-3"
            >
              {partner.logo && (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="w-10 h-10 object-contain rounded"
                />
              )}
              <span className="font-display text-lg font-semibold text-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
