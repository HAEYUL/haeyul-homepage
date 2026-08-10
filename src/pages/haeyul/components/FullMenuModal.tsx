import { useCallback } from 'react';

const menuCategories = [
  {
    title: '대표 전골',
    items: [
      { name: '풍미버섯전골', price: '21,000', desc: '9가지 자연 버섯과 상황버섯 육수의 깊은 풍미' },
      { name: '진미한우전골', price: '28,000', desc: '엄선한 한우와 상황버섯 육수의 프리미엄 전골' },
      { name: '자연만두전골', price: '15,000', desc: '매일 직접 빚는 굴림만두와 상황버섯 육수' },
    ],
  },
  {
    title: '계절 · 특선 메뉴',
    items: [
      { name: '원기회복전골', price: '25,000', desc: '특별 보양 재료가 들어간 계절 한정 전골' },
      { name: '원기회복전골 (한우)', price: '32,000', desc: '한우가 들어간 프리미엄 보양 전골' },
      { name: '하모버섯전골', price: '35,000', desc: '하모와 9가지 버섯의 조화 — 예약 한정', badge: '예약 한정' },
    ],
  },
  {
    title: '음료',
    items: [
      { name: '생막걸리', price: '5,000', desc: '전통 양조장 막걸리' },
      { name: '복분자', price: '8,000', desc: '국내산 복분자로 만든 전통주' },
      { name: '매실', price: '7,000', desc: '직접 담근 매실주' },
      { name: '청정수', price: '2,000', desc: '깨끗한 국내산 생수' },
    ],
  },
];

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      <div className="bg-background-50 rounded-lg w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-background-200 shrink-0">
          <h3 id="menu-modal-title" className="font-heading text-lg font-semibold text-foreground-950">
            전체 메뉴
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-200 transition-colors cursor-pointer"
            aria-label="메뉴 닫기"
          >
            <i className="ri-close-line text-foreground-600 text-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 md:p-6">
          <img
            src="https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/7ff5ef7b-df94-4b2c-b23e-93dd3049774d_compressed_1.webp"
            alt="해율만두전골 전체 메뉴판"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}