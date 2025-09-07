import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import heroDataRaw from "@/data/hero.json";

interface HeroMedia {
  images: string[];
  videos: string[];
  htmlFiles: string[];
}

interface HeroContent {
  subtitle: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    link: string;
    variant?: "primary" | "outline";
  }[];
  media: HeroMedia;
}

const heroData: HeroContent[] = heroDataRaw as HeroContent[];

// --- Render a single media item ---
const renderSingle = (type: string, src: string, title: string, idx?: number) => {
  if (type === "image")
    return <img src={src} alt={title} className="w-full h-96  rounded-xl" />;
  if (type === "video")
    return <div className="w-full h-96 rounded-xl overflow-hidden bg-black">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-fill"
          />
        </div>
        ;
  return <iframe src={src} title={`${title}-${idx ?? 0}`} className="w-full h-96 rounded-xl border-none" />;
};

// --- Inner carousel for media ---
const InnerAutoCarousel: React.FC<{ sources: { type: string; src: string }[]; title: string }> = ({ sources, title }) => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;
    const start = () => (intervalRef.current = setInterval(() => api.scrollNext(), 5000));
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
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full relative group rounded-xl overflow-hidden">
      <CarouselContent>
        {sources.map(({ type, src }, i) => (
          <CarouselItem key={i}>
            <div className="flex items-center justify-center w-full h-full">
              {renderSingle(type, src, title, i)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {sources.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </>
      )}
    </Carousel>
  );
};

// --- Render media for a hero slide ---
const renderMedia = (hero: HeroContent) => {
  const sources = [
    ...hero.media.images.map((src) => ({ type: "image", src })),
    ...hero.media.videos.map((src) => ({ type: "video", src })),
    ...hero.media.htmlFiles.map((src) => ({ type: "html", src })),
  ];

  if (sources.length > 1) return <InnerAutoCarousel sources={sources} title={hero.title} />;
  if (sources.length === 1) return renderSingle(sources[0].type, sources[0].src, hero.title);
  return <div className="text-gray-700">No media available</div>;
};

// --- Hero Section Carousel ---
const HeroSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;
    const start = () => (intervalRef.current = setInterval(() => api.scrollNext(), 7000));
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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 relative">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {heroData.map((hero, idx) => (
              <CarouselItem key={idx} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                  {/* Text */}
                  <div className="order-2 lg:order-1">
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 uppercase tracking-wide">{hero.subtitle}</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">{hero.title}</h1>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{hero.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {hero.buttons.map((btn, i) => {
                        const variant = btn.variant ?? "primary";
                        return (
                          <Link key={i} to={btn.link}>
                            <Button
                              className={`px-6 sm:px-8 py-3 rounded-md font-semibold text-sm sm:text-base ${
                                variant === "outline"
                                  ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
                                  : "bg-orange-primary hover:bg-orange-secondary text-white"
                              }`}
                            >
                              {btn.text}
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Media */}
                  <div className="order-1 lg:order-2 relative">{renderMedia(hero)}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
