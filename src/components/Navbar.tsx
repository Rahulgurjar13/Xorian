import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '@/assets/Gemini_Generated_Image_qd4wj2qd4wj2qd4w-removebg-preview.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'technology', label: 'Technology' },
    { href: 'drones', label: 'Drones' },
    { href: 'applications', label: 'Applications' },
    { href: 'contact', label: 'Contact' },
  ];

  // Handle navigation - if on home page, scroll to section; otherwise navigate to home with hash
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      // On home page - scroll to section
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages - navigate to home with hash
      navigate('/#' + href);
    }
  };

  // Handle logo click - always go to home
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-background/50 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Always links to home */}
          <a href="/" onClick={handleLogoClick} className="flex items-center group relative cursor-pointer">
            <img
              src={logoImage}
              alt="Xorian Industries"
              className="h-24 sm:h-28 w-auto absolute left-0 top-1/2 -translate-y-1/2"
            />
            <div className="h-24 sm:h-28 w-[220px] sm:w-[320px]"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              <Button variant="heroOutline" size="sm">
                Defense Inquiry
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button - Increased visibility */}
          <button
            className="lg:hidden text-foreground p-2 relative z-[80]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-white opacity-100" strokeWidth={2.5} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Full Screen Backdrop */}
            <div
              className="lg:hidden fixed inset-0 top-0 bg-black/95 z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-background border-t border-border shadow-2xl z-[70]">
              <div className="flex flex-col p-6 gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {/* Navigation Links */}
                <div className="flex flex-col gap-3">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={`#${link.href}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/10 border-b border-border/20 last:border-0"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-border/30">
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                    <Button
                      variant="hero"
                      className="w-full h-12 text-base"
                    >
                      Defense Inquiry
                    </Button>
                  </a>
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
