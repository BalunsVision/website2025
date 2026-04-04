import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailHero from '@/components/ProductDetail/ProductDetailHero';
import ProductDetailOverview from '@/components/ProductDetail/ProductDetailOverview';
import ProductDetailProducts from '@/components/ProductDetail/ProductDetailProducts';
import ProductDetailParts from '@/components/ProductDetail/ProductDetailParts';
import ProductDetailDownloads from '@/components/ProductDetail/ProductDetailDownloads';
import ShopContact from '@/components/ShopContact';
import productData from '@/data/productDetailData.json';

const ProductDetail = () => {
  const { productId, seriesId } = useParams<{ productId: string; seriesId?: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'parts' | 'download'>('overview');
  const navigate = useNavigate();

  const product = productData[productId as keyof typeof productData];
  const activeSeries = seriesId || 'all';

  const seriesContainerRef = useRef<HTMLDivElement>(null);
  const seriesRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [autoSlide, setAutoSlide] = useState(true);

  // Auto-slide series carousel
  useEffect(() => {
    const container = seriesContainerRef.current;
    if (!container) return;

    let animationFrame: number;

    const slide = () => {
      if (!autoSlide) return;
      container.scrollLeft += 1; // pixels per frame
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; // loop
      }
      animationFrame = requestAnimationFrame(slide);
    };

    animationFrame = requestAnimationFrame(slide);
    return () => cancelAnimationFrame(animationFrame);
  }, [autoSlide]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSeriesClick = (clickedSeriesId: string, index: number) => {
    // Navigate to the series-specific route
    if (clickedSeriesId === 'all') {
      navigate(`/shop/${productId}`);
    } else {
      navigate(`/shop/${productId}/${clickedSeriesId}`);
    }
    
    const container = seriesContainerRef.current;
    const item = seriesRefs.current[index];
    if (container && item) {
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      container.scrollTo({
        left: itemCenter - containerCenter,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col mt-20">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
            {activeSeries !== 'all' 
              ? `${product.breadcrumb} / ${product.series.find(s => s.id === activeSeries)?.name || ''}`
              : product.breadcrumb
            }
          </div>

          {/* Series Slider */}
          <div className="relative">
            <div
              ref={seriesContainerRef}
              className="flex gap-4 overflow-hidden scroll-smooth pb-4"
              onMouseEnter={() => setAutoSlide(false)}
              onMouseLeave={() => setAutoSlide(true)}
            >
              {product.series.map((series, index) => (
                <button
                  key={series.id}
                  ref={(el) => (seriesRefs.current[index] = el)}
                  onClick={() => handleSeriesClick(series.id, index)}
                  className={`flex-shrink-0 relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden cursor-pointer ${
                    activeSeries === series.id ? 'ring-2 ring-orange-primary' : ''
                  }`}
                >
                  <img
                    src={series.image}
                    alt={series.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 py-2 px-4 text-center font-semibold ${
                      activeSeries === series.id ? 'bg-orange-primary text-white' : 'bg-white/90'
                    }`}
                  >
                    {series.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'products', label: 'Products' },
                { id: 'parts', label: 'Parts' },
                { id: 'download', label: 'Download' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 font-semibold transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-orange-primary'
                      : 'text-gray-600 hover:text-orange-primary'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            <ProductDetailHero 
              data={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.hero 
                ? (product as any).seriesData[activeSeries].hero 
                : product.overview.hero
              } 
            />
            <ProductDetailOverview 
              sections={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.sections 
                ? (product as any).seriesData[activeSeries].sections 
                : product.overview.sections
              } 
            />
            <ProductDetailProducts 
              products={activeSeries !== 'all' 
                ? product.products.filter((p: any) => p.series === activeSeries)
                : product.products
              } 
            />
            <ProductDetailParts 
              parts={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.parts
                ? (product as any).seriesData[activeSeries].parts
                : product.parts
              } 
            />
            <ProductDetailDownloads 
              downloads={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.downloads
                ? (product as any).seriesData[activeSeries].downloads
                : product.downloads
              } 
            />
          </>
        )}
        {activeTab === 'products' && (
          <ProductDetailProducts 
            products={activeSeries !== 'all' 
              ? product.products.filter((p: any) => p.series === activeSeries)
              : product.products
            } 
          />
        )}
        {activeTab === 'parts' && (
          <ProductDetailParts 
            parts={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.parts
              ? (product as any).seriesData[activeSeries].parts
              : product.parts
            } 
          />
        )}
        {activeTab === 'download' && (
          <ProductDetailDownloads 
            downloads={activeSeries !== 'all' && (product as any).seriesData?.[activeSeries]?.downloads
              ? (product as any).seriesData[activeSeries].downloads
              : product.downloads
            } 
          />
        )}

        <ShopContact />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
