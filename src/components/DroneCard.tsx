import { useState } from 'react';
import { ChevronDown, Clock, Ruler, Weight, Mountain, Radio, Eye } from 'lucide-react';
import { Button } from './ui/button';

interface DroneSpec {
  icon: typeof Clock;
  label: string;
  value: string;
}

interface DroneData {
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  specs: DroneSpec[];
  features: string[];
  isUpcoming?: boolean;
}

const DroneCard = ({ drone }: { drone: DroneData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isUpcoming = drone.isUpcoming || false;
  const isSurveillance = drone.category === 'SURVEILLANCE';

  return (
    <div className="glass-card overflow-hidden hover-lift group">
      {/* Image Area */}
      <div 
        className="relative h-48 sm:h-56 md:h-64 bg-background overflow-hidden"
        onContextMenu={(e) => { if (isUpcoming && !isSurveillance) e.preventDefault(); }}
      >
        <img
          src={drone.image}
          alt={drone.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isUpcoming && !isSurveillance
              ? 'opacity-50 blur-md scale-105 protected-image'
              : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
          }`}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
          }}
        />
        {/* Security layers for upcoming drones - lighter effect */}
        {isUpcoming && !isSurveillance && (
          <>
            {/* Light overlay to obscure while keeping visibility */}
            <div 
              className="absolute inset-0 bg-background/40 protected-overlay"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            {/* Subtle blur overlay */}
            <div 
              className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-background/30 via-transparent to-card/30 protected-overlay"
              onContextMenu={(e) => e.preventDefault()}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 sm:px-3 py-1 bg-foreground/20 text-foreground text-[10px] sm:text-xs font-tech tracking-wider border border-foreground/30 backdrop-blur-sm">
            {drone.category}
          </span>
        </div>

        {/* Upcoming Badge - only for upcoming drones */}
        {isUpcoming && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-background/90 border border-foreground/30 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-tech tracking-wider text-foreground uppercase">
                Upcoming
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className={`text-xl sm:text-2xl font-display font-bold mb-1 sm:mb-2 text-foreground ${
          isUpcoming && !isSurveillance ? 'blur-sm select-none' : ''
        }`}>
          {isUpcoming && !isSurveillance ? '████████████' : drone.name}
        </h3>
        <p className={`text-xs sm:text-sm text-muted-foreground font-tech tracking-wider mb-3 sm:mb-4 ${
          isUpcoming && !isSurveillance ? 'blur-[2px] select-none' : ''
        }`}>
          {isUpcoming && !isSurveillance ? '████████████████████' : drone.tagline}
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {drone.description}
        </p>

        {/* Quick Specs - Show for all, but blur/hide values for upcoming */}
        {!isUpcoming ? (
          <>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              {drone.specs.slice(0, 3).map((spec) => (
                <div key={spec.label} className="text-center">
                  <spec.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm font-display font-semibold text-foreground">{spec.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-tech truncate">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Expandable Section - Only for non-upcoming */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-3 sm:py-4 border-t border-border/30 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs sm:text-sm font-tech tracking-wider">FULL SPECIFICATIONS</span>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {isExpanded && (
              <div className="pt-3 sm:pt-4 space-y-4 sm:space-y-6 animate-fade-in">
                {/* All Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {drone.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-2 sm:gap-3">
                      <spec.icon className="w-3 h-3 sm:w-4 sm:h-4 text-foreground flex-shrink-0" />
                      <div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground font-tech">{spec.label}</div>
                        <div className="text-xs sm:text-sm font-display text-foreground">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs sm:text-sm font-tech tracking-wider text-muted-foreground mb-2 sm:mb-3">KEY FEATURES</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {drone.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* CTA */}
            <Button variant="heroOutline" className="w-full mt-4 sm:mt-6 text-xs sm:text-sm">
              Request Information
            </Button>
          </>
        ) : (
          /* For upcoming drones - Show "Coming Soon" message instead of specs with matching height */
          <div className="min-h-[180px] sm:min-h-[200px] py-6 sm:py-8 border-t border-border/30 flex flex-col justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                <span className="text-sm font-tech tracking-wider text-muted-foreground uppercase">
                  In Development
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Specifications will be revealed soon
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-border/30 text-muted-foreground">
                <span className="text-xs font-tech tracking-wider">STAY TUNED</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DroneCard;
