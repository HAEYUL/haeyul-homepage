import { useCallback } from 'react';

interface PosterMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PosterMenuModal({ isOpen, onClose, title, imageSrc, imageAlt }: PosterMenuModalProps) {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-menu-modal-title"
    >
      <div className="bg-background-50 rounded-lg w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-background-200 shrink-0">
          <h3 id="poster-menu-modal-title" className="font-heading text-lg font-semibold text-foreground-950">
            {title}
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

        <div className="overflow-y-auto p-4 md:p-6">
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-md" />
        </div>
      </div>
    </div>
  );
}
