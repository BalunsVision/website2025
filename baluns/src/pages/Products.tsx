
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/components/ProductHero';
import ProductCategories from '@/components/ProductCategories';
import FeaturedProducts from '@/components/FeaturedProducts';

const Products = () => {
  return (
    <div className="min-h-screen bg-white mt-[4.25rem]">
      <Header />
      <main>
        {/* <ProductHero /> */}
        {/* <ProductCategories /> */}
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
