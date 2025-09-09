const QuickStats = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Delivered",
      description: "Go-to partner for highly complex, customized projects – trusted by repeat customers"
    },
    {
      number: "200+",
      label: "Ultra-fast Inspection",
      description: "High Speed inspection: 200+ items per second, without compromising quality"
    },
    {
      number: ">99%",
      label: "Accuracy Rate", 
      description: "AI-powered, hybrid precision inspection for unmatched speed and accuracy"
    },

    {
      number: "<1 day",
      label: "Downtime and Support",
      description: "Minimized downtime with continuous monitoring, rapid response, and remote support"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Baluns?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our unwavering commitment to Integrity and Excellence is integral to the quality and reliability of our solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;