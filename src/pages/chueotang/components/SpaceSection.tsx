import { useState, useEffect, useCallback } from 'react';

const spaceImages = [
  { src: '/images/chueotang/space-hall.jpg', alt: '정담명가 남원추어탕 홀 — 한옥풍 대들보 천장과 좌석', label: '홀' },
  { src: '/images/chueotang/space-kitchen.jpg', alt: '정담명가 남원추어탕 오픈 주방', label: '오픈 주방' },
  { src: '/images/chueotang/space-cafe.jpg', alt: '정담명가 남원추어탕 카페 공간', label: '카페 공간' },
  { src: '/images/chueotang/space-exterior1.jpg', alt: '정담명가 남원추어탕 매장 외관 (야간)', label: '매장 외관 (야간)' },
  { src: '/images/chueotang/space-exterior2.jpg', alt: '정담명가 남원추어탕 매장 외관 (주간)', label: '매장 외관 (주간)' },
  { src: '/images/chueotang/space-parking.jpg', alt: '정담명가 남원추어탕 주차장', label: '주차장' },
];

export default function SpaceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % spaceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="space" className="py-20 md:py-28 bg-background-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Space</p>
          <h2 className="section-title mt-2">공간</h2>
          <p className="mt-3 text-foreground-600 text-base">
            한옥풍 매장에서 전용주차장 70대와 함께 편안하게 이용하실 수 있습니다
          </p>
        </div>

        <div>
          <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-lg overflow-hidden mb-4">
            <img
              src={spaceImages[activeIndex].src}
              alt={spaceImages[activeIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={activeIndex}
            />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-md">
              {spaceImages[activeIndex].label}
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3">
            {spaceImages.map((img, index) => (
              <button
                key={img.label}
                onClick={() => handleThumbClick(index)}
                className={`relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer transition-all ${
                  index === activeIndex
                    ? 'ring-2 ring-accent-500 opacity-100'
                    : 'opacity-60 hover:opacity-85'
                }`}
                aria-label={img.label}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
