import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "@/data/productGrid.json";

const ProductHero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Main Slider */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {products.map((product, index) => (
          <div
            key={product.id}
            onClick={() => navigate(`/shop/${product.slug}`)}
            className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[80%] max-w-[80%] object-contain drop-shadow-2xl"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-3 rounded-lg">
                <h2 className="text-white text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductHero;
