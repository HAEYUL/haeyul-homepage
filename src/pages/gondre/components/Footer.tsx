import { Link } from 'react-router-dom';

const footerLinks = [
  { label: '브랜드소개', href: '#story' },
  { label: '메뉴', href: '#menu' },
  { label: '공간', href: '#space' },
  { label: '예약·이용안내', href: '#reservation' },
  { label: '오시는 길', href: '#location' },
  { label: '문의하기', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary-900 text-white/80">
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-heading text-lg font-semibold text-white whitespace-nowrap">
              곤드레밥집
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              자연을 담은 건강한 한 끼,
              <br />
              밥 한 그릇에 마음을 담습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">
              바로가기
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">
              연락처
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:031-264-3651"
                  className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                >
                  <i className="ri-phone-line mr-2" />
                  031-264-3651
                </a>
              </li>
              <li className="text-sm text-white/60">
                <i className="ri-map-pin-line mr-2" />
                경기 용인시 수지구 고기로 114
              </li>
              <li className="text-sm text-white/60">
                <i className="ri-time-line mr-2" />
                10:30 — 20:50
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 곤드레밥집 (해율푸드). All rights reserved.
          </p>
          <Link
            to="/"
            className="text-xs text-white/40 hover:text-white/70 transition-colors no-underline"
          >
            해율푸드 홈으로
          </Link>
        </div>
      </div>
    </footer>
  );
}
