
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ClientTestimonial: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Client Testimonial</h2>
        <blockquote className="border-l-4 border-primary pl-4 italic">
          "The ISO Compliance Health Check gave us exactly what we needed—a clear snapshot of where 
          we stood and a roadmap for moving forward. It saved us months of trying to figure things 
          out on our own."
          <footer className="mt-2 text-sm font-medium">- Jennifer Martinez, Quality Director, Pharmatech Solutions</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
};
