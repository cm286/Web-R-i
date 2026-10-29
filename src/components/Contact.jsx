import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo } from '../data/contact';

export default function Contact() {
  const scrollRef = useScrollAnimation();

  const infoItems = [
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      label: 'Người liên hệ',
      value: contactInfo.contactPerson,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Điện thoại',
      value: contactInfo.phone,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Địa chỉ',
      value: contactInfo.address,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Giờ mở cửa',
      value: contactInfo.hours,
    },
  ];

  // Only add email if it exists
  if (contactInfo.email) {
    infoItems.push({
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: contactInfo.email,
    });
  }

  const actionButtons = [
    {
      text: 'Gọi ngay',
      href: `tel:${contactInfo.phone.replace(/\./g, '')}`,
      bg: 'bg-amber-700 hover:bg-amber-800',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      text: 'Nhắn Zalo',
      href: contactInfo.zaloLink,
      bg: 'bg-blue-500 hover:bg-blue-600',
      target: '_blank',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.037 0 11.25c0 3.537 1.703 6.687 4.37 8.787v3.963l3.844-2.11A12.71 12.71 0 0012 22.5c6.627 0 12-5.037 12-11.25S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      text: 'Facebook',
      href: contactInfo.facebookLink,
      bg: 'bg-blue-600 hover:bg-blue-700',
      target: '_blank',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      text: 'Chỉ đường',
      href: contactInfo.mapLink,
      bg: 'bg-orange-600 hover:bg-orange-700',
      target: '_blank',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="lien-he" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={scrollRef}>
        <div className="scroll-hidden text-center mb-14">
          <h2 className="section-title">Liên Hệ Đặt Hàng</h2>
          <p className="section-subtitle">
            Vui lòng liên hệ để được tư vấn và đặt mua sản phẩm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="scroll-hidden-left stagger-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                {contactInfo.storeName}
              </h3>

              <div className="space-y-0">
                {infoItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-4 border-b border-stone-100 last:border-0"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-stone-700 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {actionButtons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.href}
                    target={btn.target || '_self'}
                    rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className={`${btn.bg} text-white flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm`}
                  >
                    {btn.icon}
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map or Placeholder */}
          <div className="scroll-hidden-right stagger-2">
            {contactInfo.mapEmbedUrl ? (
              <iframe
                src={contactInfo.mapEmbedUrl}
                className="w-full h-full min-h-[450px] rounded-2xl shadow-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ cửa hàng"
              />
            ) : (
              <div className="bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl p-8 h-full min-h-[450px] flex flex-col items-center justify-center shadow-lg">
                <div className="w-20 h-20 rounded-full bg-amber-200/50 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Bản đồ sẽ được cập nhật</h4>
                <p className="text-stone-500 text-center text-sm max-w-xs">
                  Vui lòng liên hệ để biết đường đến cửa hàng hoặc nhấn nút "Chỉ đường" bên trên.
                </p>
                <a
                  href={contactInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Mở Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
