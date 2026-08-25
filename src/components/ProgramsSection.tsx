import { useSection } from '@/hooks/useSiteContent';
import { getIcon } from '@/lib/icons';

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    hoverBg: 'group-hover:bg-primary',
    text: 'text-primary',
    hoverText: 'group-hover:text-primary-foreground',
  },
  secondary: {
    bg: 'bg-secondary/10',
    hoverBg: 'group-hover:bg-secondary',
    text: 'text-secondary',
    hoverText: 'group-hover:text-secondary-foreground',
  },
  earth: {
    bg: 'bg-earth/10',
    hoverBg: 'group-hover:bg-earth',
    text: 'text-earth',
    hoverText: 'group-hover:text-primary-foreground',
  },
};

const ProgramsSection = () => {
  const programs = useSection('programs');

  return (
    <section id="programs" className="py-20 md:py-28 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {programs.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {programs.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{programs.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.items.map((program, index) => {
            const colors = colorMap[program.color as keyof typeof colorMap] ?? colorMap.primary;
            const Icon = getIcon(program.icon);

            return (
              <div
                key={program.title}
                className="group relative rounded-2xl bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {program.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.hoverBg} flex items-center justify-center mb-4 transition-colors duration-300`}
                  >
                    <Icon className={`${colors.text} ${colors.hoverText}`} size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
