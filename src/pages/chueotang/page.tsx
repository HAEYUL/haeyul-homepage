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

export default function Chueotang() {
  useEffect(() => {
    document.title = '정담명가 남원추어탕 | 탕 맛 좋다 — 해율푸드';
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
