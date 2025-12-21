const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 border-t border-border/30 relative">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border border-foreground/50 flex items-center justify-center">
                <span className="font-tech font-bold text-lg sm:text-xl text-foreground">X</span>
              </div>
              <div>
                <span className="font-display font-semibold text-base sm:text-lg tracking-wider text-foreground">
                  XORIAN
                </span>
                <span className="block text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-tech">
                  INDUSTRIES
                </span>
              </div>
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
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              {['Privacy Policy', 'Terms of Use', 'Security', 'Compliance'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Xorian Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[10px] sm:text-xs font-tech tracking-wider text-muted-foreground whitespace-nowrap">
              INDIGENOUS TECHNOLOGY
            </span>
            <span className="text-accent">•</span>
            <span className="text-[10px] sm:text-xs font-tech tracking-wider text-accent whitespace-nowrap">
              MADE IN INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
