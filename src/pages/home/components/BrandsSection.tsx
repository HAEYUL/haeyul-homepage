import { Link } from 'react-router-dom';

const brands = [
  {
    name: '해율만두전골',
    slogan: '자연의 흐름을 맛으로 전하다',
    description: '상황버섯 육수와 손빚은 굴림만두, 프리미엄 자연 전골',
    image:
      'https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/8438d1d0-7f9f-45dd-b2b2-becc07245f41_compressed_2.webp',
    href: '/haeyul',
  },
  {
    name: '곤드레밥집',
    slogan: '밥 한 그릇에 마음을 담다',
    description: '자연을 담은 건강한 곤드레 밥상',
    image: '/images/gondre/hero.png',
    href: '/gondre',
  },
  {
    name: '정담명가 남원추어탕',
    slogan: '탕 맛 좋다',
    description: '정성으로 오래 끓인 깊고 진한 보양 추어탕',
    image: '/images/chueotang/hero.jpg',
    href: '/chueotang',
  },
];

export default function BrandsSection() {
  return (
    <section className="py-6 md:py-8 bg-background-100">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-background-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-5">
                <h2 className="font-heading text-lg font-semibold text-foreground-950">
                  {brand.name}
                </h2>
                <p className="mt-1 text-sm text-accent-600 font-medium">
                  {brand.slogan}
                </p>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                  {brand.description}
                </p>
                <Link
                  to={brand.href}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-medium rounded-md hover:bg-primary-600 transition-colors no-underline"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
