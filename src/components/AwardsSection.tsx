import { Button } from '@/components/ui/button';
import { useSection } from '@/hooks/useSiteContent';

const AwardsSection = () => {
  const awards = useSection('awards');

  return (
    <section id="awards" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            {awards.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-4">{awards.heading}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{awards.intro}</p>
        </div>

        {awards.logo && (
          <div className="flex justify-center my-10">
            <img
              src={awards.logo}
              alt={`${awards.heading} - Honoring Excellence`}
              className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-elevated"
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-3">Eligibility</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              {awards.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-3">How to Nominate</h3>
            <p className="text-muted-foreground mb-4">{awards.nominateText}</p>
            <div className="flex gap-3">
              <a href="#contact">
                <Button variant="default">Nominate Now</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Contact Us</Button>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">{awards.partnersNote}</p>

        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-dark text-center mb-8">
            {awards.recipientsHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {awards.photos.map((photo, index) => (
              <div key={`${photo.image}-${index}`} className="flex flex-col gap-3">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {photo.label && (
                  <p className="text-center font-medium text-sm md:text-base text-primary-dark">{photo.label}</p>
                )}
              </div>
            ))}
          </div>

          {awards.featured?.name && (
            <div className="mt-8 bg-card rounded-2xl p-6 shadow-card flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <h4 className="font-display text-xl font-bold text-primary-dark mb-1">{awards.featured.name}</h4>
                <p className="text-muted-foreground text-sm">{awards.featured.description}</p>
              </div>
              {awards.featured.certificateUrl && (
                <a href={awards.featured.certificateUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default">View Certificate</Button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
