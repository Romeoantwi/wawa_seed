import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import DonationDialog from './DonationDialog';

// Import hero slideshow images
import studentsSmiling from '@/assets/hero/students-smiling.jpg';
import sewingTraining from '@/assets/hero/sewing-training.jpg';
import cookingClass from '@/assets/hero/cooking-class.jpg';
import tailoringWorkshop from '@/assets/hero/tailoring-workshop.jpg';
import outdoorActivity from '@/assets/hero/outdoor-activity.jpg';
import youthTraining from '@/assets/hero/youth-training.jpg';
import studentsGathering from '@/assets/hero/students-gathering.jpg';

const heroSlides = [
  {
    image: studentsSmiling,
    caption: "Education for Every Child",
    alt: "Happy students in school uniforms"
  },
  {
    image: sewingTraining,
    caption: "Skills Training & Empowerment",
    alt: "Young girl learning sewing skills"
  },
  {
    image: tailoringWorkshop,
    caption: "Vocational Training Programs",
    alt: "Women in tailoring workshop"
  },
  {
    image: cookingClass,
    caption: "Building Brighter Futures",
    alt: "Youth in cooking training class"
  },
  {
    image: outdoorActivity,
    caption: "Community Development",
    alt: "Children in outdoor activities with instructor"
  },
  {
    image: youthTraining,
    caption: "Empowering Young Women",
    alt: "Youth in training program"
  },
  {
    image: studentsGathering,
    caption: "Transforming Lives Together",
    alt: "Students gathering for community event"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-secondary w-8' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Slide Caption */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
        <span className="inline-block px-6 py-2 bg-secondary/90 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-semibold tracking-wide">
          {heroSlides[currentSlide].caption}
        </span>
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
            <DonationDialog>
              <Button variant="hero" size="lg">
                <Heart className="mr-2" size={20} />
                Support Our Cause
              </Button>
            </DonationDialog>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#about">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </a>
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
