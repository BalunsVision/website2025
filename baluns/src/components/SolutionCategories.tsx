import { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import solutionCategories from "../data/solution_categories.json";

const SolutionCategories = () => {
  const [fixed, setFixed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(""); // <-- track active
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;

      // If scrolled past → show fixed header
      if (scrollY > sectionTop + 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      // 🔥 Auto-detect which section is visible
      solutionCategories.forEach((category) => {
        const element = document.getElementById(category.sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveCategory(category.sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(sectionId); // <-- set active when clicked
    }
  };

  return (
    <>
      {/* Original Categories Grid */}
      <section ref={sectionRef} className="relative bg-white py-6 mt-5">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {solutionCategories.map((category, index) => {
              const IconComponent = (LucideIcons as any)[category.icon];
              const bgClass = category.bgColor || "bg-gray-500";

              return (
                <div
                  key={index}
                  onClick={() => scrollToSection(category.sectionId)}
                  className={`flex flex-col items-center justify-center h-[120px] sm:h-[150px] ${bgClass} text-white rounded-sm text-center hover:shadow-md transition-all duration-300 cursor-pointer p-2`}
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                  )}
                  <h3 className="text-xs sm:text-sm md:text-base font-medium">
                    {category.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fixed compact header */}
      {fixed && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-40 h-14 sm:h-16 flex items-center">
          <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6 w-full">
            <div className="flex justify-start sm:justify-center items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
              {solutionCategories.map((category, index) => {
                const IconComponent = (LucideIcons as any)[category.icon];
                const isActive = activeCategory === category.sectionId;

                return (
                  <div
                    key={index}
                    onClick={() => scrollToSection(category.sectionId)}
                    className={`flex flex-col items-center justify-center h-12 min-w-[60px] sm:min-w-[70px] px-2 cursor-pointer transition-all ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 mb-1" />
                    )}
                    <span className="text-[10px] sm:text-xs font-medium text-center">
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolutionCategories;
