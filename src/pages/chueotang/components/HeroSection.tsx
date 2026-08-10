import { isOpenNow } from '@/lib/businessHours';

export default function HeroSection() {
  const open = isOpenNow('10:00', '20:50');

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/chueotang/hero.jpg"
          alt="정담명가 남원추어탕 외관"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/55" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-calligraphy text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          탕 맛 좋다
        </h1>

        <div className="mt-6 flex items-center gap-3 text-white/95 text-sm">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium ${
              open ? 'bg-primary-500' : 'bg-foreground-700'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-white' : 'bg-white/60'}`} />
            {open ? '영업중' : '영업 종료'}
          </span>
          <a href="tel:031-265-3651" className="inline-flex items-center gap-1.5 no-underline text-white/95 hover:text-white">
            <i className="ri-phone-line" />
            031-265-3651
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-background-50 text-base font-medium rounded-md hover:bg-accent-600 transition-colors whitespace-nowrap no-underline shadow-lg"
          >
            메뉴 전체보기
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 backdrop-blur-sm text-white text-base font-medium rounded-md hover:bg-white/25 transition-colors border border-white/30 whitespace-nowrap no-underline"
          >
            예약·문의
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
}
