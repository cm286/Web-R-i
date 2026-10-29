export default function Hero() {
  return (
    <section
      id="trang-chu"
      className="bg-cream-50 pt-16 md:pt-20"
      aria-label="Đặc Sản Rươi Quê"
    >
      <h1 className="sr-only">
        Đặc Sản Rươi Quê – Tinh Hoa Ẩm Thực Đồng Bằng Bắc Bộ
      </h1>
      <a href="#lien-he" aria-label="Đặt hàng đặc sản rươi quê" className="block">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/ruoi-que-banner-mobile.jpg"
          />
          <img
            src="/images/ruoi-que-banner.png"
            alt="Đặc sản Rươi Quê: rươi tươi, chả rươi, nem rươi, rươi kho và các món ngon từ rươi"
            className="block h-auto w-full"
          />
        </picture>
      </a>
    </section>
  );
}
