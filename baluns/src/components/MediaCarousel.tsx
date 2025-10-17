// MediaCarousel.tsx
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Product } from "@/types"; // optional, you can create a types file

export default function MediaCarousel({ product }: { product: Product }) {
  const slides: { type: "image" | "video" | "html"; src: string }[] = [];

  product.media.images?.forEach((src) => slides.push({ type: "image", src }));
  product.media.videos?.forEach((src) => slides.push({ type: "video", src }));
  product.media.htmlFiles?.forEach((src) => slides.push({ type: "html", src }));

  if (slides.length <= 1) {
    const only = slides[0] || { type: "image", src: "/placeholder.png" };
    return (
      <div className="flex items-center justify-center w-full h-[500px] bg-black rounded-xl overflow-hidden">
        {only.type === "image" && <img src={only.src} alt={product.title} className="w-full h-full" />}
        {only.type === "video" && (
          <div className="w-full h-full rounded-lg overflow-hidden bg-black">
            <video
              src={only.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
            />
          </div>
        )}
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
              {slide.type === "video" && (
                <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <video
                    src={slide.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-fill"
                  />
                </div>
              )}
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
