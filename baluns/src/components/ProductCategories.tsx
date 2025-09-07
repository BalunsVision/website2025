
import { Camera, Cog, Zap, Shield } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      icon: Cog,
      title: 'Industrial Equipment',
      description: 'Advanced inspection systems for manufacturing',
      bgColor: 'bg-orange-primary',
      textColor: 'text-white'
    },
    {
      icon: Camera,
      title: 'Professional Cameras',
      description: 'High-quality imaging solutions',
      bgColor: 'bg-gray-600',
      textColor: 'text-white'
    },
    {
      icon: Zap,
      title: 'Automation Systems',
      description: 'Smart automated inspection solutions',
      bgColor: 'bg-orange-primary',
      textColor: 'text-white'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Precision measurement and validation',
      bgColor: 'bg-gray-600',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of professional equipment designed for various industries
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} ${category.textColor} p-6 sm:p-8 rounded-lg h-48 sm:h-56 cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <category.icon size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
