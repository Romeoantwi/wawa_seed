import { Users } from 'lucide-react';
import { useSection } from '@/hooks/useSiteContent';

const TeamSection = () => {
  const team = useSection('team');

  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{team.badge}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            {team.heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{team.intro}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {team.members.map((member, index) => (
            <div key={member.name} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[3/4] max-w-sm mx-auto">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover rounded-2xl shadow-elevated"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-secondary-foreground font-display font-bold text-center text-xs leading-tight whitespace-pre-line">
                      {member.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`text-center md:text-left ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
