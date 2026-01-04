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
    <section className="bg-gradient-to-b from-primary/5 to-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary text-sm font-medium mb-4 animate-fade-up">
            Since 2020 • Empowering Communities in Ghana
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Wawa Seed Africa Foundation{' '}
            <span className="text-primary">(WASAF)</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Empowering parents and caregivers to raise successful children through education, healthcare, and community development.
          </p>
        </div>

        {/* Main Slideshow - Prominently Displayed */}
        <div className="relative max-w-5xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-elevated">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-top"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-semibold">
                    {slide.caption}
                  </span>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted w-2 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <DonationDialog>
            <Button variant="default" size="lg">
              <Heart className="mr-2" size={20} />
              Support Our Cause
            </Button>
          </DonationDialog>
          <Button variant="outline" size="lg" asChild>
            <a href="#about">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
