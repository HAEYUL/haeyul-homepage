const stores = [
  {
    name: '해율만두전골',
    address: '경기도 용인시 수지구 고기로173번길 5',
    phone: '031-261-8000',
  },
  {
    name: '곤드레밥집',
    address: '경기 용인시 수지구 고기로 114',
    phone: '031-264-3651',
  },
  {
    name: '정담명가 남원추어탕',
    address: '경기 용인시 수지구 고기로 129번길 12',
    phone: '031-265-3651',
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white/80">
      <div className="container-main py-14 md:py-16">
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
          해율푸드는 해율만두전골, 곤드레밥집, 정담명가 남원추어탕 세 개의 브랜드를 운영하며,
          각 지역의 자연과 재료가 담긴 건강한 한 끼를 정성껏 짓습니다.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.name}>
              <h3 className="font-heading text-sm font-semibold text-white mb-2">
                {store.name}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                <i className="ri-map-pin-line mr-2" />
                {store.address}
              </p>
              <p className="text-sm text-white/60 mt-1">
                <i className="ri-phone-line mr-2" />
                {store.phone}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 해율푸드. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
