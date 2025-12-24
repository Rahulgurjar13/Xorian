import { Flag, Cpu, Zap, MapPin } from 'lucide-react';

const MadeInIndiaSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border-2 border-foreground/40 bg-transparent rounded-full mb-8 sm:mb-10">
            <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            <span className="font-tech font-bold tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm text-foreground">
              MADE IN INDIA
            </span>
          </div>

          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground px-4 mb-6">
              Atmanirbhar Bharat
            </h2>
            <div className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold px-4 overflow-visible" style={{ fontFamily: "'Noto Sans Devanagari', 'Space Grotesk', sans-serif", lineHeight: '1.3' }}>
              आत्मनिर्भर भारत
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-14 leading-relaxed max-w-3xl mx-auto px-4">
            Every component, every line of code, every innovation — proudly developed on
            Indian soil by Indian engineers for India's defense.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Cpu, label: 'Indigenous R&D', value: '100%' },
              { icon: Zap, label: 'Flight Control', value: 'AI Powered' },
              { icon: MapPin, label: 'Developed', value: 'Made in India' },
              { icon: Flag, label: 'Self-Reliant', value: 'Fully' },
            ].map((item) => (
              <div key={item.label} className="relative p-4 sm:p-6 bg-card/50 backdrop-blur-xl group cursor-pointer hover-card-smooth hover-glow">
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
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-tech tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeInIndiaSection;
