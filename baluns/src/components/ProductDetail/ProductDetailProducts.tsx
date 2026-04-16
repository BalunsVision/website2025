import { useState, useMemo, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, ShoppingCart, Download } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

interface Product {
  model: string;
  sensorModel: string;
  resolution: string;
  maxFrameRate: string;
  dataInterface: string;
  monoColor: string;
  shutter?: string;
  status: string;
  image?: string;
  description?: string;
  pdf?: string;
}

interface ProductDetailProductsProps {
  products: Product[];
}

const ProductDetailProducts = ({ products }: ProductDetailProductsProps) => {
  const [showDiscontinued, setShowDiscontinued] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProductForDownload, setSelectedProductForDownload] = useState<Product | null>(null);
  const [downloadForm, setDownloadForm] = useState({ name: '', email: '', phone: '', query: '' });
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [downloadResponse, setDownloadResponse] = useState('');
  const [filters, setFilters] = useState({
    monoColor: 'all',
    sensor: 'all',
    maxFrameRate: 'all',
    resolution: 'all',
    dataInterface: 'all',
  });
  
  const itemsPerPage = 50;

  const filterOptions = useMemo(() => {
    return {
      monoColor: ['all', ...new Set(products.map(p => p.monoColor).filter(Boolean))],
      sensor: ['all', ...new Set(products.map(p => p.sensorModel).filter(Boolean))],
      maxFrameRate: ['all', ...new Set(products.map(p => p.maxFrameRate).filter(Boolean))],
      resolution: ['all', ...new Set(products.map(p => p.resolution).filter(Boolean))],
      dataInterface: ['all', ...new Set(products.map(p => p.dataInterface).filter(Boolean))],
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (!showDiscontinued && product.status === 'Discontinued') return false;
      if (filters.monoColor !== 'all' && product.monoColor !== filters.monoColor) return false;
      if (filters.sensor !== 'all' && product.sensorModel !== filters.sensor) return false;
      if (filters.maxFrameRate !== 'all' && product.maxFrameRate !== filters.maxFrameRate) return false;
      if (filters.resolution !== 'all' && product.resolution !== filters.resolution) return false;
      if (filters.dataInterface !== 'all' && product.dataInterface !== filters.dataInterface) return false;
      return true;
    });
  }, [products, filters, showDiscontinued]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, showDiscontinued, products.length]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleProductSelect = (model: string) => {
    setSelectedProducts(prev => 
      prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
    );
  };

  const handleClearFilters = () => {
    setFilters({
      monoColor: 'all',
      sensor: 'all',
      maxFrameRate: 'all',
      resolution: 'all',
      dataInterface: 'all',
    });
    setShowDiscontinued(false);
    setCurrentPage(1);
  };

  const handleProductModelClick = (product: Product) => {
    setSelectedProductForDownload(product);
    setDownloadForm({ name: '', email: '', phone: '', query: '' });
    setDownloadResponse('');
    setShowProductModal(true);
  };

  const handleDownloadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDownloadForm({ ...downloadForm, [e.target.name]: e.target.value });
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductForDownload) return;
    setDownloadLoading(true);
    setDownloadResponse('');

    try {
      const formData = new FormData();
      formData.append('name', downloadForm.name);
      formData.append('email', downloadForm.email);
      formData.append('phone', downloadForm.phone);
      formData.append('query', downloadForm.query);
      formData.append('clickType', `Product Download: ${selectedProductForDownload.model}`);

      const res = await fetch('https://balunstech.com/send_email.php', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setDownloadResponse('✅ Details sent successfully!');
        setDownloadForm({ name: '', email: '', phone: '', query: '' });
        
        // Trigger PDF download
        if (selectedProductForDownload.pdf) {
          const link = document.createElement('a');
          link.href = selectedProductForDownload.pdf;
          link.download = `${selectedProductForDownload.model}.pdf`;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        setDownloadResponse('❌ Failed to send details.');
      }
    } catch (err) {
      console.error('Error:', err);
      setDownloadResponse('❌ Something went wrong.');
    } finally {
      setDownloadLoading(false);
    }
  };

  const comparedProducts = products.filter(p => selectedProducts.includes(p.model));

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-orange-primary pb-2">PRODUCT LIST</span>
        </h2>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex items-center gap-2">
            <label className="text-sm">Discontinued</label>
            <Checkbox
              checked={showDiscontinued}
              onCheckedChange={(checked) => setShowDiscontinued(checked as boolean)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Mono/Color</label>
              <Select value={filters.monoColor} onValueChange={(value) => setFilters(prev => ({ ...prev, monoColor: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.monoColor.map(option => (
                    <SelectItem key={option} value={option}>
                      {option === 'all' ? `All + ${filterOptions.monoColor.length - 1}` : option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Sensor</label>
              <Select value={filters.sensor} onValueChange={(value) => setFilters(prev => ({ ...prev, sensor: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.sensor.map(option => (
                    <SelectItem key={option} value={option}>
                      {option === 'all' ? `All + ${filterOptions.sensor.length - 1}` : option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Max. Frame Rate</label>
              <Select value={filters.maxFrameRate} onValueChange={(value) => setFilters(prev => ({ ...prev, maxFrameRate: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.maxFrameRate.map(option => (
                    <SelectItem key={option} value={option}>
                      {option === 'all' ? `All + ${filterOptions.maxFrameRate.length - 1}` : option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Resolution</label>
              <Select value={filters.resolution} onValueChange={(value) => setFilters(prev => ({ ...prev, resolution: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.resolution.map(option => (
                    <SelectItem key={option} value={option}>
                      {option === 'all' ? `All + ${filterOptions.resolution.length - 1}` : option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Data Interface</label>
              <Select value={filters.dataInterface} onValueChange={(value) => setFilters(prev => ({ ...prev, dataInterface: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.dataInterface.map(option => (
                    <SelectItem key={option} value={option}>
                      {option === 'all' ? `All + ${filterOptions.dataInterface.length - 1}` : option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-right">
            <Button 
              variant="outline" 
              className="text-orange-primary border-orange-primary hover:bg-orange-primary hover:text-white"
              onClick={handleClearFilters}
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Product Table */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-bold">Product model</TableHead>
                <TableHead className="font-bold">Sensor model</TableHead>
                <TableHead className="font-bold">Resolution</TableHead>
                <TableHead className="font-bold">Max. frame rate</TableHead>
                <TableHead className="font-bold">Data interface</TableHead>
                <TableHead className="font-bold">Mono/Color</TableHead>
                <TableHead className="font-bold">Shutter</TableHead>
                <TableHead className="font-bold">Product status</TableHead>
                <TableHead className="font-bold">Comparison</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell 
                    className="font-medium text-orange-primary cursor-pointer hover:underline"
                    onClick={() => handleProductModelClick(product)}
                  >
                    {product.model}
                  </TableCell>
                  <TableCell>{product.sensorModel}</TableCell>
                  <TableCell>{product.resolution}</TableCell>
                  <TableCell>{product.maxFrameRate}</TableCell>
                  <TableCell>
                    {product.dataInterface}
                    {product.monoColor && (
                      <span className="ml-2 inline-flex items-center">
                        {product.monoColor === 'Color' && (
                          <span className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500"></span>
                        )}
                        {product.monoColor === 'Mono' && (
                          <span className="w-4 h-4 rounded-full bg-gray-800 border-2 border-white"></span>
                        )}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{product.monoColor}</TableCell>
                  <TableCell>{product.shutter || '-'}</TableCell>
                  <TableCell>
                    <span className="text-sm text-orange-600">{product.status}</span>
                  </TableCell>
                  <TableCell>
                    <Checkbox 
                      checked={selectedProducts.includes(product.model)}
                      onCheckedChange={() => handleProductSelect(product.model)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Total {filteredProducts.length} pcs
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            >
              ‹
            </Button>
            {[...Array(Math.min(8, totalPages))].map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? 'bg-orange-primary hover:bg-orange-600' : ''}
              >
                {i + 1}
              </Button>
            ))}
            {totalPages > 8 && <span className="px-2">...</span>}
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            >
              ›
            </Button>
          </div>
        </div>

        {/* Contrast Bar */}
        {selectedProducts.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg p-4 z-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Contrast Bar</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedProducts([])}
                >
                  Hide
                </Button>
              </div>
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                {comparedProducts.map((product) => (
                  <div key={product.model} className="relative flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-white hover:bg-destructive/90 z-10"
                      onClick={() => handleProductSelect(product.model)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <div className="w-32 p-2 border rounded-lg bg-card">
                      <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                        {product.image ? (
                          <img src={product.image} alt={product.model} className="w-full h-full object-contain" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded" />
                        )}
                      </div>
                      <p className="text-xs font-medium text-center truncate">{product.model}</p>
                    </div>
                  </div>
                ))}
                <div className="flex-shrink-0 flex flex-col gap-2">
                  <Button 
                    className="bg-orange-primary hover:bg-orange-600 text-white"
                    disabled={selectedProducts.length < 2}
                    onClick={() => setShowComparison(true)}
                  >
                    Compare
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setShowBuyModal(true)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedProducts([])}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Modal */}
        <Dialog open={showComparison} onOpenChange={setShowComparison}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Product Comparison</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex gap-2 justify-end">
                <div className="flex items-center gap-2">
                  <Checkbox id="hide-same" />
                  <label htmlFor="hide-same" className="text-sm">Hide Same Items</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="highlight-diff" />
                  <label htmlFor="highlight-diff" className="text-sm">Highlight Different Items</label>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-bold">Product</th>
                      {comparedProducts.map((product) => (
                        <th key={product.model} className="p-4">
                          <div className="relative">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                              onClick={() => handleProductSelect(product.model)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <div className="space-y-2">
                              <div className="aspect-square bg-muted rounded flex items-center justify-center">
                                {product.image ? (
                                  <img src={product.image} alt={product.model} className="w-full h-full object-contain" />
                                ) : (
                                  <div className="w-24 h-24 bg-gray-200 rounded" />
                                )}
                              </div>
                              <div>
                                <p className="font-bold text-sm">{product.model}</p>
                                <p className="text-xs text-muted-foreground">{product.description || `${product.monoColor}, ${product.resolution}`}</p>
                              </div>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Product Model</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.model}</td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-bold">Type</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">
                          {product.description || `${product.monoColor}, ${product.resolution}`}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Sensor Model</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.sensorModel}</td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-bold">Resolution</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.resolution}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Max Frame Rate</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.maxFrameRate}</td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-bold">Data Interface</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.dataInterface}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Mono/Color</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.monoColor}</td>
                      ))}
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-bold">Shutter</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">{product.shutter || '-'}</td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Product Status</td>
                      {comparedProducts.map((product) => (
                        <td key={product.model} className="p-4 text-center">
                          <span className="text-orange-600">{product.status}</span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Product Model Download Modal */}
        <Dialog open={showProductModal} onOpenChange={setShowProductModal}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {selectedProductForDownload ? `Download - ${selectedProductForDownload.model}` : 'Download'}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={downloadForm.name}
                onChange={handleDownloadFormChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={downloadForm.email}
                onChange={handleDownloadFormChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={downloadForm.phone}
                onChange={handleDownloadFormChange}
                required
              />
              <Textarea
                name="query"
                placeholder="Your Query (optional)"
                value={downloadForm.query}
                onChange={handleDownloadFormChange}
              />

              {downloadResponse && (
                <p className="text-sm text-center mt-2">{downloadResponse}</p>
              )}

              <DialogFooter>
                <Button type="submit" disabled={downloadLoading} className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  {downloadLoading ? 'Processing...' : 'Download'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Buy Now Modal */}
        <ContactModal
          open={showBuyModal}
          onClose={() => setShowBuyModal(false)}
          clickType={`Buy Request: ${selectedProducts.join(', ')}`}
        />
      </div>
    </section>
  );
};

export default ProductDetailProducts;
