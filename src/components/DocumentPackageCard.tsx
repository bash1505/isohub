
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { LazyImage } from './LazyImage';

export interface DocumentPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  includes: string[];
  importance: string;
  imageSrc?: string;
}

interface DocumentPackageCardProps {
  package: DocumentPackage;
}

const DocumentPackageCard: React.FC<DocumentPackageCardProps> = ({ package: pkg }) => {
  const { addToCart } = useCart();
  const defaultImage = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop";

  const handleAddToCart = () => {
    addToCart(pkg);
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <LazyImage
          src={pkg.imageSrc || defaultImage}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{pkg.title}</CardTitle>
          </div>
          <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            R {pkg.price.toLocaleString()}
          </div>
        </div>
        <CardDescription className="mt-2">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <h4 className="text-sm font-medium mb-1">Includes:</h4>
          <ul className="space-y-1">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-1">Importance:</h4>
          <p className="text-sm text-muted-foreground">{pkg.importance}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 border-t pt-4">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/store/${pkg.id}`}>View Details</Link>
        </Button>
        <Button onClick={handleAddToCart} className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentPackageCard;
