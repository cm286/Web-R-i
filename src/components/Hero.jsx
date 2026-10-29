export default function Hero() {
  return (
    <section
      id="trang-chu"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 pt-16 md:pt-20"
      aria-label="Đặc Sản Rươi Quê"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing water wave pattern - bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: '200px' }}
        >
          <path
            className="animate-wave-1"
            fill="rgba(120, 53, 15, 0.3)"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            className="animate-wave-2"
            fill="rgba(120, 53, 15, 0.2)"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-amber-400/20 rounded-full animate-float-1" />
        <div className="absolute top-[25%] right-[15%] w-4 h-4 bg-orange-400/15 rounded-full animate-float-2" />
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-yellow-300/20 rounded-full animate-float-3" />
        <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-amber-300/15 rounded-full animate-float-1" />
        <div className="absolute top-[70%] left-[60%] w-2 h-2 bg-orange-300/20 rounded-full animate-float-2" />
        <div className="absolute top-[20%] left-[45%] w-3 h-3 bg-yellow-400/10 rounded-full animate-float-3" />
        <div className="absolute top-[50%] right-[10%] w-4 h-4 bg-amber-200/15 rounded-full animate-float-1" />
        <div className="absolute top-[80%] left-[35%] w-2 h-2 bg-orange-200/20 rounded-full animate-float-2" />

        {/* Decorative curved lines - river */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10" viewBox="0 0 600 800" fill="none">
          <path d="M300,0 Q450,200 350,400 Q250,600 400,800" stroke="rgba(251,191,36,0.4)" strokeWidth="2" fill="none" />
          <path d="M350,0 Q500,200 400,400 Q300,600 450,800" stroke="rgba(251,191,36,0.25)" strokeWidth="1.5" fill="none" />
          <path d="M250,0 Q400,200 300,400 Q200,600 350,800" stroke="rgba(251,191,36,0.3)" strokeWidth="1" fill="none" />
        </svg>

        {/* Large decorative circle - moon/tide */}
        <div className="absolute -top-20 -right-20 md:top-10 md:right-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-400/10 to-orange-600/5 blur-sm" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-400/10 to-amber-400/5 blur-sm" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="hero-animate inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span className="text-amber-200 text-sm font-medium">Mùa rươi Thái Bình đang vào vụ</span>
            </div>

            <h1 className="hero-animate-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Đặc Sản{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
                  Rươi Quê
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-400/20 rounded-full -skew-x-6" />
              </span>
            </h1>

            <p className="hero-animate-delay-2 mt-5 md:mt-6 text-base md:text-lg text-amber-100/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
              "Lộc trời" ban tặng từ những thửa ruộng phù sa vùng nước lợ Thái Bình. Rươi được thu hoạch tự nhiên
              theo mùa, chế biến thành những món ăn tinh hoa – chả rươi giòn rụm, rươi kho niêu đất, nem rươi thơm phức.
            </p>

            {/* Feature tags */}
            <div className="hero-animate-delay-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 text-amber-200/80 text-sm">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                100% tự nhiên
              </span>
              <span className="text-amber-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-amber-200/80 text-sm">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Thái Bình
              </span>
              <span className="text-amber-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-amber-200/80 text-sm">
                <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Mùa T9–T11 Âm Lịch
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-animate-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 md:mt-10">
              <a
                href="#lien-he"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Đặt Hàng Ngay
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#san-pham"
                className="inline-flex items-center gap-2 text-white/90 font-semibold px-8 py-4 rounded-full border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Xem Sản Phẩm
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-animate-delay-4 flex items-center justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-amber-400">450K+</p>
                <p className="text-xs text-amber-300/60 mt-1">VNĐ/kg rươi tươi</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-amber-400">5+</p>
                <p className="text-xs text-amber-300/60 mt-1">Món đặc sản</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-amber-400">100%</p>
                <p className="text-xs text-amber-300/60 mt-1">Tự nhiên</p>
              </div>
            </div>
          </div>

          {/* Right column - Decorative illustration */}
          <div className="hero-animate-delay-2 relative hidden lg:flex items-center justify-center">
            {/* Main decorative card */}
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl" />

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6">
                {/* Seasonal calendar */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-amber-400/20 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-lg">🌾</span>
                    <span className="text-amber-300 text-sm font-semibold">Lịch mùa rươi</span>
                  </div>
                  <p className="text-amber-100/80 text-sm italic">
                    "Tháng chín đôi mươi, tháng mười mồng năm"
                  </p>
                </div>

                {/* Season timeline */}
                <div className="space-y-3">
                  {[
                    { month: 'Tháng 9 Âm Lịch', status: 'Bắt đầu vụ', color: 'from-yellow-400 to-amber-500', width: '40%', icon: '🌱' },
                    { month: 'Tháng 10 Âm Lịch', status: 'Cao điểm', color: 'from-orange-400 to-red-500', width: '90%', icon: '🔥' },
                    { month: 'Tháng 11 Âm Lịch', status: 'Cuối vụ', color: 'from-amber-400 to-yellow-500', width: '55%', icon: '🍂' },
                  ].map((item) => (
                    <div key={item.month}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-white/80 flex items-center gap-1.5">
                          <span>{item.icon}</span>
                          {item.month}
                        </span>
                        <span className="text-amber-300/80 text-xs">{item.status}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Signature dishes */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: '🥘', name: 'Chả rươi', desc: 'Giòn rụm, béo ngậy' },
                    { emoji: '🍲', name: 'Rươi kho', desc: 'Niêu đất truyền thống' },
                    { emoji: '🥟', name: 'Nem rươi', desc: 'Thơm phức vỏ quýt' },
                    { emoji: '🫕', name: 'Canh rươi', desc: 'Măng chua thanh mát' },
                  ].map((dish) => (
                    <div
                      key={dish.name}
                      className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="text-2xl block mb-1">{dish.emoji}</span>
                      <p className="text-white text-sm font-semibold">{dish.name}</p>
                      <p className="text-amber-300/60 text-xs mt-0.5">{dish.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Origin badge */}
                <div className="flex items-center gap-3 bg-amber-900/30 rounded-xl p-4 border border-amber-600/20">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Vùng rươi Thái Bình</p>
                    <p className="text-amber-300/70 text-xs">Huyện Thái Thụy • Kiến Xương</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl px-4 py-2 shadow-lg shadow-amber-400/20 animate-float-2">
                <p className="text-xs font-bold">LỘC TRỜI</p>
                <p className="text-xs font-semibold opacity-70">Ban tặng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-amber-300/50 text-xs tracking-widest uppercase">Khám phá</span>
        <svg className="w-5 h-5 text-amber-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
