export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-background-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Story</p>
          <h2 className="section-title mt-2">브랜드소개</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden bg-background-100">
            <img
              src="/images/gondre/logo-horizontal.jpg"
              alt="곤드레밥집 로고 — 산.이.내.린.밥.상"
              className="w-full h-full object-contain p-8"
            />
          </div>
          <div>
            <p className="font-calligraphy text-2xl md:text-3xl text-primary-600 leading-relaxed">
              "밥심 - 밥이 보약이랬지.
              <br />
              할머니 말씀, 밥이 보약이랬지.
              <br />
              그건 자연이 주는 힘이야."
            </p>
            <p className="mt-6 text-base text-foreground-700 leading-relaxed">
              곤드레밥집은 산과 들이 기른 재료로 지은 밥 한 그릇에 정성을 담습니다.
              곤드레밥을 중심으로 싱싱샐러드, 잡채, 도토리묵무침, 가자미구이 등
              균형잡힌 영양을 셀프바에서 자유롭게 즐길 수 있는 건강한 한 끼를 준비합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
