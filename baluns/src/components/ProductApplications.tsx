import applications from "@/data/productApplications.json"; // ✅ import JSON dynamically

const ProductApplications = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="border-b-4 border-orange-primary pb-2">
              APPLICATIONS
            </span>
          </h2>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-video"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-bold p-6">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductApplications;
