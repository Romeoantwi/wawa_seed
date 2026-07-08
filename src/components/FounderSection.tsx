import founderImage from '@/assets/founder-lucy.jpg';

const FounderSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <img
                  src={founderImage}
                  alt="Lucy Asantewaa Saki - Founder of WASAF"
                  className="w-full h-full object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-secondary-foreground font-display font-bold text-center text-xs leading-tight">
                    Founder<br />& CEO
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                Meet Our Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lucy Asantewaa Saki
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Driven by a deep passion for community empowerment, Lucy Asantewaa Saki founded 
                Wawa Seed Africa Foundation in 2020 during the challenging times of the COVID-19 pandemic. 
                Her vision was to create lasting change for vulnerable children, women, and families 
                across Ghana through education, healthcare, and sustainable development programs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Under her leadership, K A AMISSAH Foundation, now WASAF has grown to impact thousands of lives, providing 
                educational support, vocational training, healthcare services, and community 
                development initiatives that transform communities from within.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center px-4">
                  <span className="block font-display text-2xl font-bold text-primary">2020</span>
                  <span className="text-sm text-muted-foreground">Founded</span>
                </div>
                <div className="text-center px-4 border-l border-border">
                  <span className="block font-display text-2xl font-bold text-primary">500+</span>
                  <span className="text-sm text-muted-foreground">Lives Impacted</span>
                </div>
                <div className="text-center px-4 border-l border-border">
                  <span className="block font-display text-2xl font-bold text-primary">7+</span>
                  <span className="text-sm text-muted-foreground">Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
