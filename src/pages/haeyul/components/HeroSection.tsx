export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/8438d1d0-7f9f-45dd-b2b2-becc07245f41_compressed_2.webp"
          alt="해율 2층 전경 — 푸른 숲이 보이는 넓은 통유리 매장 내부"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-calligraphy text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          자연의 흐름을 맛으로 전하다.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
          해율은 전골집이 아닙니다.
          <br />
          자연을 경험하는 공간입니다.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-background-50 text-base font-medium rounded-md hover:bg-accent-600 transition-colors whitespace-nowrap no-underline shadow-lg"
          >
            대표메뉴 보기
          </a>
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 backdrop-blur-sm text-white text-base font-medium rounded-md hover:bg-white/25 transition-colors border border-white/30 whitespace-nowrap no-underline"
          >
            <i className="ri-phone-line" />
            예약하기
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
}