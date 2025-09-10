import { useState, useEffect, useRef } from "react";
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
  text: string;
  subtitle: string;
}

const Testimonials: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;

    const start = () => {
      intervalRef.current = setInterval(() => api.scrollNext(), 5000);
    };
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 mt-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
          Testimonials
        </h2>
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent className="gap-6">
            {Array.from({ length: Math.ceil(testimonialsData.length / 2) }).map((_, index) => {
              const start = index * 2;
              const items = testimonialsData.slice(start, start + 2);

              return (
                <CarouselItem key={index} className="basis-full">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {items.map((testimonial, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg shadow-sm p-6 flex-1 flex flex-col justify-between h-full"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 text-base">
                          {testimonial.text}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {testimonial.subtitle}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {testimonial.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white rounded-full p-2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white rounded-full p-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
