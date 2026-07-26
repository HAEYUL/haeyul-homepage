import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollHeader } from '@/hooks/useScrollReveal';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { label: '해율이야기', href: '#story' },
  { label: '메뉴', href: '#menu' },
  { label: '공간', href: '#space' },
  { label: '예약안내', href: '#reservation' },
  { label: '오시는 길', href: '#location' },
];

export default function Header() {
  const scrolled = useScrollHeader(80);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

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
          : 'bg-transparent'
      }`}
    >
      <div className="container-main flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center text-foreground-950 no-underline"
          aria-label="해율 홈으로"
        >
          <img
            src="https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/a838545d-fc8a-4779-b370-a1aadde11ab5_compressed_unnamed.webp"
            alt="해율 로고"
            className="h-10 w-auto"
          />
          <span className="font-heading text-lg font-semibold tracking-tight whitespace-nowrap ml-2">
            해율만두전골
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="메인 내비게이션">
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

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-foreground-700 whitespace-nowrap">
                <strong className="text-foreground-950">{user.name}</strong>님
              </span>
              <button
                onClick={logout}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors whitespace-nowrap cursor-pointer bg-transparent border-none"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-foreground-600 hover:text-primary-500 transition-colors whitespace-nowrap no-underline"
              >
                로그인
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-primary-500 text-background-50 text-sm font-medium hover:bg-primary-600 transition-colors whitespace-nowrap no-underline"
              >
                회원가입
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground-950 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
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
          <div className="border-t border-background-200 pt-4 mt-2 flex flex-col gap-3">
            {user ? (
              <>
                <span className="text-base text-foreground-800 py-2">
                  <strong>{user.name}</strong>님
                </span>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    logout();
                  }}
                  className="text-base text-foreground-500 hover:text-foreground-800 transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-foreground-800 hover:text-primary-500 transition-colors py-2 no-underline"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center py-2.5 rounded-md bg-primary-500 text-background-50 text-base font-medium no-underline"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}