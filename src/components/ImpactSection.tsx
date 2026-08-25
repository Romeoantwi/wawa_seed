import { useEffect, useState, useRef } from 'react';
import { useSection } from '@/hooks/useSiteContent';

type Stat = { value: number; suffix: string; label: string };

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
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

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const { count, ref } = useCountUp(Number(stat.value) || 0);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-primary-foreground/90 font-medium">{stat.label}</div>
    </div>
  );
};

const ImpactSection = () => {
  const impact = useSection('impact');

  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            {impact.badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {impact.heading}
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">{impact.intro}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impact.stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{impact.note}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
