import { useSection } from '@/hooks/useSiteContent';
import { getIcon } from '@/lib/icons';

const accents = [
  { bg: 'bg-primary/10', hover: 'group-hover:bg-primary', text: 'text-primary' },
  { bg: 'bg-secondary/10', hover: 'group-hover:bg-secondary', text: 'text-secondary' },
  { bg: 'bg-earth/10', hover: 'group-hover:bg-earth', text: 'text-earth' },
];

const AboutSection = () => {
  const about = useSection('about');

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            {about.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {about.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{about.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {about.cards.map((card, index) => {
            const Icon = getIcon(card.icon);
            const accent = accents[index % accents.length];
            return (
              <div
                key={card.title}
                className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${accent.bg} ${accent.hover} flex items-center justify-center mb-6 transition-colors duration-300`}
                >
                  <Icon className={`${accent.text} group-hover:text-primary-foreground`} size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
