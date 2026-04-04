import { Users, Brain, Database, Cloud } from "lucide-react";
import features from "@/data/productFeatures.json"; // ✅ import JSON

const iconMap: Record<string, React.ElementType> = {
  Users,
  Brain,
  Database,
  Cloud,
};

const ProductFeatures = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Supplier of Machine Vision devices and algorithm software platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Focus on embedded hardware technology and underlying algorithm
            software development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                {IconComponent && (
                  <IconComponent className="h-16 w-16 mx-auto mb-4 text-orange-primary" />
                )}
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                {feature.description && (
                  <p className="text-muted-foreground">{feature.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
