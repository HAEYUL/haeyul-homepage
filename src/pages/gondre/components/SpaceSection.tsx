import { useState, useEffect, useCallback } from 'react';

const spaceImages = [
  { src: '/images/gondre/space-hall.jpg', alt: '곤드레밥집 메인 홀 — 넓은 좌석과 통유리창', label: '메인 홀' },
  { src: '/images/gondre/space-terrace.jpg', alt: '곤드레밥집 무료 휴게실', label: '무료 휴게실' },
  { src: '/images/gondre/space-dining.jpg', alt: '곤드레밥집 아늑한 다이닝 공간', label: '다이닝 공간' },
  { src: '/images/gondre/space-exterior1.jpg', alt: '곤드레밥집 매장 외관 (야간)', label: '매장 외관' },
  { src: '/images/gondre/space-exterior2.jpg', alt: '곤드레밥집 매장 입구', label: '매장 입구' },
  { src: '/images/gondre/space-exterior3.jpg', alt: '곤드레밥집 매장 외관 와이드샷', label: '매장 전경' },
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
            전용주차장 40대를 갖춘 편안한 공간에서 곤드레밥집을 만나보세요
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
