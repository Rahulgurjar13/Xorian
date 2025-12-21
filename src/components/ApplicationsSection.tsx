import { Shield, Eye, MapPin, Building, Siren, Satellite } from 'lucide-react';

const applications = [
  {
    icon: Shield,
    title: 'Defense Operations',
    description: 'Tactical support for ground forces with real-time intelligence and situational awareness.',
  },
  {
    icon: Eye,
    title: 'Border Surveillance',
    description: 'Continuous monitoring of international borders with autonomous patrol capabilities.',
  },
  {
    icon: MapPin,
    title: 'Strategic Reconnaissance',
    description: 'Long-range intelligence gathering for strategic planning and threat assessment.',
  },
  {
    icon: Building,
    title: 'Infrastructure Protection',
    description: 'Security monitoring of critical infrastructure including power plants and facilities.',
  },
  {
    icon: Siren,
    title: 'Emergency Response',
    description: 'Rapid deployment for disaster assessment and search & rescue operations.',
  },
  {
    icon: Satellite,
    title: 'Communications Relay',
    description: 'Airborne communication nodes for extended range in challenging terrains.',
  },
];

const ApplicationsSection = () => {
  return (
    <section id="applications" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-12 bg-foreground" />
            <span className="text-foreground font-tech font-semibold tracking-[0.2em] text-sm uppercase">
              Applications
            </span>
            <div className="h-px w-12 bg-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Mission
            <span className="text-gradient block">Profiles</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our drone systems are deployed across diverse operational scenarios, 
            delivering unmatched capability and reliability.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className="group relative p-8 border border-border/30 bg-background/50 backdrop-blur-sm hover:border-foreground/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 border border-border group-hover:border-foreground/50 flex items-center justify-center mb-6 transition-colors">
                  <app.icon className="w-7 h-7 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
