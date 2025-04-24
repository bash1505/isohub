
import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DocumentPackage } from '@/components/DocumentPackageCard';
import { CheckCircle } from 'lucide-react';

interface PackageOverviewProps {
  pkg: DocumentPackage;
  details: {
    details: string;
    suitableFor: string[];
    format: string[];
    support: string;
  };
}

const PackageOverview: React.FC<PackageOverviewProps> = ({ pkg, details }) => {
  return (
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
          <p className="text-muted-foreground">{details.details}</p>
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
            {details.suitableFor.map((item, index) => (
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
            {details.format.map((item, index) => (
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
            <span className="font-medium">Support:</span> {details.support}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageOverview;
