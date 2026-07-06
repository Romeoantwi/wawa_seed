import { Button } from '@/components/ui/button';
const isaacSakiAwardLogo = { url: '/assets/isaac-saki-award-logo.jpg' };

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
      </div>
    </section>
  );
};

export default AwardsSection;
