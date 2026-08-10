export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 md:py-28 bg-background-100">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Reservation</p>
          <h2 className="section-title mt-2">예약·이용안내</h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-background-50 rounded-lg p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full mb-4">
              <i className="ri-calendar-check-line text-primary-500 text-lg" />
            </div>
            <h3 className="text-sm font-semibold text-foreground-950 mb-2">예약 방법</h3>
            <p className="text-sm text-foreground-600 leading-relaxed">
              전화 예약 또는 캐치테이블 앱으로 예약하실 수 있습니다.
            </p>
            <a
              href="tel:031-264-3651"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 no-underline"
            >
              <i className="ri-phone-line" />
              031-264-3651
            </a>
          </div>

          <div className="bg-background-50 rounded-lg p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full mb-4">
              <i className="ri-team-line text-primary-500 text-lg" />
            </div>
            <h3 className="text-sm font-semibold text-foreground-950 mb-2">현장 방문</h3>
            <p className="text-sm text-foreground-600 leading-relaxed">
              예약 없이 방문하실 경우 시간대에 따라 현장 대기가 있을 수 있습니다.
            </p>
          </div>

          <div className="bg-background-50 rounded-lg p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full mb-4">
              <i className="ri-takeaway-line text-primary-500 text-lg" />
            </div>
            <h3 className="text-sm font-semibold text-foreground-950 mb-2">포장</h3>
            <p className="text-sm text-foreground-600 leading-relaxed">
              곤드레 도시락(15,000원)과 간장게장·코다리구이·새우튀김 포장 메뉴를 준비합니다.
            </p>
          </div>

          <div className="bg-background-50 rounded-lg p-6">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full mb-4">
              <i className="ri-group-line text-primary-500 text-lg" />
            </div>
            <h3 className="text-sm font-semibold text-foreground-950 mb-2">단체모임</h3>
            <p className="text-sm text-foreground-600 leading-relaxed">
              단체 예약 및 모임 관련 문의는 전화로 안내해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
