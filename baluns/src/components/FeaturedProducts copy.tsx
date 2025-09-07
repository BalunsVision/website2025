import { useRef } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "mould-tool",
    title: "Mould Tool Inspection System",
    subtitle: "Ensuring each mold meets precise quality standards.",
    image: "/uploads/0eed7a71-f82c-40b0-911d-92fd1348e080.png",
    video: "/uploads/Video_Edited_Link_Provided.mp4",
    sections: [
      {
        title: "Precision Mould Checking",
        description:
          "Ensures each mould is manufactured to exact specifications, reducing defects in final products.",
        features: [],
      },
    ],
  },
  {
    id: "advanced-pct",
    title: "Advanced PCT Inspection System",
    subtitle:
      "A next-generation solution for ultra-fast and accurate PCT Inspection engineered for speed, precision, and reliability in cigarette manufacturing.",
    image: "/uploads/0eed7a71-f82c-40b0-911d-92fd1348e080.png",
    video: "/uploads/1 3d conveyor.mp4",
    sections: [
      {
        title: "Custom Algorithm for Defect Detection",
        description:
          "Proprietary image processing algorithms ensure accurate inspection even at maximum speed. Following defects can be identified:",
        features: ["Wander", "Skewness", "Width Check", "Torn PCT", "Flagging"],
      },
      {
        title: "Ultra High Speed Performance",
        description:
          "Inspects up to 12,000 units per minute in production, with lab-tested capability reaching 18,000 units/minute.",
        features: [],
      },
      {
        title: "Versatile PCT Type Support",
        description: "Supports multiple types of PCT for reliable results.",
        features: ["White on White", "Brown on White", "Black on White"],
      },
      {
        title: "Easy to Configure",
        description: "Configure under 5 minutes with minimal setup.",
        features: [],
      },
      {
        title: "Universal Mounting System",
        description: "Flexible integration with existing production lines.",
        features: [],
      },
      {
        title: "Interactive Real-Time GUI",
        description:
          "Modify inspection settings and parameters with an intuitive user interface.",
        features: [],
      },
      {
        title: "NG Image Logging",
        description:
          "Logs defective images for up to 3 months for review and quality control.",
        features: [],
      },
      {
        title: "SAP Integration Ready",
        description:
          "Seamless data exchange and production analytics for manufacturing.",
        features: [],
      },
      {
        title: "Beckhoff Industrial IPC",
        description:
          "Rugged and reliable industrial-grade hardware for 24/7 operation.",
        features: [],
      },
    ],
  },
  {
    id: "wet-capsule",
    title: "Online Wet Capsule Inspection System",
    subtitle:
      "Advanced vision-based inspection system using deep learning and hybrid image analysis to detect improper capsule formation during production. This system helps reduce manual inspection, improve consistency during production, and prevent defective products from reaching the market.",
    image: "/uploads/0eed7a71-f82c-40b0-911d-92fd1348e080.png",  
    html: "/uploads/2.html", // HTML instead of video
    sections: [
      {
        title: "Various Defects Detected",
        description: "Detects multiple defects during production:",
        features: [
          "Satellite / Tail Formation",
          "Oversized or Undersized Capsules",
          "Oval Capsules",
          "Double Capsules",
          "Air Bubbles",
          "Irregular Shapes",
          "Eccentricity",
        ],
      },
      {
        title: "High Precision Camera",
        description: "Detects up to 80 micron defects with precision optics.",
        features: [],
      },
      {
        title: "Hybrid-AI Algorithm",
        description:
          "Analyses capsules using deep learning and hybrid image analysis for unmatched accuracy.",
        features: [],
      },
      {
        title: "Interactive GUI",
        description:
          "Modify inspection settings and parameters with an intuitive interface.",
        features: [],
      },
      {
        title: "User-Friendly",
        description: "Easy to configure and switch jobs quickly.",
        features: [],
      },
      {
        title: "Daily Report Generation",
        description: "Automatically generates daily inspection reports.",
        features: [],
      },
    ],
  },
  {
    id: "roundness-tester",
    title: "Capsule Roundness Tester",
    subtitle:
      "Advanced optical inspection system for testing flavour capsules of cigarettes on a sampling basis.",
    image: "/uploads/0eed7a71-f82c-40b0-911d-92fd1348e080.png",
    video: "/uploads/2.mp4",
    sections: [
      {
        title: "Sampling Capacity",
        description: "Can measure up to 20 capsules in a single instance.",
        features: [],
      },
      {
        title: "Precise Measurement",
        description: "Provides accurate roundness measurements.",
        features: [],
      },
      {
        title: "Colour Compatibility",
        description: "Compatible with capsules of various colours.",
        features: [],
      },
    ],
  },
  {
    id: "label-inspection",
    title: "Label Inspection System",
    subtitle:
      "High-precision label quality inspection system for production lines.",
    image: "/uploads/0eed7a71-f82c-40b0-911d-92fd1348e080.png",
    video: "/uploads/3.mp4",
    sections: [
      {
        title: "High-Speed Label Inspection",
        description:
          "Ensures printed labels meet design and positioning requirements without slowing production.",
        features: [],
      },
      {
        title: "Defect Detection",
        description:
          "Identifies misaligned, damaged, or missing labels in real-time.",
        features: [],
      },
      {
        title: "Data Logging",
        description:
          "Logs inspection results for traceability and quality control.",
        features: [],
      },
    ],
  },
];

export default function FeaturedProducts() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* Product Cards Grid */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:justify-items-center">
            {products.map((product, index) => {
              const isOrange =
                product.title === "Mould Tool Inspection System" ||
                product.title === "Label Inspection System";
              const isLast = index === products.length - 1 && products.length % 2 !== 0;

              return (
                <div
                  key={product.id}
                  className={`${isOrange
                    ? "bg-orange-primary text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                  } p-6 h-auto flex items-center gap-6 overflow-hidden group hover:shadow-lg transition-shadow duration-300 
                    ${isLast ? "sm:col-span-2 sm:w-1/2" : "w-full"}`}
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-start flex-grow gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-1">
                        {product.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm line-clamp-2 ${
                          isOrange ? "opacity-90" : "text-gray-600"
                        }`}
                      >
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="self-end">
                      <Button
                        className="px-4 py-2 text-xs sm:text-sm font-semibold bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                        onClick={() => scrollToSection(product.id)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Detailed Sections */}
      {products.map((product) => (
        <section
          key={product.id}
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[product.id] = el;
          }}
          className="py-8 sm:py-10 lg:py-12"
        >
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
                {/* Text */}
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center order-2 lg:order-1">
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">
                    {product.title}
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base mb-4 opacity-90">
                    {product.subtitle}
                  </p>
                  {product.sections.map((section, idx) => (
                    <div key={idx} className="mb-3">
                      <h3 className="text-sm sm:text-base font-bold mb-1 text-orange-primary">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-2">
                        {section.description}
                      </p>
                      {section.features.length > 0 && (
                        <ul className="space-y-1">
                          {section.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-center text-xs sm:text-sm"
                            >
                              <span className="w-2 h-2 bg-orange-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all">
                    GET IN TOUCH
                  </Button>
                </div>

                {/* Video or HTML */}
                <div className="flex items-center justify-center p-5 sm:p-6 lg:p-8 order-1 lg:order-2">
                  {product.html ? (
                    <iframe
                      src={product.html} // example: "/uploads/demo.html"
                      className="max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain"
                      style={{ aspectRatio: '16/9', border: 'none' }}
                      title={product.title}
                    />

                  ) : product.video ? (
                    <video
                      src={product.video}
                      className="max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
