
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CustomerReviews: React.FC = () => {
  return (
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
  );
};

export default CustomerReviews;
