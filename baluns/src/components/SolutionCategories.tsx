import * as LucideIcons from "lucide-react";
import solutionCategories from "../data/solution_categories.json";

const SolutionCategories = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("activateCarousel", { detail: { sectionId } })
        );
      }, 500);
    }
  };

  return (
    <section className="sm:py-6 md:py-4 lg:py-2 xl:py-0 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6">
          {solutionCategories.map((category, index) => {
            // Get icon dynamically
            const IconComponent = (LucideIcons as any)[category.icon];
            const bgClass = category.bgColor || "bg-gray-500";

            return (
              <div
                key={index}
                onClick={() => scrollToSection(category.sectionId)}
                className={`flex flex-col items-center justify-center h-[150px] ${bgClass} text-white rounded-sm text-center hover:shadow-md transition-shadow duration-300 cursor-pointer p-2`}
              >
                {IconComponent && (
                  <IconComponent className="w-10 h-10 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                )}
                <h3 className="text-xs sm:text-sm font-medium">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionCategories;
