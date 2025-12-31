import { Heart, Users, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            About Wawa Seed Africa Foundation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Established in 2020 during the COVID-19 pandemic, WASAF was created to provide 
            hope and support to communities struggling with poverty, limited access to education, 
            healthcare challenges, and livelihood insecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Heart className="text-primary group-hover:text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower vulnerable children, women, and families through education, healthcare, 
              and sustainable livelihood programs that transform communities.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
              <Sparkles className="text-secondary group-hover:text-secondary-foreground" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A thriving Africa where every child has access to quality education, every woman 
              is economically empowered, and every family lives with dignity.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-earth/10 flex items-center justify-center mb-6 group-hover:bg-earth group-hover:text-primary-foreground transition-colors duration-300">
              <Users className="text-earth group-hover:text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Compassion, integrity, sustainability, and community partnership guide everything 
              we do as we work to create lasting positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
