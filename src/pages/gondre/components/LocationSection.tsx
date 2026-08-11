const address = '경기 용인시 수지구 고기로 114';
const encodedAddress = encodeURIComponent(address);

export default function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-background-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Location</p>
          <h2 className="section-title mt-2">오시는 길</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-background-100 rounded-lg p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-6">
              곤드레밥집
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-map-pin-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">주소</span>
                  <p className="text-sm md:text-base text-foreground-800 leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-phone-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">전화</span>
                  <span className="text-sm md:text-base text-foreground-800">031-264-3651</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-time-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">영업시간</span>
                  <p className="text-sm md:text-base text-foreground-800">
                    10:30 — 20:50 (브레이크타임 없음)
                    <br />
                    <span className="text-foreground-500 text-sm">라스트오더 20:00</span>
                    <br />
                    <span className="text-foreground-500 text-sm">휴무일: 설날·추석 (전날·당일 2일간)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-car-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">주차</span>
                  <p className="text-sm md:text-base text-foreground-800">전용주차장 이용 가능 (40대)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://map.naver.com/p/search/${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-medium rounded-md hover:bg-primary-600 transition-colors no-underline"
              >
                <i className="ri-navigation-line" />
                네이버 지도
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 text-background-50 text-sm font-medium rounded-md hover:bg-secondary-600 transition-colors no-underline"
              >
                <i className="ri-map-pin-line" />
                구글 지도
              </a>
              <a
                href={`https://map.kakao.com/?q=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-background-50 text-sm font-medium rounded-md hover:bg-accent-600 transition-colors no-underline"
              >
                <i className="ri-road-map-line" />
                카카오맵
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-[320px] md:h-[420px]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodedAddress}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="곤드레밥집 위치"
              aria-label="곤드레밥집 구글 지도"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
