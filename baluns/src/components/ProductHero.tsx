import { Button } from "@/components/ui/button";

const ProductHero = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-black/70 to-gray-900 text-white flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/uploads/20210120055941075.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "85vh", // 🔥 Increased background height
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-8">
        {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          ID2000 Smart ×{" "}
          <span className="text-orange-primary">Efficient</span>
        </h1>

        <p className="text-lg sm:text-xl mb-6 opacity-90 leading-relaxed">
          Perfectly embedded in automated machine equipment, adaptable for the
          demand for code reading in harsh environments.
        </p> */}

        {/* <Button className="bg-orange-primary hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-base font-semibold transition-transform transform hover:scale-105 shadow-lg">
          Learn More
        </Button> */}
      </div>
    </section>
  );
};

export default ProductHero;
