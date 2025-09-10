import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import logosData from "@/data/clientLogos.json";

interface Logo {
  name: string;
  image?: string;
}

const ClientLogos: React.FC = () => {
  const logos: Logo[] = logosData;

  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!api) return;

    const start = () =>
      (intervalRef.current = setInterval(() => api.scrollNext(), 2500)); // every 2.5s
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Clients
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/5" // 5 logos per slide
                >
                  <div className="flex items-center justify-center h-32 sm:h-40 p-2">
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="max-h-full w-auto object-contain rounded-lg shadow-sm"
                      />
                    ) : (
                      <div className="text-gray-400 font-bold text-base sm:text-lg rounded-lg border p-4">
                        {logo.name}
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Buttons */}
            <div className="absolute top-35 right-0 flex gap-2 sm:gap-3 pr-2 sm:pr-4 pt-1 sm:pt-2 z-10">
              <CarouselPrevious className="!relative !static bg-white border border-gray-300 hover:bg-gray-100" />
              <CarouselNext className="!relative !static bg-white border border-gray-300 hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
