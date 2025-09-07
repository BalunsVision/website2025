import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import missionData from "@/data/companyMission.json";

// --- Slide type for missionData ---
interface MissionSlide {
  title: string;
  description: string;
  media: {
    images: string[];
    videos: string[];
    htmlFiles: string[];
  };
  bg: string;
  gradient: string;
  reverse?: boolean;
}

// --- Render single media item ---
function renderSingle(type: string, src: string, title: string, idx?: number) {
  if (type === "image") {
    return (
      <img
        src={src}
        alt={title}
        className=" w-full h-96 rounded-xl"
      />
    );
  }
  if (type === "video") {
    return (
      <div className="w-full h-96 rounded-xl overflow-hidden bg-black">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-fill"
        />
      </div>

    );
  }
  return (
    <iframe
      src={src}
      title={`${title}-${idx ?? 0}`}
      className="w-full h-96 border-none rounded-xl"
    />
  );
}

// --- Inner carousel for multiple media ---
const InnerAutoCarousel: React.FC<{ sources: { type: string; src: string }[]; title: string }> = ({ sources, title }) => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;
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
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full relative group rounded-xl overflow-hidden">
      <CarouselContent className="h-full">
        {sources.map(({ type, src }, i) => (
          <CarouselItem key={i} className="h-full">
            <div className="flex items-center justify-center w-full h-full">
              {renderSingle(type, src, title, i)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {sources.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
        </>
      )}
    </Carousel>
  );
};

// --- Render media for a slide ---
function renderMedia(slide: MissionSlide) {
  const sources = [
    ...slide.media.images.map((src) => ({ type: "image", src })),
    ...slide.media.videos.map((src) => ({ type: "video", src })),
    ...slide.media.htmlFiles.map((src) => ({ type: "html", src })),
  ];

  if (sources.length > 1) return <InnerAutoCarousel sources={sources} title={slide.title} />;
  if (sources.length === 1) return renderSingle(sources[0].type, sources[0].src, slide.title);
  return <div className="text-gray-700">No media available</div>;
}

// --- CompanyMission Section ---
const CompanyMission: React.FC = () => {
  return (
    <>
      {missionData.map((slide: MissionSlide, index: number) => (
        <section key={index} className={`py-12 sm:py-16 lg:py-20 ${slide.bg}`}>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text */}
              <div className={`${slide.reverse ? "order-1 lg:order-2" : ""}`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{slide.title}</h2>
                <p className="text-lg text-gray-700">{slide.description}</p>
              </div>

              {/* Media */}
              <div className={`relative ${slide.reverse ? "order-2 lg:order-1" : ""}`}>
                {renderMedia(slide)}
                <div className={`absolute inset-0 bg-gradient-to-tr ${slide.gradient} rounded-xl pointer-events-none`}></div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CompanyMission;
