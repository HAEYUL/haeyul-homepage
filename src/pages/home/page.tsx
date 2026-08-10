import { useEffect } from 'react';
import Header from './components/Header';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    document.title = '해율푸드 | 자연이 차린 세 개의 밥상';
  }, []);

  return (
    <div className="min-h-screen bg-background-50">
      <Header />
      <main>
        <BrandsSection />
      </main>
      <Footer />
    </div>
  );
}
