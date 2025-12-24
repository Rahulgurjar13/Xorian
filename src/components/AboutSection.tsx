import { useEffect, useRef, useState } from 'react';
import { Target, Zap, Globe, Award } from 'lucide-react';

const stats = [
  { value: 100, suffix: '%', label: 'Indigenous Tech', icon: Zap },
  { value: 24, suffix: '/7', label: 'Support Available', icon: Globe },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-foreground">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-foreground" />
            <span className="text-foreground font-tech font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">
              About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Pioneering India's
            <span className="text-gradient block mt-2">Drone Revolution</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Xorian Industries stands at the forefront of indigenous defense technology,
            developing cutting-edge surveillance drones and flight control systems entirely
            within India. Our commitment to self-reliance drives innovation in every component
            we engineer.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-xl group cursor-pointer hover-card-smooth hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner brackets with staggered smooth animation */}
              <div className="corner-tl absolute top-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                <div className="bracket-line w-6 h-[1px] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
                <div className="bracket-line w-[1px] h-6 origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
              </div>
              <div className="corner-tr absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }}>
                <div className="bracket-line w-6 h-[1px] origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
                <div className="bracket-line w-[1px] h-6 origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
              </div>
              <div className="corner-bl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }}>
                <div className="bracket-line w-[1px] h-6 origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
                <div className="bracket-line w-6 h-[1px] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
              </div>
              <div className="corner-br absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }}>
                <div className="bracket-line w-[1px] h-6 origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
                <div className="bracket-line w-6 h-[1px] origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
              </div>

              <div className="relative z-10">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foreground mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500" />
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-xs sm:text-sm text-muted-foreground font-tech tracking-wider mt-1 sm:mt-2">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative p-10 bg-card/50 backdrop-blur-xl group cursor-pointer hover-card-smooth hover-glow">
            {/* Corner brackets with staggered smooth animation */}
            <div className="corner-tl absolute top-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
              <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
              <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
            </div>
            <div className="corner-tr absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }}>
              <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
              <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
            </div>
            <div className="corner-bl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }}>
              <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
              <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
            </div>
            <div className="corner-br absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }}>
              <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
              <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To establish India as a global leader in unmanned aerial systems through
                relentless innovation, indigenous development, and unwavering commitment
                to national security.
              </p>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-px bg-foreground" />
                <span className="font-tech text-sm tracking-wider">ATMANIRBHAR BHARAT</span>
              </div>
            </div>
          </div>

          <div className="relative p-10 bg-card/50 backdrop-blur-xl group cursor-pointer hover-card-smooth hover-glow">
            {/* Corner brackets with staggered smooth animation */}
            <div className="corner-tl absolute top-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
              <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
              <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
            </div>
            <div className="corner-tr absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }}>
              <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
              <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
            </div>
            <div className="corner-bl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }}>
              <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
              <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
            </div>
            <div className="corner-br absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }}>
              <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
              <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the trusted partner for defense forces worldwide, delivering
                autonomous systems that redefine the boundaries of surveillance,
                reconnaissance, and strategic operations.
              </p>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-px bg-foreground" />
                <span className="font-tech text-sm tracking-wider">GLOBAL EXCELLENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
