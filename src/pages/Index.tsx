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
      </Helmet>

      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <DronesSection />
        <ApplicationsSection />
        <MadeInIndiaSection />

        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
