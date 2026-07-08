import { Button } from '@/components/ui/button';
const isaacSakiAwardLogo = { url: '/assets/isaac-saki-award-logo.jpg' };
const certificateAsset = { url: '/assets/zakaria-alaza-isaac-saki-award.pdf' };
const awardPhotos = [
  { url: '/assets/awards/img-20260708-wa0001.jpg', alt: 'Alaza Zakaria proudly holding his Isaac Saki Award certificate', label: 'THE AWARD RECIPIENT (Zakaria Alaza)' },
  { url: '/assets/awards/img-20260708-wa0004.jpg', alt: 'Students celebrating with the Isaac Saki Award recipient', label: 'Award recipient and friends' },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            ISAAC SAKI AWARDS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Isaac Saki Awards
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Isaac Saki Award recognizes children who face financial or emotional
            hardships but demonstrate outstanding academic performance. The award
            celebrates resilience, commitment to learning, and the potential of
            young people to overcome adversity.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <img
            src={isaacSakiAwardLogo.url}
            alt="Isaac Saki Award - Honoring Excellence"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-elevated"
          />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-3">Eligibility</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Students demonstrating outstanding school performance</li>
              <li>Children experiencing significant financial hardship</li>
              <li>Children facing emotional or psychosocial challenges</li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-3">How to Nominate</h3>
            <p className="text-muted-foreground mb-4">Nominate a student by sending their name, school, a short description of their circumstances, and any supporting documents to our team. Our panel reviews nominations and selects recipients based on impact and need.</p>
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

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
          Our partners, including The Grace Movement USA and ADEA, help us identify
          and support awardees through program partnerships and capacity building.
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-dark text-center mb-8">
            Award Recipients
          </h3>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {awardPhotos.map((photo) => (
              <div key={photo.url} className="flex flex-col gap-3">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {photo.label && (
                  <p className="text-center font-medium text-sm md:text-base text-primary-dark">
                    {photo.label}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-2xl p-6 shadow-card flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h4 className="font-display text-xl font-bold text-primary-dark mb-1">
                Zakaria Alaza — 2026 Isaac Saki Award Recipient
              </h4>
              <p className="text-muted-foreground text-sm">
                Recognized for academic excellence, leadership, and helping secure a water project for Nyangbande Wawa Seed Academy.
              </p>
            </div>
            <a href={certificateAsset.url} target="_blank" rel="noopener noreferrer">
              <Button variant="default">View Certificate</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
