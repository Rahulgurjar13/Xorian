import { useState } from 'react';
import { Send, Building, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    phone: '',
    application: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Our defense solutions team will contact you within 24 hours.",
    });
    setFormData({
      organization: '',
      name: '',
      email: '',
      phone: '',
      application: '',
      requirements: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 bg-foreground" />
              <span className="text-foreground font-tech font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight">
              Defense
              <span className="text-gradient block">Inquiry</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Connect with our defense solutions team for procurement inquiries, 
              technical demonstrations, or partnership opportunities.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Building, label: 'Headquarters', value: 'Kanpur, Uttar Pradesh, India' },
                { icon: Mail, label: 'Email', value: 'defense@xorian.in' },
                { icon: Phone, label: 'Defense Hotline', value: '+91 80 XXXX XXXX' },
                { icon: MapPin, label: 'R&D Center', value: 'Greater Noida, Uttar Pradesh' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-tech tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground font-display">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="mt-10 p-6 border border-foreground/30 bg-foreground/5">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-tech tracking-wider">SECURITY NOTICE: </span>
                All inquiries are handled through secure channels. Verification may be required 
                for defense and government entities.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display transition-colors"
                    placeholder="Ministry / Agency / Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                    CONTACT NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display transition-colors"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display transition-colors"
                    placeholder="official@domain.gov.in"
                  />
                </div>
                <div>
                  <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                  APPLICATION TYPE
                </label>
                <select
                  required
                  value={formData.application}
                  onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display transition-colors"
                >
                  <option value="">Select Application</option>
                  <option value="defense">Defense Operations</option>
                  <option value="surveillance">Border Surveillance</option>
                  <option value="reconnaissance">Strategic Reconnaissance</option>
                  <option value="infrastructure">Infrastructure Security</option>
                  <option value="other">Other / Custom Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-tech tracking-wider text-muted-foreground mb-2">
                  REQUIREMENTS
                </label>
                <textarea
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border focus:border-foreground outline-none text-foreground font-display resize-none transition-colors"
                  placeholder="Describe your operational requirements, quantity needed, timeline..."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
