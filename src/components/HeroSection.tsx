import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
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
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 bg-secondary/90 rounded-full text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
          Since 2020 • Empowering Communities in Ghana
        </span>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Wawa Seed Africa Foundation{' '}
          <span className="text-secondary">(WASAF)</span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Empowering parents and caregivers to raise successful children through education, healthcare, and community development.
        </p>

        {/* Current slide caption */}
        <p className="text-secondary font-semibold text-lg mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {heroSlides[currentSlide].caption}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <DonationDialog>
            <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Heart className="mr-2" size={20} />
              Support Our Cause
            </Button>
          </DonationDialog>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20" asChild>
            <a href="#about">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-secondary w-8' 
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
