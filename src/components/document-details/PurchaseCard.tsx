
import React from 'react';
import { ShoppingCart, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DocumentPackage } from '@/components/DocumentPackageCard';
import { Link } from 'react-router-dom';

interface PurchaseCardProps {
  pkg: DocumentPackage;
  onAddToCart: () => void;
  onDownloadSample: () => void;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ pkg, onAddToCart, onDownloadSample }) => {
  return (
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
          <Button className="w-full flex items-center gap-2" onClick={onAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2" onClick={onDownloadSample}>
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
  );
};

export default PurchaseCard;
