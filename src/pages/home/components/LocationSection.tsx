export default function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-background-50">
      <div className="container-main">
        {/* Section Header */}
        <div className="fade-in text-center mb-14">
          <p className="section-label">Location</p>
          <h2 className="section-title mt-2">오시는 길</h2>
        </div>

        <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Address Info */}
          <div className="bg-background-100 rounded-lg p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-6">
              해율만두전골
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-map-pin-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">주소</span>
                  <p className="text-sm md:text-base text-foreground-800 leading-relaxed">
                    경기도 용인시 수지구 고기로173번길 5
                    <br />
                    <span className="text-foreground-500">(동천동 67-2)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-phone-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">전화</span>
                  <span className="text-sm md:text-base text-foreground-800">
                    031-261-8000
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-time-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">영업시간</span>
                  <p className="text-sm md:text-base text-foreground-800">
                    매일 11:00 — 21:00
                    <br />
                    <span className="text-foreground-500 text-sm">라스트오더 19:50</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                  <i className="ri-car-line text-primary-500 text-lg" />
                </div>
                <div>
                  <span className="block text-xs text-foreground-500 mb-1">주차</span>
                  <p className="text-sm md:text-base text-foreground-800">
                    해율 전용 주차장 이용 가능(60대)
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://map.naver.com/p/entry/place/2069065778?c=13.14,0,0,3,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607222237%26locale%3Dko%26svcName%3Dmap_pcv5%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607222238%26locale%3Dko%26svcName%3Dmap_pcv5"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-medium rounded-md hover:bg-primary-600 transition-colors no-underline"
              >
                <i className="ri-navigation-line" />
                네이버 지도
              </a>
              <a
                href="https://www.google.com/maps/place/%ED%95%B4%EC%9C%A8%EB%A7%8C%EB%91%90%EC%A0%84%EA%B3%A8/data=!3m1!4b1!4m6!3m5!1s0x357b59fefd8008bf:0x784be990ce4af4f8!8m2!3d37.349833!4d127.0858354!16s%2Fg%2F11xymk00z7?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 text-background-50 text-sm font-medium rounded-md hover:bg-secondary-600 transition-colors no-underline"
              >
                <i className="ri-map-pin-line" />
                구글 지도
              </a>
              <a
                href="https://map.kakao.com/?map_type=TYPE_MAP&q=%ED%95%B4%EC%9C%A8%EB%A7%8C%EB%91%90%EC%A0%84%EA%B3%A8&urlLevel=3&urlX=519011&urlY=1069607"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-background-50 text-sm font-medium rounded-md hover:bg-accent-600 transition-colors no-underline"
              >
                <i className="ri-road-map-line" />
                카카오맵
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-[320px] md:h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=37.349833,127.0858354&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="해율만두전골 위치"
              aria-label="해율만두전골 구글 지도"
            />
          </div>
        </div>
      </div>
    </section>
  );
}