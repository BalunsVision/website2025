import { Card, CardContent } from '@/components/ui/card';

interface Part {
  category: string;
  items: {
    model: string;
    name: string;
    image: string;
  }[];
}

interface ProductDetailPartsProps {
  parts: Part[];
}

const ProductDetailParts = ({ parts }: ProductDetailPartsProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-orange-primary pb-2">PARTS</span>
        </h2>

        {parts.map((part, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="border-b-2 border-orange-primary pb-2">{part.category}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {part.items.map((item, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-lg mb-2">{item.model}</h4>
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailParts;
