
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Identify strengths and weaknesses in your current system',
  'Prioritize improvement areas for maximum impact',
  'Estimate time and resources needed for certification',
  'Build a realistic implementation roadmap',
  'Benchmark against ISO best practices'
];

export const BenefitsList: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Benefits</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
