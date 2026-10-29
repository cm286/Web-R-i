import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { dishes } from '../data/dishes';

function DishCard({ dish }) {
  const [imgError, setImgError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const showPlaceholder = !dish.image || imgError;

  return (
    <div className="product-card bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {showPlaceholder ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${dish.gradient} flex items-center justify-center`}
          >
            <span className="text-6xl">{dish.emoji}</span>
          </div>
        ) : (
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800">{dish.name}</h3>
        <p className="text-stone-600 text-sm mt-2 leading-relaxed">
          {dish.description}
        </p>

        {/* Toggle Detail */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-emerald-700 font-medium hover:text-emerald-800 transition-colors duration-200 text-sm"
        >
          {isExpanded ? 'Thu gọn' : 'Tìm hiểu thêm'}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Detail (collapsible) */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-4 bg-emerald-50/50 rounded-xl">
            <p className="text-stone-500 text-sm leading-relaxed">
              {dish.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dishes() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="mon-ngon" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={scrollRef}>
        <div className="scroll-hidden text-center mb-14">
          <h2 className="section-title">Các Món Ngon Từ Rươi</h2>
          <p className="section-subtitle">
            Khám phá những món ăn truyền thống chế biến từ rươi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`scroll-hidden stagger-${index + 1}`}
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
