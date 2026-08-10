const footerLinks = [
  { label: '브랜드소개', href: '#story' },
  { label: '메뉴', href: '#menu' },
  { label: '공간', href: '#space' },
  { label: '예약안내', href: '#reservation' },
  { label: '오시는 길', href: '#location' },
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
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/a838545d-fc8a-4779-b370-a1aadde11ab5_compressed_unnamed.webp"
                alt="해율 로고"
                className="h-10 w-auto"
              />
              <span className="font-heading text-lg font-semibold text-white whitespace-nowrap">
                해율만두전골
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              자연에서 온 재료로 정성을 담아
              <br />
              몸이 가벼워지는 한 끼를 선사합니다.
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
                  href="tel:031-261-8000"
                  className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                >
                  <i className="ri-phone-line mr-2" />
                  031-261-8000
                </a>
              </li>
              <li className="text-sm text-white/60">
                <i className="ri-map-pin-line mr-2" />
                경기도 용인시 수지구 고기로173번길 5
              </li>
              <li className="text-sm text-white/60">
                <i className="ri-time-line mr-2" />
                매일 11:00 — 21:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 해율만두전골. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            자연의 흐름을 맛으로 전하다.
          </p>
        </div>
      </div>
    </footer>
  );
}