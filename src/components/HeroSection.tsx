import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import DonationDialog from './DonationDialog';
import { useSection } from '@/hooks/useSiteContent';

const HeroSection = () => {
  const hero = useSection('hero');
  const heroSlides = hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(heroSlides.length, 1));
    }, 5000);
  };

  useEffect(() => {
    setCurrentSlide(0);
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [heroSlides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startTimer();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startTimer();
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
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 bg-secondary/90 rounded-full text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
          {hero.badge}
        </span>

        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          {hero.title} <span className="text-secondary">{hero.titleHighlight}</span>
        </h1>

        <p
          className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-4 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {hero.subtitle}
        </p>

        {/* Current slide caption */}
        {heroSlides[currentSlide] && (
          <p className="text-secondary font-semibold text-lg mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {heroSlides[currentSlide].caption}
          </p>
        )}

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <DonationDialog>
            <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Heart className="mr-2" size={20} />
              {hero.primaryCta}
            </Button>
          </DonationDialog>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            asChild
          >
            <a href="#about">
              {hero.secondaryCta}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                startTimer();
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-secondary w-8'
                  : 'bg-primary-foreground/50 w-2 hover:bg-primary-foreground/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
