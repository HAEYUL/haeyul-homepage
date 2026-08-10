import { openChannelChat } from '@/lib/channelIO';

const faqs = [
  { q: '예약이 꼭 필요한가요?', a: '전화로 예약하실 수 있습니다. 예약 없이 방문하셔도 당일 현장 대기로 이용 가능합니다.' },
  { q: '포장이 되나요?', a: '추어탕 포장 2개(21,000원), 1개(11,000원)를 포함해 모든 메뉴 포장이 가능합니다.' },
  { q: '주차가 가능한가요?', a: '전용주차장 70대를 이용하실 수 있습니다.' },
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
              href="tel:031-265-3651"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-background-50 text-foreground-800 text-base font-medium rounded-md border border-background-300 hover:bg-background-200 transition-colors no-underline whitespace-nowrap"
            >
              <i className="ri-phone-line" />
              031-265-3651
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
