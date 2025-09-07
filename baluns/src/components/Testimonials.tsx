import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import testimonialsData from "../data/testimonials.json";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  subtitle: string;
  media: {
    images: string[];
    videos: string[];
    htmlFiles: string[];
  };
}

// --- Render single media item ---
function renderSingle(type: string, src: string, title: string, idx?: number) {
  if (type === "image") {
    return <img src={src} alt={title} className=" w-full h-48 rounded-lg" />;
  }
  if (type === "video") {
    return (
        <div className="w-full h-48 rounded-lg overflow-hidden bg-black">
          <video
            src={src}
            className="w-full h-full object-fill"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      );

  }
  return <iframe src={src} title={`${title}-${idx ?? 0}`} className="w-full h-48 border-none rounded-lg" />;
}

// --- Inner carousel for multiple media items ---
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
    <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full relative group rounded-lg overflow-hidden">
      <CarouselContent className="h-full">
        {sources.map(({ type, src }, i) => (
          <CarouselItem key={i} className="h-full">
            <div className="flex items-center justify-center w-full h-full">{renderSingle(type, src, title, i)}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {sources.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/40 text-white rounded-full p-2" />
        </>
      )}
    </Carousel>
  );
};

// --- Render media for a testimonial ---
function renderMedia(testimonial: Testimonial) {
  const sources = [
    ...testimonial.media.images.map((src) => ({ type: "image", src })),
    ...testimonial.media.videos.map((src) => ({ type: "video", src })),
    ...testimonial.media.htmlFiles.map((src) => ({ type: "html", src })),
  ];

  if (sources.length > 1) return <InnerAutoCarousel sources={sources} title={testimonial.name} />;
  if (sources.length === 1) return renderSingle(sources[0].type, sources[0].src, testimonial.name);
  return <div className="text-gray-700">No media available</div>;
}

// --- Testimonials Section ---
const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 mt-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-start">
              {/* Left media */}
              <div className="w-full sm:w-1/3 mr-0 sm:mr-6 mb-4 sm:mb-0">{renderMedia(testimonial)}</div>

              {/* Right content */}
              <div className="flex-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{testimonial.text}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">{testimonial.subtitle}</p>
                <p className="text-xs sm:text-sm font-medium text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
