import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '@/assets/Gemini_Generated_Image_qd4wj2qd4wj2qd4w-removebg-preview.png';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Handle quick link click - navigate to home with hash if not on home page
  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#' + section);
    }
  };

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-border/30 relative">
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo */}
          <div className="md:col-span-2">
            <div className="mb-4 sm:mb-6">
              <a href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
                <img
                  src={logoImage}
                  alt="Xorian Industries"
                  className="h-24 sm:h-28 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              Indigenous defense technology solutions for a self-reliant India.
              Engineering excellence in unmanned aerial systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-tech font-semibold tracking-wider text-xs sm:text-sm text-foreground mb-4 sm:mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {['About', 'Technology', 'Drones', 'Applications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    onClick={(e) => handleQuickLinkClick(e, link.toLowerCase())}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-tech font-semibold tracking-wider text-xs sm:text-sm text-foreground mb-4 sm:mb-6">
              LEGAL
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Use', path: '/terms-of-use' },
                { name: 'Security', path: '/security' },
                { name: 'Compliance', path: '/compliance' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2026 Xorian Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[10px] sm:text-xs font-tech tracking-wider text-muted-foreground whitespace-nowrap">
              INDIGENOUS TECHNOLOGY
            </span>
            <span className="text-accent">•</span>
            <span className="text-[10px] sm:text-xs font-tech tracking-wider text-muted-foreground whitespace-nowrap">
              MADE IN INDIA 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
