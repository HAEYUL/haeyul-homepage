import { useState, useCallback } from 'react';
import FullMenuModal from './FullMenuModal';

const signatureDishes = [
  {
    name: '풍미버섯전골',
    price: '21,000',
    badge: 'BEST',
    image:
      'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/da794eb9-33de-4e74-90fd-fca370b46eee_compressed_unnamed.webp',
    alt: '풍미버섯전골 — 9가지 자연 버섯과 상황버섯 육수의 깊은 풍미',
  },
  {
    name: '진미한우전골',
    price: '28,000',
    badge: null,
    image:
      'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/7c44717f-4d48-4be3-91d4-11123b622838_compressed_unnamed.webp',
    alt: '진미한우전골 — 엄선한 한우와 상황버섯 육수의 프리미엄 전골',
  },
  {
    name: '자연만두전골',
    price: '15,000',
    badge: null,
    image:
      'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/367b86f0-34cc-4543-bac0-5e6efd2467d2_compressed_unnamed.webp',
    alt: '자연만두전골 — 매일 직접 빚는 굴림만두와 상황버섯 육수의 해율 대표 전골',
  },
];

const seasonalItems = [
  { name: '원기회복전골', note: null },
  { name: '원기회복전골 (한우)', note: null },
  { name: '하모버섯전골', note: '예약 한정' },
];

export default function MenuSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background-100">
      <div className="container-main">
        {/* Section Header */}
        <div className="fade-in text-center mb-14">
          <p className="section-label">Signature</p>
          <h2 className="section-title mt-2">대표메뉴</h2>
        </div>

        {/* Signature Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {signatureDishes.map((dish, index) => (
            <article
              key={dish.name}
              className={`fade-in delay-${index + 1} group bg-background-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {dish.badge && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-accent-500 text-background-50 text-xs font-medium rounded-full">
                    {dish.badge}
                  </span>
                )}
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground-950">
                  {dish.name}
                </h3>
                <p className="mt-2 text-foreground-700">
                  <span className="en-text text-lg font-medium">{dish.price}</span>
                  <span className="text-sm ml-0.5">원</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Seasonal Menu */}
        <div className="fade-in max-w-lg mx-auto mb-12">
          <h3 className="font-heading text-lg font-semibold text-foreground-950 text-center mb-6">
            계절 · 특선 메뉴
          </h3>
          <ul className="bg-background-50 rounded-lg divide-y divide-background-200">
            {seasonalItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between px-5 py-4"
              >
                <span className="text-foreground-800 text-sm md:text-base">{item.name}</span>
                {item.note && (
                  <span className="px-2.5 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full">
                    {item.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* View All Menu Button */}
        <div className="fade-in text-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-500 text-primary-500 text-base font-medium rounded-md hover:bg-primary-500 hover:text-background-50 transition-colors whitespace-nowrap cursor-pointer"
          >
            전체 메뉴 보기
          </button>
        </div>
      </div>

      <FullMenuModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  );
}