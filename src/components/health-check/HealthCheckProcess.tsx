
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, BarChart, Clock, ArrowRight } from 'lucide-react';

const healthCheckProcess = [
  {
    id: 1,
    title: 'Complete Self-Assessment',
    description: 'Answer our online questionnaire about your current management system (15-20 minutes).',
    icon: ClipboardCheck
  },
  {
    id: 2,
    title: 'Receive Gap Report',
    description: 'Get an immediate score and detailed analysis of your ISO compliance status.',
    icon: BarChart
  },
  {
    id: 3,
    title: 'Consultation Call',
    description: 'Schedule a free 30-minute session to discuss findings with our ISO expert.',
    icon: Clock
  },
  {
    id: 4,
    title: 'Custom Roadmap',
    description: 'Receive personalized recommendations for improving your management system.',
    icon: ArrowRight
  }
];

export const HealthCheckProcess: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-6">
          {healthCheckProcess.map((step) => (
            <div key={step.id} className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
