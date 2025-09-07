
import { Camera, Monitor, Shield } from 'lucide-react';

const WhatsIncluded = () => {
  const features = [
    {
      icon: Camera,
      title: 'Product',
      description: 'High-quality camera equipment'
    },
    {
      icon: Monitor,
      title: 'Support',
      description: 'Professional technical support'
    },
    {
      icon: Shield,
      title: 'Best',
      description: 'Industry-leading warranty'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">What's included</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon size={28} className="sm:w-8 sm:h-8 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
