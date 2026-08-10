import { useState, useCallback } from 'react';
import PosterMenuModal from '@/components/PosterMenuModal';

const menuItems = [
  { name: '동충하초 활전복 추어탕', desc: '동충하초의 깊은 풍미와 활전복을 담은 프리미엄 보양식', price: '23,000원', image: '/images/chueotang/donghchungcho-jeonbok.png' },
  { name: '정담 추어탕', desc: '진한 남원식 추어탕, 정성껏 오래 끓여 깊고 진한 맛', price: '13,000원', image: '/images/chueotang/chueotang-basic.png' },
  { name: '우렁 추어탕', desc: '우렁의 식감과 영양을 더한 건강 보양식', price: '15,000원', image: '/images/chueotang/ureong.png' },
  { name: '정담 돈가스 기본세트', desc: '정담 추어탕 + 수제돈가스', price: '18,000원', image: '/images/chueotang/donkatsu-set.png' },
  { name: '정담 추어튀김 기본세트', desc: '정담 추어탕 + 추어튀김', price: '18,000원', image: '/images/chueotang/tuigim-set.png' },
  { name: '정담 왕만두 기본세트', desc: '정담 추어탕 + 왕만두', price: '16,000원', image: '/images/chueotang/mandu-set.png' },
];

export default function MenuSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background-100">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="section-label">Menu</p>
          <h2 className="section-title mt-2">메뉴</h2>
          <p className="mt-3 text-sm text-foreground-500">기본세트는 동충하초·활전복·통추어·우렁으로 보양 업그레이드 가능</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-background-50 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground-950">{item.name}</h3>
                <p className="mt-1 text-xs text-foreground-500 leading-relaxed line-clamp-2">{item.desc}</p>
                <p className="mt-2 text-sm font-semibold text-primary-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-500 text-primary-500 text-base font-medium rounded-md hover:bg-primary-500 hover:text-background-50 transition-colors whitespace-nowrap cursor-pointer"
          >
            전체 메뉴판 보기
          </button>
          <p className="text-sm text-foreground-500 mt-4">
            수제 돈가스, 바삭 추어튀김, 추어 왕만두 등 별미 메뉴와 포장 메뉴는 전체 메뉴판을 참고해주세요
          </p>
        </div>
      </div>

      <PosterMenuModal
        isOpen={modalOpen}
        onClose={closeModal}
        title="정담명가 남원추어탕 전체 메뉴"
        imageSrc="/images/chueotang/menu-poster.png"
        imageAlt="정담명가 남원추어탕 전체 메뉴판"
      />
    </section>
  );
}
