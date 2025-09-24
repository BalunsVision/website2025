import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import products from "@/data/featuredProducts.json";
import ContactModal from "@/components/ContactModal";

// Product types
interface ProductSection {
  title: string;
  description: string;
  features: string[];
}

interface ProductMedia {
  images: string[];
  videos: string[];
  htmlFiles: string[];
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  background?: string;
  media: ProductMedia;
  sections: ProductSection[];
}

// FeaturedProducts Component
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
                  <div className="flex-shrink-0 ">
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
                    <MediaCarousel product={product} />
                  </div>

                  {/* Text */}
                  <div className={`w-full lg:w-1/2 p-6 flex flex-col`}>
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
                        setClickType(product.title); // ✅ store the product title
                        setModalOpen(true);           // ✅ open the modal
                      }}
                      className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg"
                    >
                      GET IN TOUCH
                    </Button>

                    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} clickType="button"/>
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

/** Media Carousel */
function MediaCarousel({ product }: { product: Product }) {
  const slides: { type: "image" | "video" | "html"; src: string }[] = [];

  product.media.images?.forEach((src) => slides.push({ type: "image", src }));
  product.media.videos?.forEach((src) => slides.push({ type: "video", src }));
  product.media.htmlFiles?.forEach((src) => slides.push({ type: "html", src }));

  if (slides.length <= 1) {
    const only = slides[0] || { type: "image", src: "/placeholder.png" };
    return (
      <div className="flex items-center justify-center w-full h-[500px] bg-black rounded-xl overflow-hidden">
        {only.type === "image" && <img src={only.src} alt={product.title} className="w-full h-full " />}
        {only.type === "video" && <div className="w-full h-full rounded-lg overflow-hidden bg-black">
            <video
              src={only.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
            />
          </div>
        }
        {only.type === "html" && <iframe src={only.src} title={product.title} className="w-full h-full border-none" />}
      </div>
    );
  }

  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;

    const start = () => {
      stop();
      intervalRef.current = setInterval(() => api.scrollNext(), 3000);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    start();

    const root = api.rootNode();
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    return () => {
      stop();
      root.removeEventListener("mouseenter", stop);
      root.removeEventListener("mouseleave", start);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-[500px] relative group rounded-xl overflow-hidden">
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={i}>
            <div className="flex items-center justify-center w-full h-[500px] bg-black">
              {slide.type === "image" && <img src={slide.src} alt={`${product.title}-${i}`} className="w-full h-full" />}
              {slide.type === "video" && <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <video
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-fill"
                  />
                </div>
                }
              {slide.type === "html" && <iframe src={slide.src} title={`${product.title}-${i}`} className="w-full h-full border-none" />}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white/70 hover:bg-white rounded-full shadow-md" />
      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white/70 hover:bg-white rounded-full shadow-md" />
    </Carousel>
  );
}

