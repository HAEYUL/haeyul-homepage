import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import SpaceSection from './components/SpaceSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Gondre() {
  useEffect(() => {
    document.title = '곤드레밥집 | 밥 한 그릇에 마음을 담다 — 해율푸드';
  }, []);

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <SpaceSection />
        <ReservationSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
