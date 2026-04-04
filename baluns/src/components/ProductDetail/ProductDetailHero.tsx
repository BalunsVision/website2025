interface ProductDetailHeroProps {
  data: {
    title: string;
    description: string;
    bannerImage: string;
  };
}

const ProductDetailHero = ({ data }: ProductDetailHeroProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{data.title}</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-1 bg-orange-primary"></div>
          <p className="text-lg text-muted-foreground max-w-4xl">
            {data.description}
          </p>
          <div className="w-12 h-1 bg-orange-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailHero;
