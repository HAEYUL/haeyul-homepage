import { useCallback } from 'react';

const features = [
  {
    title: '5시간 정성의\n상황버섯 육수',
    desc: '매일 새벽부터 5시간 동안 정성껏 우려낸 깊고 맑은 상황버섯 육수',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
        <path d="M12 22H36V36C36 38.2 34.2 40 32 40H16C13.8 40 12 38.2 12 36V22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 28H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 28H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 16C20 14 22 12 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 16C26 14 28 12 28 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 18C23 16 25 14 25 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '매일 직접 빚는\n굴림만두',
    desc: '기계가 아닌 손으로, 매일 아침 신선한 재료로 직접 빚는 수제 만두',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
        <path d="M8 28C8 28 12 18 24 18C36 18 40 28 40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 28C8 28 12 38 24 38C36 38 40 28 40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 26C16 24 18 23 20 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 24C22 22.5 24 22 26 23.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M26 23.5C28 22 30 22 32 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M22 14C22 12 23 10 23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 14C27 12 28 10 28 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '9가지\n자연 버섯',
    desc: '동충하초, 노루궁뎅이 버섯등 엄선한 9가지 자연 버섯의 깊은 맛과 영양',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
        <path d="M10 26C10 18 16 12 24 12C32 12 38 18 38 26H10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 26V40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M27 26V40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 40H31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
        <circle cx="24" cy="17" r="1.5" fill="currentColor" />
        <circle cx="30" cy="20" r="1.5" fill="currentColor" />
        <circle cx="21" cy="23" r="1" fill="currentColor" />
        <circle cx="27" cy="23" r="1" fill="currentColor" />
        <path d="M36 30C36 27 38 25 40 25C42 25 44 27 44 30H36Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 30V36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '자연을 담은\n건강한 한 끼',
    desc: '자연에서 온 재료 그대로, 몸과 마음이 가벼워지는 보양 한 끼',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
        <path d="M8 24H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 24C12 32 17 38 24 38C31 38 36 32 36 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 38V40H28V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8C24 8 18 12 18 18C18 20 20 22 24 22C28 22 30 20 30 18C30 12 24 8 24 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 22V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 17C22 16 23 15 24 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function StorySection() {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="story" className="py-20 md:py-28 bg-background-50">
      {/* Story Visual */}
      <div className="fade-in w-full max-w-5xl mx-auto px-4 md:px-6 mb-16">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Morning%20sunlight%20filtering%20through%20lush%20green%20forest%20canopy%2C%20soft%20golden%20rays%20between%20leaves%2C%20misty%20atmospheric%20nature%20scene%2C%20serene%20and%20peaceful%20woodland%2C%20warm%20earthy%20tones%2C%20editorial%20nature%20photography%2C%20high%20detail&width=1200&height=800&seq=story-main&orientation=landscape"
            alt="해율을 둘러싼 아침 숲 — 자연의 빛이 나뭇잎 사이로 스며드는 모습"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container-main">
        {/* Philosophy Headline */}
        <div className="fade-in text-center mb-12">
          <p className="section-label">Our Philosophy</p>
          <h2 className="section-title mt-2">
            배부른 것이 아니라,
            <br />
            몸이 가벼워지는 한 끼.
          </h2>
        </div>

        {/* Brand Story Text */}
        <div className="fade-in max-w-2xl mx-auto text-center mb-20">
          <p className="text-foreground-700 leading-relaxed text-base md:text-lg">
            해율은 자연에서 온 재료로 정성을 담아 한 끼를 준비합니다.
            <br className="hidden md:block" />
            5시간 우려낸 상황버섯 육수, 매일 아침 직접 빚는 굴림만두,
            <br className="hidden md:block" />
            그리고 9가지 자연 버섯이 만들어내는 깊은 풍미.
            <br />
            <br />
            우리는 배를 채우는 것이 아니라, 몸을 가볍게 하는 한 끼를 지향합니다.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-in delay-${index + 1} group bg-background-100 rounded-lg p-6 md:p-8 text-center hover:bg-background-200/70 transition-colors`}
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-background-50 rounded-full group-hover:bg-accent-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground-950 whitespace-pre-line leading-snug mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}