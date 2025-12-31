import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Children Supported' },
  { value: 200, suffix: '+', label: 'Women Empowered' },
  { value: 15, suffix: '', label: 'Communities Reached' },
  { value: 5, suffix: '', label: 'Years of Impact' },
];

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Our Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Creating Lasting Impact
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Since 2020, we have grown as a trusted community-based organization, 
            committed to transforming lives across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value);
            
            return (
              <div
                key={stat.label}
                ref={ref}
                className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-primary-foreground/90 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our collaboration with <span className="text-secondary font-semibold">The Grace Movement USA</span> has 
            helped strengthen and scale our programs, extending our reach to more communities in need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
