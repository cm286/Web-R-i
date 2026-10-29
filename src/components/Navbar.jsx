import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Trang chủ', href: '#trang-chu' },
  { name: 'Giới thiệu', href: '#gioi-thieu' },
  { name: 'Sản phẩm', href: '#san-pham' },
  { name: 'Món ngon', href: '#mon-ngon' },
  { name: 'Liên hệ', href: '#lien-he' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-emerald-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#trang-chu" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-emerald-700' : 'bg-white/20'
              }`}
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17c2-4 4-7 7-9s5 1 7 5" strokeLinecap="round" />
                <path d="M3 20c2-3 3-6 6-8s5 1 7 4" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className={`text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-emerald-800' : 'text-white'
              }`}
            >
              Đặc Sản Rươi Quê
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-stone-600 hover:text-emerald-700 hover:bg-emerald-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-stone-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-6 py-4 text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200 border-b border-stone-50 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
