import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import products from "@/data/featuredProducts.json";
import ContactModal from "@/components/ContactModal";
import { Product } from "@/types"; // optional, your types file

// Lazy load MediaCarousel
const MediaCarousel = lazy(() => import("./MediaCarousel"));

export default function FeaturedProducts() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [clickType, setClickType] = useState("");

  return (
    <div>
      {/* Product Cards */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:justify-items-center">
            {products.map((product: Product, index: number) => {
              const isOrange = index % 2 === 0;
              const isLast = index === products.length - 1 && products.length % 2 !== 0;

              return (
                <div
                  key={product.id}
                  className={`${isOrange ? "bg-orange-primary text-white" : "bg-white text-gray-900 border border-gray-200"}
                    p-6 h-auto flex items-center gap-6 overflow-hidden group hover:shadow-lg transition-shadow duration-300 
                    ${isLast ? "sm:col-span-2 sm:w-1/2" : "w-full"}`}
                >
                  <div className="flex-shrink-0 rounded-2xl">
                    <img
                      src={product.media.images?.[0] || "/placeholder.png"}
                      alt={product.title}
                      className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col justify-start flex-grow gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-1">{product.title}</h3>
                      <p className={`text-xs sm:text-sm line-clamp-2 ${isOrange ? "opacity-90" : "text-gray-600"}`}>
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="self-end">
                      <Button
                        className="px-4 py-2 text-xs sm:text-sm font-semibold bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                        onClick={() => scrollToSection(product.id)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {products.map((product: Product, index: number) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={product.id}
            ref={(el: HTMLDivElement | null) => (sectionRefs.current[product.id] = el)}
            className="py-8 sm:py-10 lg:py-12"
          >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
              <div
                className="relative text-white rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${product.background || product.media.images[0] || ""})` }}
              >
                <div className={`flex flex-col lg:flex-row min-h-[500px] items-stretch ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Media */}
                  <div className={`w-full lg:w-1/2 flex items-center justify-center p-5 sm:p-6 lg:p-8 h-full`}>
                    <Suspense fallback={<div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">Loading...</div>}>
                      <MediaCarousel product={product} />
                    </Suspense>
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2 p-6 flex flex-col">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 opacity-90 leading-relaxed">
                      {product.subtitle}
                    </p>

                    {product.sections.map((section, sIdx) => (
                      <div key={sIdx} className="mb-4">
                        <h3 className="text-sm sm:text-base font-bold mb-1 text-orange-primary">{section.title}</h3>
                        <p className="text-xs sm:text-sm opacity-90 mb-2">{section.description}</p>
                        {section.features?.length > 0 && (
                          <ul className="space-y-1">
                            {section.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center text-xs sm:text-sm">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    <Button
                      onClick={() => {
                        setClickType(product.title); // store the product title
                        setModalOpen(true);           // open the modal
                      }}
                      className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg"
                    >
                      GET IN TOUCH
                    </Button>

                    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} clickType={clickType}/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
