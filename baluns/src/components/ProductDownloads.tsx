import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import resources from "@/data/productDownloads.json"; // ✅ Import the JSON data

const ProductDownloads = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="border-b-4 border-orange-primary pb-2">
              DOWNLOAD
            </span>
          </h2>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group h-full cursor-pointer">
              <div className="grid grid-cols-2 h-full rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-300">
                {/* Left - Image */}
                <div className="bg-white flex items-center justify-center p-6">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-40 object-contain"
                  />
                </div>

                {/* Right - Text */}
                <div className="bg-slate-700 p-6 flex flex-col justify-between text-white">
                  <div>
                    <p className="text-xs mb-3 opacity-70">
                      Vision for Imagination
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug whitespace-pre-line">
                      {resource.subtitle}
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/20 justify-start p-0 h-auto mt-4"
                  >
                    Download
                    <Download className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-right mt-8">
          <Button
            variant="link"
            className="text-orange-primary hover:text-orange-600 text-lg font-semibold"
          >
            More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDownloads;
