
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProductRecommendations = () => {
  const products = [
    {
      name: 'Canon EOS 90D',
      price: '$1,299.00',
      rating: 4.8,
      image: '/uploads/12e7accf-220c-41e9-ba72-034f8319a5a7.png'
    },
    {
      name: 'Sony α7 Mirrorless Camera',
      price: '$1,998.00',
      rating: 4.9,
      image: '/uploads/2bdbe060-0376-4181-a227-cdd1824f0f93.png'
    },
    {
      name: 'Sony α7R Mirrorless',
      price: '$3,198.00',
      rating: 4.9,
      image: '/uploads/5ade3547-8cdb-4d0d-b108-eadf224a77b1.png'
    },
    {
      name: 'Canon EOS 5D0',
      price: '$2,799.00',
      rating: 4.7,
      image: '/uploads/pexels-abhishek-saini-1415858-2929411.jpg'
    },
    {
      name: 'Canon EOS R5',
      price: '$3,899.00',
      rating: 4.9,
      image: '/uploads/pexels-ajlobo-1205022.jpg'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">You may also like</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="group cursor-pointer">
                  <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`sm:w-4 sm:h-4 ${i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                      <span className="ml-2 text-xs sm:text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{product.price}</p>
                  <Button className="w-full bg-orange-primary hover:bg-orange-secondary text-white text-sm sm:text-base py-2 sm:py-3">
                    Add to Cart
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductRecommendations;
