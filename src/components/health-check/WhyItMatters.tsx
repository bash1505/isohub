
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const WhyItMatters: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Why It Matters</h2>
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="mb-4">
            Having a clear picture of your ISO compliance status is the essential first step in any 
            successful certification or improvement journey. Our Health Check eliminates guesswork 
            and provides actionable insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-border p-3 rounded-md">
              <h3 className="font-medium mb-1">For New Implementations</h3>
              <p className="text-sm text-muted-foreground">
                Understand what you already have in place and what needs to be developed, making 
                implementation more efficient.
              </p>
            </div>
            <div className="border border-border p-3 rounded-md">
              <h3 className="font-medium mb-1">For Existing Systems</h3>
              <p className="text-sm text-muted-foreground">
                Identify improvement opportunities and ensure your system is delivering value, 
                not just maintaining compliance.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
