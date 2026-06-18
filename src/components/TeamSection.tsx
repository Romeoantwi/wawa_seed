import melindaImage from '@/assets/team/melinder-siner.jpg';
import lilyImage from '@/assets/team/lily-saki.jpg';

const teamMembers = [
  {
    name: 'Melinder Siner',
    role: 'Ordained Minister, Nurse & Board Member',
    badge: 'Board\nMember',
    image: melindaImage,
    alt: 'Melinder Siner - Board Member of WASAF',
    bio: [
      "Melinder Siner is an ordained minister, nurse, and former business owner dedicated to faith and service. Raised in Virginia, she ran a landscaping business for 23 years, homeschooled her daughter, and later worked as a Labor and Delivery nurse.",
      "Deeply involved in women's ministry since 2016, Melinder expanded her global outreach in 2024 through the Wawa Seed Africa Foundation. She was officially ordained by the National Association of Christian Ministers in April 2026 and continues to dedicate her life to sharing the Gospel and serving communities.",
    ],
  },
  {
    name: 'Lily Saki',
    role: 'Program Director',
    badge: 'Program\nDirector',
    image: lilyImage,
    alt: 'Lily Saki - Program Director of WASAF',
    bio: [
      'Lily Saki is an architect with a Master of Architecture from the Harvard Graduate School of Design and a Bachelor of Science in Architecture from Wentworth Institute of Technology. Her interests center on sustainable design, climate resilience, and creating meaningful impact through the built environment.',
      'She currently serves as Program Director at Wawa Seed Africa Foundation, where she leads programs focused on education, community development, and youth empowerment across Africa.',
    ],
  },
];

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

        <div className="max-w-5xl mx-auto space-y-10">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className={`grid md:grid-cols-2 gap-10 items-center bg-card rounded-2xl p-8 md:p-12 shadow-card ${
                idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-sm mx-auto">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover rounded-2xl shadow-elevated"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-secondary-foreground font-display font-bold text-center text-xs leading-tight whitespace-pre-line">
                      {member.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {member.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
