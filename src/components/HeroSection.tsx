import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children learning in Ghana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl">
          <span 
            className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Since 2020 • Empowering Communities in Ghana
          </span>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Wawa Seed Africa Foundation{' '}
            <span className="text-secondary">(WASAF)</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Through targeted programs and services, WASAF aims to empower parents and caregivers to raise successful children through education, counseling, healthcare, water access, and business development initiatives while fostering sustainable development in the region.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="hero" size="lg">
              <Heart className="mr-2" size={20} />
              Support Our Cause
            </Button>
            <Button variant="heroOutline" size="lg">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
