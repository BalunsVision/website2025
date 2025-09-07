
import { Button } from '@/components/ui/button';

const SupportSection = () => {
  return (
    <section className="py-0 mt-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-orange-primary text-white p-8 sm:p-12 lg:p-16 xl:p-20 relative rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Got a question? We are here to help
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed">
                Get help for any issue. Ask your professional questions, get guidance to
                launch successfully now. Get our help easily.
              </p>
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full border-2 border-orange-primary"></div>
                  ))}
                </div>
              </div>
              <Button className="bg-white text-orange-primary hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-md font-semibold text-sm sm:text-base">
                Contact
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-sm lg:max-w-none">
                <img
                  src="/uploads/pexels-abhishek-saini-1415858-2929411.jpg"
                  alt="Professional Camera"
                  className="w-96 h-80 object-cover rounded-lg"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
