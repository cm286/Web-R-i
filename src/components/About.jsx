import { useScrollAnimation } from '../hooks/useScrollAnimation';

const infoCards = [
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Đặc sản theo mùa',
    text: 'Rươi là loại sinh vật sống ở vùng bãi bồi ven sông, xuất hiện theo mùa, thường vào khoảng tháng 9–11 âm lịch. Rươi được thu hoạch tự nhiên và là nguyên liệu quý trong ẩm thực miền Bắc.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Giá trị ẩm thực',
    text: 'Rươi được sử dụng để chế biến nhiều món ăn truyền thống như chả rươi, rươi kho, nem rươi. Hương vị đặc trưng, khó tìm thấy ở bất kỳ nguyên liệu nào khác.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bảo quản rươi tươi',
    text: 'Rươi tươi nên được chế biến sớm sau khi mua. Có thể bảo quản trong ngăn mát tủ lạnh 1–2 ngày hoặc cấp đông để sử dụng lâu hơn.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Lưu ý khi chế biến',
    text: 'Rươi tươi cần được rửa nhẹ nhàng, loại bỏ tạp chất. Không rửa quá mạnh để tránh làm nát rươi. Nên kết hợp với thì là, vỏ quýt để tăng hương vị.',
  },
];

export default function About() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="gioi-thieu" className="pt-10 pb-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={scrollRef}>
        <div className="scroll-hidden text-center mb-16">
          <h2 className="section-title">Giới Thiệu Về Rươi</h2>
          <p className="section-subtitle">
            Khám phá đặc sản thiên nhiên quý giá từ đồng bằng Bắc Bộ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className={`scroll-hidden-left stagger-${index + 1} flex items-start gap-4 p-5 rounded-2xl hover:bg-emerald-50/50 transition-colors duration-300`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 text-lg">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 mt-1 leading-relaxed text-sm">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Decorative */}
          <div className="scroll-hidden-right stagger-2 space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-200/30 rounded-full" />
              <div className="absolute bottom-8 left-8 w-14 h-14 bg-teal-200/30 rounded-full" />
              <span className="text-8xl mb-4">🦐</span>
              <h3 className="text-xl font-bold text-emerald-800 text-center">
                Rươi – Đặc Sản Mùa Thu
              </h3>
              <p className="text-emerald-600 text-center mt-2 text-sm">
                Nguyên liệu quý từ thiên nhiên đồng bằng Bắc Bộ
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-stone-800">Bạn có biết?</h4>
                  <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                    Rươi thường xuất hiện vào những ngày cuối tháng âm lịch, khi thủy triều lên cao. Người dân vùng đồng bằng Bắc Bộ có truyền thống đánh bắt rươi từ nhiều đời nay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
