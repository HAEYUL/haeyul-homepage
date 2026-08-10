import { useState, useCallback } from 'react';
import PosterMenuModal from '@/components/PosterMenuModal';

const menuItems = [
  { name: '곤드레 밥상 (2인 이상)', desc: '곤드레밥·샐러드·잡채·도토리묵무침·가자미구이·두부된장찌개', price: '15,000원', image: '/images/gondre/hero.png' },
  { name: '코다리 세트', desc: '곤드레 기본밥상(2인) + 코다리구이', price: '39,000원', image: '/images/gondre/codari-set.png' },
  { name: '새우튀김 세트', desc: '곤드레 기본밥상(2인) + 새우튀김', price: '39,000원', image: '/images/gondre/shrimp-set.png' },
  { name: '간장게장 세트', desc: '곤드레 기본밥상(2인) + 간장게장', price: '46,000원', image: '/images/gondre/ganjanggejang-set.png' },
  { name: '풍성세트 (3인)', desc: '기본밥상(3인) + 코다리 2마리 + 새우튀김', price: '69,000원', image: '/images/gondre/pungseong-set.png' },
  { name: '명품세트 (3인)', desc: '기본밥상(3인) + 간장게장 2마리 + 코다리', price: '83,000원', image: '/images/gondre/myeongpum-set.png' },
  { name: '바다세트 (3인)', desc: '기본밥상(3인) + 간장게장 2마리 + 새우튀김', price: '83,000원', image: '/images/gondre/bada-set.png' },
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
          <p className="mt-3 text-sm text-foreground-500">정성스럽게 준비한 셀프바에서 자유롭게 이용 가능합니다. (단, 가자미는 추가)</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
            곤드레 도시락, 포장 메뉴는 전체 메뉴판을 참고해 주세요.
          </p>
        </div>
      </div>

      <PosterMenuModal
        isOpen={modalOpen}
        onClose={closeModal}
        title="곤드레밥집 전체 메뉴"
        imageSrc="/images/gondre/menu-poster.png"
        imageAlt="곤드레밥집 전체 메뉴판"
      />
    </section>
  );
}
