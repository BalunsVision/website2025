import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeatureTeasers = () => {
  const features = [
    {
      title: "Product Suite",
      description: "Industrial cameras and vision systems designed for precision and reliability across diverse industrial applications.",
      image: "/uploads/98354657-8bb2-454e-820c-d6168b4ba677.png",
      link: "/products"
    },
    {
      title: "Solutions Projects", 
      description: "Custom AI-powered vision solutions for Printing, Packaging, Pharmaceutical, Automotive, Food Processing, and Textiles.",
      image: "/uploads/5ade3547-8cdb-4d0d-b108-eadf224a77b1.png",
      link: "/solutions"
    },
    {
      title: "Shop",
      description: "Browse our complete range of machine vision products and accessories for your industrial automation needs.",
      image: "/uploads/2bdbe060-0376-4181-a227-cdd1824f0f93.png", 
      link: "/products"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering precision-driven applications using Industrial Cameras with deep expertise in image processing, artificial intelligence, and GPU-optimized computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = feature.link}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTeasers;