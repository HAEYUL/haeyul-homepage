import { openChannelChat } from '@/lib/channelIO';

const faqs = [
  { q: '예약이 꼭 필요한가요?', a: '전화 또는 캐치테이블로 예약하실 수 있습니다. 예약 없이 방문하셔도 이용 가능하나 시간대에 따라 대기가 있을 수 있습니다.' },
  { q: '포장이 되나요?', a: '곤드레 도시락과 간장게장·코다리구이·새우튀김 등 포장 메뉴를 준비하고 있습니다.' },
  { q: '주차가 가능한가요?', a: '전용주차장 40대를 이용하실 수 있습니다.' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background-100">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-2">문의하기</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={openChannelChat}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-background-50 text-base font-medium rounded-md hover:bg-primary-600 transition-colors cursor-pointer border-none whitespace-nowrap"
            >
              <i className="ri-chat-3-line" />
              채팅으로 문의하기
            </button>
            <a
              href="tel:031-264-3651"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-background-50 text-foreground-800 text-base font-medium rounded-md border border-background-300 hover:bg-background-200 transition-colors no-underline whitespace-nowrap"
            >
              <i className="ri-phone-line" />
              031-264-3651
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-background-50 rounded-lg p-5">
                <p className="text-sm font-semibold text-foreground-950 mb-1.5">
                  <i className="ri-question-line text-accent-500 mr-1.5" />
                  {item.q}
                </p>
                <p className="text-sm text-foreground-600 leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
