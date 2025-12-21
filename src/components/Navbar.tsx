import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#technology', label: 'Technology' },
    { href: '#drones', label: 'Drones' },
    { href: '#applications', label: 'Applications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div>
              <span className="font-display font-semibold text-base sm:text-lg tracking-wider text-foreground block">
                XORIAN
              </span>
              <span className="block text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-tech">
                INDUSTRIES
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="heroOutline" size="sm">
              Defense Inquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Stronger Backdrop to hide background content */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-lg z-[45]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content with better spacing */}
            <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/30 shadow-2xl z-[50]">
              <div className="px-6 py-8">
                {/* Navigation Links with more spacing */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-all duration-300 py-4 px-4 hover:bg-accent/10 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                
                {/* CTA Button with top padding */}
                <div className="pt-4 border-t border-border/30">
                  <Button 
                    variant="hero" 
                    className="w-full h-14 text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Defense Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
