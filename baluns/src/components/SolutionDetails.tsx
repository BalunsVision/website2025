import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import rawData from "@/data/solution_details.json";
import solutionCategories from "@/data/solution_categories.json";

// --- Slide type ---
interface Slide {
  title: string;
  description: string;
  features: string[];
  media: {
    images: string[];
    videos: string[];
    htmlFiles: string[];
  };
  background?: string;
  globalIndex?: number;
}

interface SectionProps {
  id: string;
  slides: Slide[];
  isActive?: boolean;
}

// --- Dynamically generate sections ---
const solutionSections = solutionCategories
  .map((category) => {
    const slidesKey = Object.keys(rawData).find((key) => {
      const normalizedId = category.sectionId.toLowerCase().replace(/-/g, "");
      const normalizedKey = key.toLowerCase().replace(/slides$/, "");
      return (
        normalizedKey.includes(normalizedId) ||
        normalizedId.includes(normalizedKey)
      );
    });

    if (!slidesKey) return null;

    return {
      id: category.sectionId,
      slides: (rawData as any)[slidesKey] as Slide[],
    };
  })
  .filter(Boolean);

// --- Inner carousel for multiple media items ---
const InnerAutoCarousel: React.FC<{ sources: { type: string; src: string }[]; title: string }> = ({ sources, title }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);

    const start = () => (intervalRef.current = setInterval(() => api.scrollNext(), 3000));
    const stop = () => clearInterval(intervalRef.current);

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
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="w-full h-full relative group overflow-hidden rounded-lg"
    >
      <CarouselContent className="h-full">
        {sources.map(({ type, src }, i) => (
          <CarouselItem key={i} className="h-full">
            <div className="flex items-center justify-center w-full h-full">
              {type === "image" && <img src={src} alt={title} className="w-full h-[500px] rounded-lg" />}
              {type === "video" && (
                <div className="w-full h-[500px] rounded-lg overflow-hidden bg-black">
                  <video src={src} className="w-full h-full object-fill" autoPlay muted loop playsInline />
                </div>
              )}
              {type === "html" && <iframe src={src} title={`${title}-${i}`} className="w-full h-[500px] rounded-lg border-none" />}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {count > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 bg-white/30 backdrop-blur-sm text-gray-800 shadow-md rounded-md p-1 hover:bg-white/50 hover:scale-110" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 bg-white/30 backdrop-blur-sm text-gray-800 shadow-md rounded-md p-1 hover:bg-white/50 hover:scale-110" />
        </>
      )}
    </Carousel>
  );
};

// --- Lazy load the InnerAutoCarousel ---
const LazyInnerCarousel = lazy(() => Promise.resolve({ default: InnerAutoCarousel }));

// --- Render media helper ---
function renderMedia(slide: Slide) {
  const sources = [
    ...slide.media.images.map((src) => ({ type: "image", src })),
    ...slide.media.videos.map((src) => ({ type: "video", src })),
    ...slide.media.htmlFiles.map((src) => ({ type: "html", src })),
  ];

  if (sources.length > 1) {
    return (
      <Suspense fallback={<div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">Loading...</div>}>
        <LazyInnerCarousel sources={sources} title={slide.title} />
      </Suspense>
    );
  }

  if (sources.length === 1) {
    const { type, src } = sources[0];
    if (type === "image") return <img src={src} alt={slide.title} className="w-full h-[500px] rounded-lg" />;
    if (type === "video")
      return (
        <div className="w-full h-[500px] rounded-lg overflow-hidden bg-black">
          <video src={src} className="w-full h-full object-fill" autoPlay muted loop playsInline />
        </div>
      );
    return <iframe src={src} title={slide.title} className="w-full h-[500px] rounded-lg border-none" />;
  }

  return <div className="flex items-center justify-center w-full h-full text-gray-700">No media available</div>;
}

// --- Section component ---
const SliderSection: React.FC<SectionProps> = ({ id, slides, isActive }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickType, setClickType] = useState("");

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
  }, [api]);

  return (
    <section id={id} className="pt-6 sm:pt-8 lg:pt-8 pb-0 transition-all duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div
          className="relative group rounded-lg transition-all duration-300"
          style={{
            border: isActive ? "2px solid #ff5e15" : "2px solid transparent",
            boxShadow: isActive ? "0 8px 30px rgba(0,0,0,0.4)" : "none",
            padding: "5px",
            borderRadius: "12px",
            transition: "all 0.4s ease",
          }}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: slides.length > 1, watchDrag: slides.length > 1, containScroll: "trimSnaps" }}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide) => {
                const isEven = (slide.globalIndex ?? 0) % 2 === 0;
                return (
                  <CarouselItem key={slide.globalIndex}>
                    <div
                      className="relative text-white rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.background || slide.media.images[0] || ""})` }}
                    >
                      <div className={`flex flex-col lg:flex-row min-h-[650px] items-stretch ${isEven ? "" : "lg:flex-row-reverse"}`}>
                        {/* Media */}
                        <div className={`w-full lg:w-1/2 flex items-stretch justify-center p-6 sm:p-8 h-full mt-10 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                          <div className="w-full h-full flex items-center justify-center">{renderMedia(slide)}</div>
                        </div>

                        {/* Text */}
                        <div className={`w-full lg:w-1/2 p-6 sm:p-8 xl:p-16 flex flex-col ${isEven ? "lg:pl-12" : "lg:pr-12"}`}>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-orange-primary leading-tight">{slide.title}</h2>
                          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 opacity-90 leading-relaxed">{slide.description}</p>
                          <div className="space-y-2 mb-6 sm:mb-10">
                            {slide.features.map((f, i) => (
                              <div key={i} className="flex items-center text-sm sm:text-base">
                                <span className="w-2 h-2 bg-orange-primary rounded-full mr-3"></span>
                                {f}
                              </div>
                            ))}
                          </div>

                          <Button
                            onClick={() => {
                              setClickType(slide.title);
                              setIsModalOpen(true);
                            }}
                            className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg"
                          >
                            GET IN TOUCH
                          </Button>

                          <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} clickType={clickType} />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {count > 1 && (
              <>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// --- Main component ---
export default function SolutionDetails() {
  let globalCounter = 0;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current: string | null = null;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) current = sec.id;
      });

      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div>
      {solutionSections.map((section) => {
        const slidesWithIndex = section.slides.map((slide) => ({
          ...slide,
          globalIndex: globalCounter++,
        }));
        return <SliderSection key={section.id} id={section.id} slides={slidesWithIndex} isActive={activeSection === section.id} />;
      })}
    </div>
  );
}
