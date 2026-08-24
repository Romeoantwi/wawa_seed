import { useSection } from '@/hooks/useSiteContent';

const FounderSection = () => {
  const founder = useSection('founder');

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <img
                  src={founder.image}
                  alt={`${founder.name} - Founder of WASAF`}
                  className="w-full h-full object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-secondary-foreground font-display font-bold text-center text-xs leading-tight whitespace-pre-line">
                    {founder.badgeLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                {founder.badge}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{founder.name}</h2>
              {founder.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {founder.stats.map((stat, index) => (
                  <div key={stat.label} className={`text-center px-4 ${index > 0 ? 'border-l border-border' : ''}`}>
                    <span className="block font-display text-2xl font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
