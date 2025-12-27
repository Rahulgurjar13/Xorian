import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechnologySection from '@/components/TechnologySection';
import DronesSection from '@/components/DronesSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import MadeInIndiaSection from '@/components/MadeInIndiaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Memoize sections to prevent unnecessary re-renders
const MemoizedNavbar = memo(Navbar);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedAboutSection = memo(AboutSection);
const MemoizedTechnologySection = memo(TechnologySection);
const MemoizedDronesSection = memo(DronesSection);
const MemoizedApplicationsSection = memo(ApplicationsSection);
const MemoizedMadeInIndiaSection = memo(MadeInIndiaSection);
const MemoizedContactSection = memo(ContactSection);
const MemoizedFooter = memo(Footer);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Xorian Industries | Indigenous Defense Drone Technology - Made in India</title>
        <meta
          name="description"
          content="Xorian Industries - India's leading indigenous defense drone manufacturer. Custom surveillance drones, flight control systems, and advanced UAV technology for defense and security applications."
        />
        <meta name="keywords" content="defense drones, surveillance drones, indigenous UAV, Made in India drones, flight control systems, defense technology" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <MemoizedNavbar />
        <MemoizedHeroSection />
        <MemoizedAboutSection />
        <MemoizedTechnologySection />
        <MemoizedDronesSection />
        <MemoizedApplicationsSection />
        <MemoizedMadeInIndiaSection />
        <MemoizedContactSection />
        <MemoizedFooter />
      </main>
    </>
  );
};

export default memo(Index);
