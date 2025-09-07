
import { Button } from '@/components/ui/button';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/uploads/a165616f-576e-4370-9d9e-0404a4959ee9.png"
                alt="Baluns Logo"
                className="h-12 sm:h-16 w-auto mr-4"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="text-orange-primary block">Equipment</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Discover our comprehensive range of industrial inspection systems and professional cameras designed for precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-primary hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                Explore Products
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/uploads/98354657-8bb2-454e-820c-d6168b4ba677.png"
              alt="Industrial Equipment"
              className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
