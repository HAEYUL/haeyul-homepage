export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 md:py-28 bg-background-100">
      <div className="container-main">
        {/* Section Header */}
        <div className="fade-in text-center mb-14">
          <p className="section-label">Reservation</p>
          <h2 className="section-title mt-2">예약안내</h2>
        </div>

        {/* Reservation Grid */}
        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Hours */}
          <div className="bg-background-50 rounded-lg p-6 md:p-8 text-center">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full">
              <i className="ri-time-line text-primary-500 text-lg" />
            </div>
            <span className="block text-xs text-foreground-500 mb-2 uppercase tracking-wider">
              영업시간
            </span>
            <span className="block font-heading text-xl font-semibold text-foreground-950">
              11:00 — 21:00
            </span>
            <span className="block text-sm text-foreground-500 mt-1">
              라스트오더 19:50
            </span>
          </div>

          {/* Phone */}
          <div className="bg-background-50 rounded-lg p-6 md:p-8 text-center">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full">
              <i className="ri-phone-line text-primary-500 text-lg" />
            </div>
            <span className="block text-xs text-foreground-500 mb-2 uppercase tracking-wider">
              전화예약
            </span>
            <span className="block font-heading text-xl font-semibold text-primary-500">
              031-261-8000
            </span>
          </div>

          {/* 2F */}
          <div className="bg-background-50 rounded-lg p-6 md:p-8 text-center">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full">
              <i className="ri-home-smile-line text-primary-500 text-lg" />
            </div>
            <span className="block text-xs text-foreground-500 mb-2 uppercase tracking-wider">
              2층
            </span>
            <span className="block font-heading text-lg font-semibold text-foreground-950">
              8인 이상 예약 가능
            </span>
            <span className="block text-sm text-foreground-500 mt-1">
              가족모임 · 소모임
            </span>
          </div>

          {/* 3F */}
          <div className="bg-background-50 rounded-lg p-6 md:p-8 text-center">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full">
              <i className="ri-team-line text-primary-500 text-lg" />
            </div>
            <span className="block text-xs text-foreground-500 mb-2 uppercase tracking-wider">
              3층
            </span>
            <span className="block font-heading text-lg font-semibold text-foreground-950">
              20~60인 예약 가능
            </span>
            <span className="block text-sm text-foreground-500 mt-1">
              단체모임 · 회식
            </span>
          </div>
        </div>

        {/* Reservation Note */}
        <div className="fade-in max-w-2xl mx-auto bg-accent-50 rounded-lg p-6 text-center">
          <p className="text-sm text-foreground-700 leading-relaxed">
            <i className="ri-information-line text-accent-500 mr-1" />
            단체 예약 및 특선 메뉴는 사전 예약이 필요합니다.
            <br />
            전화로 예약하시면 더욱 편리하게 안내해 드리겠습니다.
          </p>
          <span className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-accent-500 text-background-50 text-sm font-medium rounded-md">
            <i className="ri-phone-line" />
            매장 전화 031)261-8000
          </span>
        </div>
      </div>
    </section>
  );
}