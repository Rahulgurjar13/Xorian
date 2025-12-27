import { ChevronDown, Radar, Shield, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import heroDrone from '@/assets/hero-drone.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDrone})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 tech-grid animate-grid opacity-20" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-border/20 rotate-45 animate-pulse-slow opacity-20 hidden lg:block" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-border/20 rotate-12 animate-pulse-slow opacity-20 hidden lg:block" style={{ animationDelay: '1s' }} />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/40 bg-transparent backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in-up rounded-full">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-tech tracking-[0.2em] text-foreground uppercase">
              Indigenous Defense Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 leading-tight">
            <span className="text-gradient glow-text">XORIAN</span>
            <br />
            <span className="text-foreground">INDUSTRIES</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4 font-display animate-fade-in-up animation-delay-400 px-4">
            Advanced Surveillance Systems • Custom Flight Control • Defense Solutions
          </p>

          {/* Made in India Badge */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 animate-fade-in-up animation-delay-400">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-foreground/50" />
            <span className="text-foreground font-tech font-semibold tracking-wider text-xs sm:text-sm whitespace-nowrap">
              MADE IN INDIA
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-foreground/50" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up animation-delay-600 px-4">
            <a href="#drones" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Explore Drones
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Contact Defense Solutions
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <Radar className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">15+ km</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-tech tracking-wider mt-1">MAX RANGE</div>
            </div>
            <div className="text-center border-x border-border/30 px-2">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">100%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-tech tracking-wider mt-1">INDIGENOUS</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">AI</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-tech tracking-wider mt-1">POWERED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float hidden md:flex z-20">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-tech tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
