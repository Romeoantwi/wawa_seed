import melindaImage from '@/assets/team/melinda-siner.jpg.asset.json';

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the People Behind Our Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated leaders and volunteers working together to transform lives across Ghana and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-card rounded-2xl p-8 md:p-12 shadow-card">
            {/* Board Member Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <img
                  src={melindaImage.url}
                  alt="Melinder Siner - Board Member of WASAF"
                  className="w-full h-full object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-secondary-foreground font-display font-bold text-center text-xs leading-tight">
                    Board<br />Member
                  </span>
                </div>
              </div>
            </div>

            {/* Board Member Info */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Melinder Siner
              </h3>
              <p className="text-primary font-medium mb-4">
                Ordained Minister, Nurse & Board Member
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Melinder Siner is an ordained minister, nurse, and former business owner dedicated to faith and service. Raised in Virginia, she ran a landscaping business for 23 years, homeschooled her daughter, and later worked as a Labor and Delivery nurse.
                </p>
                <p>
                  Deeply involved in women's ministry since 2016, Melinder expanded her global outreach in 2024 through the Wawa Seed Africa Foundation. She was officially ordained by the National Association of Christian Ministers in April 2026 and continues to dedicate her life to sharing the Gospel and serving communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
