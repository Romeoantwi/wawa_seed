import { GraduationCap, HeartHandshake, Stethoscope, Brain, Wrench, Users, Wheat } from 'lucide-react';
import educationImage from '@/assets/education-support.jpg';
import womenImage from '@/assets/women-empowerment.jpg';
import healthcareImage from '@/assets/healthcare.jpg';
import agricultureImage from '@/assets/agriculture.jpg';
import vocationalImage from '@/assets/vocational-training.jpg';
import mentalHealthImage from '@/assets/mental-health.jpg';
import caregiverImage from '@/assets/caregiver-training.jpg';

const programs = [
  {
    icon: GraduationCap,
    title: 'Basic Education Support',
    description: 'Providing school supplies, uniforms, and tuition support to ensure every child can access quality education.',
    image: educationImage,
    color: 'primary',
  },
  {
    icon: HeartHandshake,
    title: 'Women Empowerment',
    description: 'Economic empowerment programs including vocational training, microfinance, and business skills development.',
    image: womenImage,
    color: 'secondary',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Support',
    description: 'Access to essential healthcare services, health education, and medical outreach in underserved communities.',
    image: healthcareImage,
    color: 'earth',
  },
  {
    icon: Wheat,
    title: 'Agriculture Support',
    description: 'Supporting sustainable farming practices and food security through agricultural training and resources for rural communities.',
    image: agricultureImage,
    color: 'primary',
  },
  {
    icon: Wrench,
    title: 'Vocational Training',
    description: 'Apprenticeship programs and skills training to help youth and adults build sustainable livelihoods.',
    image: null,
    color: 'secondary',
  },
  {
    icon: Brain,
    title: 'Mental Health & Counseling',
    description: 'Mental health support, drug abuse counseling, and psychosocial services for individuals and families.',
    image: mentalHealthImage,
    color: 'earth',
  },
  {
    icon: Users,
    title: 'Caregiver Training',
    description: 'Equipping caregivers and community leaders with skills to nurture children into responsible individuals.',
    image: caregiverImage,
    color: 'primary',
  },
];

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
  return (
    <section id="programs" className="py-20 md:py-28 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Our Programs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We operate in both Northern and Southern Ghana, reaching underserved rural 
            communities through comprehensive programs designed for sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const colors = colorMap[program.color as keyof typeof colorMap];
            const Icon = program.icon;
            
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
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.hoverBg} flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <Icon className={`${colors.text} ${colors.hoverText}`} size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
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
