import { Cpu, Radio, Eye, Brain, Shield, Zap } from 'lucide-react';

const techFeatures = [
  {
    icon: Cpu,
    title: 'Custom Processor Architecture',
    description: 'Proprietary multi-core processing unit designed for real-time flight calculations and sensor fusion.',
  },
  {
    icon: Radio,
    title: 'Encrypted Telemetry',
    description: 'Military-grade AES-256 encryption for all communication channels with anti-jamming capabilities.',
  },
  {
    icon: Eye,
    title: 'Multi-Spectral Sensors',
    description: 'Integrated EO/IR sensor suite with thermal imaging, night vision, and laser designation.',
  },
  {
    icon: Brain,
    title: 'AI Navigation',
    description: 'Machine learning algorithms for autonomous pathfinding, obstacle avoidance, and target tracking.',
  },
  {
    icon: Shield,
    title: 'Redundant Systems',
    description: 'Triple-redundant flight control with automatic failover ensuring mission-critical reliability.',
  },
  {
    icon: Zap,
    title: 'Power Management',
    description: 'Advanced battery management with regenerative systems extending operational endurance.',
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-12 bg-foreground" />
            <span className="text-foreground font-tech font-semibold tracking-[0.2em] text-sm uppercase">
              Technology
            </span>
            <div className="h-px w-12 bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Indigenous Flight Control
            <span className="text-gradient block">System</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our flight control system represents the pinnacle of Indian engineering excellence.
            Built from the ground up with zero dependency on foreign technology.
          </p>
        </div>

        {/* Main Tech Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Schematic */}
          <div className="relative">
            <div className="aspect-square border border-border/30 relative overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 tech-grid opacity-30" />

              {/* Central Unit */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer rings */}
                  <div className="absolute inset-0 w-64 h-64 border border-foreground/20 rounded-full animate-pulse-slow" style={{ margin: '-4rem' }} />
                  <div className="absolute inset-0 w-48 h-48 border border-foreground/30 rounded-full animate-pulse-slow" style={{ margin: '-2rem', animationDelay: '0.5s' }} />

                  {/* Core */}
                  <div className="w-32 h-32 border border-foreground bg-foreground/10 rounded-full flex items-center justify-center">
                    <Cpu className="w-12 h-12 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
              <div className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-foreground/50 to-transparent" />
              <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
              <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-foreground/50 to-transparent" />

              {/* Labels */}
              <div className="absolute top-8 left-8 font-tech text-xs text-muted-foreground tracking-widest">
                XORIAN FCS v4.2
              </div>
              <div className="absolute bottom-8 right-8 font-tech text-xs text-foreground tracking-widest">
                INDIGENOUS TECH
              </div>
            </div>
          </div>

          {/* Specs List */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
              System Specifications
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Processor', value: 'XORIAN-X4 Quad Core @ 2.4GHz' },
                { label: 'Memory', value: '16GB DDR5 + 512GB NVMe' },
                { label: 'IMU', value: 'Triple Redundant 9-Axis MEMS' },
                { label: 'GPS', value: 'NavIC + GPS + GLONASS RTK' },
                { label: 'Update Rate', value: '1000Hz Control Loop' },
                { label: 'Encryption', value: 'AES-256 + Quantum-Ready' },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center border-b border-border/30 pb-4">
                  <span className="text-muted-foreground font-tech text-sm tracking-wider">{spec.label}</span>
                  <span className="text-foreground font-display font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 bg-card/50 backdrop-blur-xl group cursor-pointer hover-card-smooth hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner brackets with staggered smooth animation */}
              {/* Top Left ┌ */}
              <div className="corner-tl absolute top-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
                <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
              </div>
              {/* Top Right ┐ */}
              <div className="corner-tr absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }}>
                <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
                <div className="bracket-line bracket-line-v origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
              </div>
              {/* Bottom Left └ */}
              <div className="corner-bl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }}>
                <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
                <div className="bracket-line bracket-line-h origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
              </div>
              {/* Bottom Right ┘ */}
              <div className="corner-br absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }}>
                <div className="bracket-line bracket-line-v origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
                <div className="bracket-line bracket-line-h origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center mb-6 group-hover:border-foreground transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="text-lg font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
