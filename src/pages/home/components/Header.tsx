export default function Header() {
  return (
    <header className="pt-6 pb-4 md:pt-8 md:pb-6 bg-background-50">
      <div className="container-main text-center">
        <p className="section-label">HAEYUL FOOD</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <img
            src="https://storage.readdy-site.link/project_files/0e6e3994-96df-4b84-bc53-47c91305057c/a838545d-fc8a-4779-b370-a1aadde11ab5_compressed_unnamed.webp"
            alt="해율푸드 로고"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground-950">
            해율푸드
          </h1>
        </div>
        <p className="mt-3 text-lg md:text-xl text-foreground-700 font-light">
          자연이 차린 세 개의 밥상, 해율푸드
        </p>
      </div>
    </header>
  );
}
