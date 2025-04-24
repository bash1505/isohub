
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { documentPackages } from '@/data/documentPackages';
import PackageOverview from '@/components/document-details/PackageOverview';
import CustomerReviews from '@/components/document-details/CustomerReviews';
import PurchaseCard from '@/components/document-details/PurchaseCard';

const DocumentDetails = () => {
  const { id } = useParams();
  const pkg = id ? documentPackages.find(p => p.id === id) : null;
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    if (pkg) {
      addToCart(pkg);
    }
  };
  
  const handleDownloadSample = () => {
    toast({
      title: "Sample Downloaded",
      description: "Your sample document has been downloaded successfully.",
    });
  };
  
  if (!pkg) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Document Package Not Found</h1>
          <p className="text-muted-foreground mb-6">The document package you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/store">Return to Document Store</Link>
          </Button>
        </div>
      </div>
    );
  }

  const additionalInfo = {
    "iso-9001": {
      details: "This comprehensive ISO 9001:2015 Quality Management System package includes everything you need to implement, maintain, and certify your QMS. All documents are fully editable and customizable to your organization's needs.",
      suitableFor: ["Manufacturing companies", "Service providers", "Small to large enterprises", "Organizations seeking customer satisfaction improvement", "Businesses looking to enhance process efficiency"],
      format: ["Microsoft Word (.docx)", "Microsoft Excel (.xlsx)", "PDF for reference copies"],
      support: "60 days email support included"
    },
    "iso-14001": {
      details: "Our ISO 14001:2015 Environmental Management System package provides all essential documentation to implement an effective EMS. These templates are designed to help you manage environmental aspects, fulfill compliance obligations, and achieve environmental objectives.",
      suitableFor: ["Organizations with environmental impacts", "Manufacturing facilities", "Construction companies", "Service organizations", "Companies seeking to improve sustainability"],
      format: ["Microsoft Word (.docx)", "Microsoft Excel (.xlsx)", "PDF for reference copies"],
      support: "60 days email support included"
    }
  };

  const packageDetails = {
    details: `This comprehensive ${pkg.title} includes everything you need to implement, maintain, and certify your management system. All documents are fully editable and customizable to your organization's needs.`,
    suitableFor: ["Small to large enterprises", "Organizations seeking certification", "Companies looking to improve management systems"],
    format: ["Microsoft Word (.docx)", "Microsoft Excel (.xlsx)", "PDF for reference copies"],
    support: "60 days email support included"
  };

  const currentPackageDetails = id && id in additionalInfo 
    ? additionalInfo[id as keyof typeof additionalInfo] 
    : packageDetails;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/store" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Document Store
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PackageOverview pkg={pkg} details={currentPackageDetails} />
          <CustomerReviews />
        </div>
        
        <div>
          <PurchaseCard 
            pkg={pkg} 
            onAddToCart={handleAddToCart}
            onDownloadSample={handleDownloadSample}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
