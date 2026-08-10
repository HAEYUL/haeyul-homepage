import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollHeader } from '@/hooks/useScrollReveal';

const navItems = [
  { label: '브랜드소개', href: '#story' },
  { label: '메뉴', href: '#menu' },
  { label: '공간', href: '#space' },
  { label: '예약·이용안내', href: '#reservation' },
  { label: '오시는 길', href: '#location' },
  { label: '문의하기', href: '#contact' },
];

export default function Header() {
  const scrolled = useScrollHeader(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-sm'
          : 'bg-background-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-main flex items-center h-[72px]">
        <div className="flex-1 flex items-center min-w-0">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-heading text-lg font-semibold tracking-tight text-foreground-950 no-underline truncate"
            aria-label="정담명가 남원추어탕 홈으로"
          >
            정담명가 남원추어탕
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-7 shrink-0" aria-label="메인 내비게이션">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-foreground-700 hover:text-primary-500 transition-colors whitespace-nowrap no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 hidden md:flex items-center justify-end">
          <Link
            to="/"
            className="text-xs text-foreground-500 hover:text-primary-500 transition-colors whitespace-nowrap no-underline"
          >
            해율푸드
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden absolute top-[72px] left-0 right-0 bg-background-50/98 backdrop-blur-md border-t border-background-200 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4" aria-label="모바일 내비게이션">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base text-foreground-800 hover:text-primary-500 transition-colors py-2 no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
