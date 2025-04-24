import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Download, FileText, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { documentPackages } from '@/data/documentPackages';

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
    
    // In a real implementation, you would initiate an actual file download here
    // For now, we're just showing a toast notification
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
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>{pkg.title}</CardTitle>
              </div>
              <CardDescription className="mt-2">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Package Description</h3>
                <p className="text-muted-foreground">{currentPackageDetails.details}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Why It Matters</h3>
                <p className="text-muted-foreground">{pkg.importance}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Suitable For</h3>
                <ul className="space-y-1">
                  {currentPackageDetails.suitableFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">File Format & Delivery</h3>
                <p className="text-sm text-muted-foreground mb-2">Available in:</p>
                <ul className="space-y-1">
                  {currentPackageDetails.format.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-3">
                  <span className="font-medium">Delivery:</span> Instant download after payment
                </p>
                <p className="text-sm mt-1">
                  <span className="font-medium">Support:</span> {currentPackageDetails.support}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Themba Mkhize</span>
                    <span className="text-sm text-muted-foreground">Verified Purchase</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These templates saved us months of work. Very comprehensive and easy to customize to our manufacturing processes.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Lerato Ndlovu</span>
                    <span className="text-sm text-muted-foreground">Verified Purchase</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                    <span>★</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Good quality documentation. We had to make quite a few changes to fit our business, but it provided an excellent starting point.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">John van der Merwe</span>
                    <span className="text-sm text-muted-foreground">Verified Purchase</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Excellent support from Fisher Infusion when we had questions. The templates were well-structured and our certification body was impressed with our documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-xl">R {pkg.price.toLocaleString()}</CardTitle>
              <CardDescription>One-time payment, lifetime updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>License:</span>
                <span className="font-medium">Single Organization</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Format:</span>
                <span className="font-medium">Editable Templates</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Support:</span>
                <span className="font-medium">60 Days Email Support</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Updates:</span>
                <span className="font-medium">Free Lifetime Updates</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full flex items-center gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2" onClick={handleDownloadSample}>
                <Download className="h-4 w-4" />
                Download Sample
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have questions about this document package or need assistance choosing the right documents for your organization, our experts are here to help.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/consultation">Book a Free Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
