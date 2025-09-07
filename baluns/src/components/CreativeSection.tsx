
const CreativeSection = () => {
  return (
    <section className="py-0 mt-10">
      <div className="max-w-screen-2xl mx-auto rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="bg-orange-primary p-8 sm:p-12 lg:p-16 xl:p-20 text-white flex items-center order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Expand your creative
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed">
                Try it. Expand. Come to the best creative workflow guide
                here. Get the work done with more care and much more
                effectively. Choose with the best options in the page.
                We plan to make some pages great. Choose the right
                creative to add more value to your work.
              </p>
              <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed">
                This expands with some more creative workflow guides.
                At least the guides can help you to get a better success.
                Get your success level up using the best tools that can
                guide your way to the best.
              </p>
            </div>
          </div>
          <div className="h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
            <img
              src="/uploads/pexels-fox-58267-225157.jpg"
              alt="Camera in nature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
