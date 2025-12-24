import { Clock, Ruler, Weight, Mountain, Radio, Eye } from 'lucide-react';
import DroneCard from './DroneCard';
import droneSentinel from '@/assets/drone-sentinel.jpg';
import droneGuardian from '@/assets/drone-guardian.jpg';
import droneHawk from '@/assets/drone-hawk.jpg';
import droneVanguard from '@/assets/drone-vanguard.jpg';

const drones = [
  {
    name: 'SENTINEL X1',
    tagline: 'Tactical Surveillance Platform',
    category: 'SURVEILLANCE',
    description: 'Compact tactical drone designed for close-range reconnaissance and perimeter security operations with stealth capabilities.',
    image: droneSentinel,
    specs: [
      { icon: Clock, label: 'Flight Time', value: '4 Hours' },
      { icon: Ruler, label: 'Range', value: '50 km' },
      { icon: Weight, label: 'Payload', value: '5 kg' },
      { icon: Mountain, label: 'Altitude', value: '5,000m' },
      { icon: Radio, label: 'Frequency', value: 'Multi-Band' },
      { icon: Eye, label: 'Camera', value: '4K EO/IR' },
    ],
    features: [
      'Low acoustic signature design',
      'Quick deployment capability',
      'Real-time HD streaming',
      'Autonomous patrol modes',
    ],
    isUpcoming: false,
  },
  {
    name: 'GUARDIAN PRO',
    tagline: 'Long-Range Reconnaissance',
    category: 'RECONNAISSANCE',
    description: 'Extended endurance platform for strategic reconnaissance missions with advanced sensor integration and satellite uplink.',
    image: droneGuardian,
    specs: [
      { icon: Clock, label: 'Flight Time', value: '24 Hours' },
      { icon: Ruler, label: 'Range', value: '500 km' },
      { icon: Weight, label: 'Payload', value: '25 kg' },
      { icon: Mountain, label: 'Altitude', value: '10,000m' },
      { icon: Radio, label: 'Frequency', value: 'SATCOM' },
      { icon: Eye, label: 'Camera', value: '8K Multi-Spectral' },
    ],
    features: [
      'Satellite communication uplink',
      'All-weather operation',
      'Electronic warfare suite',
      'AI-powered threat detection',
    ],
    isUpcoming: true,
  },
  {
    name: 'HAWK DEFENSE',
    tagline: 'Multi-Role Defense Platform',
    category: 'DEFENSE',
    description: 'Ruggedized defense platform with modular payload bays for mission-specific equipment and heavy-duty operations.',
    image: droneHawk,
    specs: [
      { icon: Clock, label: 'Flight Time', value: '12 Hours' },
      { icon: Ruler, label: 'Range', value: '200 km' },
      { icon: Weight, label: 'Payload', value: '50 kg' },
      { icon: Mountain, label: 'Altitude', value: '8,000m' },
      { icon: Radio, label: 'Frequency', value: 'Encrypted' },
      { icon: Eye, label: 'Camera', value: 'Gimbal Array' },
    ],
    features: [
      'Modular payload system',
      'Reinforced airframe',
      'VTOL capability',
      'Swarm coordination ready',
    ],
    isUpcoming: true,
  },
  {
    name: 'VANGUARD SERIES',
    tagline: 'Next-Gen Autonomous System',
    category: 'AUTONOMOUS',
    description: 'AI-driven autonomous platform with advanced swarm capabilities and next-generation sensor fusion technology.',
    image: droneVanguard,
    specs: [
      { icon: Clock, label: 'Flight Time', value: '8 Hours' },
      { icon: Ruler, label: 'Range', value: '150 km' },
      { icon: Weight, label: 'Payload', value: '15 kg' },
      { icon: Mountain, label: 'Altitude', value: '7,000m' },
      { icon: Radio, label: 'Frequency', value: 'Mesh Network' },
      { icon: Eye, label: 'Camera', value: 'AI Vision' },
    ],
    features: [
      'Swarm intelligence',
      'Autonomous decision-making',
      'Self-coordinating formations',
      'Machine learning adaptation',
    ],
    isUpcoming: true,
  },
];

const DronesSection = () => {
  return (
    <section id="drones" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-foreground" />
            <span className="text-foreground font-tech font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">
              Our Fleet
            </span>
            <div className="h-px w-8 sm:w-12 bg-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Drone
            <span className="text-gradient block mt-2">Platforms</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Purpose-built unmanned aerial systems for every defense and surveillance requirement.
            Each platform engineered with indigenous technology.
          </p>
        </div>

        {/* Drone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {drones.map((drone, index) => (
            <div
              key={drone.name}
              className="w-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <DroneCard drone={drone} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DronesSection;
