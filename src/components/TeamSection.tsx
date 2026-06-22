import melindaImage from '@/assets/team/melinder-siner.jpg';
import lilyImage from '@/assets/team/lily-saki.jpg';
import founderPresidentImage from '@/assets/team/founder-president.jpg';
import revAlfredImage from '@/assets/team/rev-alfred-arthur.jpg';

const teamMembers = [
  {
    name: 'Lucy Asantewaa Saki',
    role: 'President',
    badge: 'President',
    gradient: 'from-[#3503ad] via-[#f7308c] to-[#ff5a8e]',
    image: founderPresidentImage,
    alt: 'Lucy Asantewaa Saki - President of WASAF',
    bio: [
      'Driven by a deep passion for community empowerment, Lucy Asantewaa Saki founded Wawa Seed Africa Foundation in 2020 during the challenging times of the COVID-19 pandemic. Her vision was to create lasting change for vulnerable children, women, and families across Ghana through education, healthcare, and sustainable development programs.',
      'Under her leadership, WASAF has grown to impact thousands of lives, providing educational support, vocational training, healthcare services, and community development initiatives that transform communities from within.',
    ],
  },
  {
    name: 'Melinda Siner',
    role: 'Ordained Minister, Nurse & Board Member',
    badge: 'Board\nMember',
    gradient: 'from-[#ccff00] via-[#09afff] to-[#0c4dad]',
    image: melindaImage,
    alt: 'Melinda Siner - Board Member of WASAF',
    bio: [
      "Melinda Siner is an ordained minister, nurse, and former business owner dedicated to faith and service. Raised in Virginia, she ran a landscaping business for 23 years, homeschooled her daughter, and later worked as a Labor and Delivery nurse.",
      "Deeply involved in women's ministry since 2016, Melinda expanded her global outreach in 2024 through the Wawa Seed Africa Foundation. She was officially ordained by the National Association of Christian Ministers in April 2026 and continues to dedicate her life to sharing the Gospel and serving communities.",
    ],
  },
  {
    name: 'Lily Saki',
    role: 'Program Director',
    badge: 'Program\nDirector',
    gradient: 'from-[#f97316] via-[#f43f5e] to-[#c026d3]',
    image: lilyImage,
    alt: 'Lily Saki - Program Director of WASAF',
    bio: [
      'Lily Saki is an architect with a Master of Architecture from the Harvard Graduate School of Design and a Bachelor of Science in Architecture from Wentworth Institute of Technology. Her interests center on sustainable design, climate resilience, and creating meaningful impact through the built environment.',
      'She currently serves as Program Director at Wawa Seed Africa Foundation, where she leads programs focused on education, community development, and youth empowerment across Africa.',
    ],
  },
  {
    name: 'Rev Alfred Arthur',
    role: 'Secretary',
    badge: 'Secretary',
    gradient: 'from-[#06b6d4] via-[#3b82f6] to-[#6366f1]',
    image: revAlfredImage,
    alt: 'Rev Alfred Arthur - Secretary of WASAF',
    bio: [
      'Rev. Alfred Arthur holds a Bachelor’s degree in Real Estate and a Master’s degree in Information Technology Management. A pastor and community leader with experience in Ghana and the United States, he brings expertise in leadership, organizational development, and community engagement.',
      'He is passionate about strengthening institutions, building strategic partnerships, and advancing initiatives that create meaningful and lasting impact. His diverse background enables him to provide balanced, innovative, and mission-focused leadership in board service.',
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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-black/40 blur-2xl" />
                <div className="absolute inset-x-0 -bottom-6 h-24 rounded-t-[2rem] bg-gradient-to-r from-black/80 via-black/70 to-black/80 transition-all duration-500 group-hover:h-56 p-6 md:p-8">
                  <div className="flex h-full flex-col justify-between gap-3 text-white">
                    <div>
                      <h3 className="font-display text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-secondary-200 mt-1">{member.role}</p>
                    </div>
                    <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="text-sm leading-relaxed">{member.bio[0]}</p>
                      <p className="mt-3 text-sm leading-relaxed">{member.bio[1]}</p>
                    </div>
                    <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${member.gradient}`}>{member.badge}</span>
                  </div>
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
