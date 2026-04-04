import { Phone, Mail } from 'lucide-react';

const ShopContact = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            A global product and solution supplier specialized in machine vision and mobile robot
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="group space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 text-orange-primary group-hover:scale-110 transition-transform">
              <Phone size={24} />
              <h3 className="font-semibold text-lg">Contact</h3>
            </div>
            <p className="text-base text-gray-300">+86-0571-88967998</p>
          </div>

          <div className="group space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 text-orange-primary group-hover:scale-110 transition-transform">
              <Mail size={24} />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-base text-gray-300">info@hikrobotics.com</p>
          </div>

          <div className="group space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 text-orange-primary group-hover:scale-110 transition-transform">
              <Phone size={24} />
              <h3 className="font-semibold text-lg">Tech Support</h3>
            </div>
            <p className="text-base text-gray-300">400-989-7998</p>
          </div>

          <div className="group space-y-3 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 text-orange-primary group-hover:scale-110 transition-transform">
              <Mail size={24} />
              <h3 className="font-semibold text-lg">Tech Email</h3>
            </div>
            <p className="text-base text-gray-300">global.support@hikrobotics.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContact;
