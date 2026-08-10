import { useState, useEffect, useCallback } from 'react';

const spaceImages = [
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/87c51a51-688d-4d06-b261-9655ce8899ef_compressed_1.webp',
    alt: '해율 1층 실내 — 정원이 보이는 여유로운 공간',
    label: '1층 실내',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/c6eaa6fa-caa3-4ecc-9a89-2a116a579cf4_compressed_22.webp',
    alt: '해율 2층 홀 — 넓은 다이닝 공간',
    label: '2층 홀',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/3ff921dc-92eb-4ea0-9786-26f49e44783b_compressed_2.webp',
    alt: '해율 2층 전경 — 자연과 함께하는 식사 공간',
    label: '2층 전경',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/fae737a0-edc1-456f-a137-7162911d05f6_compressed_3.webp',
    alt: '해율 3층 실내 — 단체 모임 공간',
    label: '3층 실내',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/73ca0982-5964-47c9-9f8f-cec087d51eb3_compressed_2.webp',
    alt: '해율 정원 — 산책할 수 있는 자연 정원',
    label: '정원',
  },
  {
    src: 'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/06a07866-9106-4ebc-8f2f-fe9859259df1_compressed_unnamed.webp',
    alt: '해율 건물 외관과 넓은 주차 공간',
    label: '주차장',
  },
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
        {/* Section Header */}
        <div className="fade-in text-center mb-14">
          <p className="section-label">Space</p>
          <h2 className="section-title mt-2">공간</h2>
          <p className="mt-3 text-foreground-600 text-base">
            자연 속에서 맛과 여유를 함께 즐기는 공간
          </p>
        </div>

        {/* Gallery */}
        <div className="fade-in">
          {/* Main Image */}
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

          {/* Thumbnails */}
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
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}