import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import products from "@/data/productGrid.json"; // ✅ import JSON data

const ProductGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/shop/${product.slug}`)}
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
