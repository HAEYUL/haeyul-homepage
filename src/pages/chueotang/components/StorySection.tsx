export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-background-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Story</p>
          <h2 className="section-title mt-2">브랜드소개</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/chueotang/hero.jpg"
              alt="정담명가 남원추어탕 매장 전경"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <p className="font-calligraphy text-2xl md:text-3xl text-primary-600 leading-relaxed">
              "최상의 재료에서 얻어지는 최고의 탕 맛.
              <br />
              오늘도 나는 탕 먹는다."
            </p>
            <p className="mt-6 text-base text-foreground-700 leading-relaxed">
              정담명가 남원추어탕은 매장에서 직접 국내산 미꾸라지와 강원도 영월의
              가을 무청으로 정성껏 오래 끓인 깊고 진한 보양 추어탕을 선보입니다.
              매일 손질한 국내산 돼지고기로 만드는 옛날 수제돈가스까지, 든든한 한 끼를 준비합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
