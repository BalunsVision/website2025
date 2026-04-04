interface Section {
  title: string;
  subtitle?: string;
  image?: string;
  fullWidth?: boolean;
  features?: { label: string; position: string }[];
  examples?: {
    title: string;
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  }[];
}

interface ProductDetailOverviewProps {
  sections: Section[];
}

const ProductDetailOverview = ({ sections }: ProductDetailOverviewProps) => {
  return (
    <div>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'text-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Full Width Image Section */}
            {section.fullWidth && section.image && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {/* Features Section */}
            {section.features && (
              <div
                className="relative bg-cover bg-center rounded-lg py-16 px-10 text-white"
                style={{
                  backgroundImage: `url(${section.image})`,
                }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Content wrapper */}
                <div className="relative z-10 max-w-6xl mx-auto">
                  {/* Title and subtitle */}
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                    {section.title}
                  </h2>

                  {section.subtitle && (
                    <p className="text-lg text-center mb-12 opacity-90">{section.subtitle}</p>
                  )}

                  {/* Feature grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Left side - empty for spacing */}
                    <div></div>

                    {/* Right side - feature boxes */}
                    <div className="grid grid-cols-2 gap-4">
                      {section.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800/70 hover:bg-gray-700/70 transition-colors px-6 py-4 rounded-lg text-center font-semibold"
                        >
                          {feature.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            )}

            {/* Examples Section */}
            {section.examples && (
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg text-center mb-12 max-w-4xl mx-auto">
                    {section.subtitle}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.examples.map((example, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <img
                          src={example.beforeImage}
                          alt={`${example.beforeLabel || 'Before'} ${example.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-orange-primary text-white px-4 py-1 rounded z-20 font-semibold">
                          {example.beforeLabel || 'BEFORE'}
                        </div>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm py-2 rounded-lg">
                        <p className="font-semibold">{example.title}</p>
                      </div>
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <img
                          src={example.afterImage}
                          alt={`${example.afterLabel || 'After'} ${example.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-orange-primary text-white px-4 py-1 rounded z-20 font-semibold">
                          {example.afterLabel || 'AFTER'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductDetailOverview;
