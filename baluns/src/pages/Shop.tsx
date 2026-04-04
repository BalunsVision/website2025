import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/components/ProductHero';
import ProductFeatures from '@/components/ProductFeatures';
import ProductGrid from '@/components/ProductGrid';
import ProductApplications from '@/components/ProductApplications';
import ProductDownloads from '@/components/ProductDownloads';
import ShopContact from '@/components/ShopContact';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductHero />
        <ProductFeatures />
        <ProductGrid />
        <ProductApplications />
        <ProductDownloads />
        <ShopContact />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
