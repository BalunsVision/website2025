import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Downloads {
  software: {
    icon: string;
    title: string;
    version: string;
  }[];
  documents: any[];
}

interface ProductDetailDownloadsProps {
  downloads: Downloads;
}

const ProductDetailDownloads = ({ downloads }: ProductDetailDownloadsProps) => {
  const [activeTab, setActiveTab] = useState<'software' | 'documents'>('software');

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-orange-primary pb-2">DOWNLOAD</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b">
          <button
            onClick={() => setActiveTab('software')}
            className={`pb-4 px-6 font-semibold text-lg transition-colors relative ${
              activeTab === 'software'
                ? 'text-orange-primary'
                : 'text-gray-600 hover:text-orange-primary'
            }`}
          >
            Software
            {activeTab === 'software' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-4 px-6 font-semibold text-lg transition-colors relative ${
              activeTab === 'documents'
                ? 'text-orange-primary'
                : 'text-gray-600 hover:text-orange-primary'
            }`}
          >
            Documents
            {activeTab === 'documents' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-primary" />
            )}
          </button>
        </div>

        {/* Software List - 2 items per row */}
        {activeTab === 'software' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {downloads.software.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">Version: {item.version}</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-primary hover:text-orange-600">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No documents available</p>
          </div>
        )}

        {/* More Button */}
        <div className="text-right mt-8">
          <Button
            variant="link"
            className="text-orange-primary hover:text-orange-600 text-lg font-semibold"
          >
            More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailDownloads;
