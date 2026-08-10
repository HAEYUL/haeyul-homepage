import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import SpaceSection from './components/SpaceSection';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function Haeyul() {
  useEffect(() => {
    document.title = '해율만두전골 | 자연의 흐름을 맛으로 전합니다 — 해율푸드';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
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
      </main>
      <Footer />
    </div>
  );
}