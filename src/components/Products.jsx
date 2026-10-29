import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  const showPlaceholder = !product.image || imgError;

  return (
    <div className="product-card bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {showPlaceholder ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
          >
            <span className="text-6xl">{product.emoji}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800">{product.name}</h3>
        <p className="text-stone-600 text-sm mt-2 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-1">
          {product.price === 'Liên hệ báo giá' ? (
            <span className="text-amber-700 font-semibold italic">
              Liên hệ báo giá
            </span>
          ) : (
            <>
              <span className="text-2xl font-bold text-amber-700">
                {product.price}
              </span>
              {product.unit && (
                <span className="text-sm text-stone-500">{product.unit}</span>
              )}
            </>
          )}
        </div>

        {/* CTA */}
        <a
          href="#lien-he"
          className="mt-5 block w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 rounded-xl transition-all duration-300 text-center hover:shadow-lg"
        >
          Liên hệ đặt mua
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const scrollRef = useScrollAnimation();

  return (
    <section
      id="san-pham"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-cream-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={scrollRef}>
        <div className="scroll-hidden text-center mb-14">
          <h2 className="section-title">Sản Phẩm Rươi</h2>
          <p className="section-subtitle">
            Đa dạng sản phẩm rươi tươi và chế biến sẵn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`scroll-hidden stagger-${index + 1}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
