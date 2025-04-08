
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const assessmentAreas = [
  {
    id: 'leadership',
    title: 'Leadership commitment and involvement',
    description: 'Evaluating top management\'s engagement with the management system and quality objectives.'
  },
  {
    id: 'processes',
    title: 'Process documentation and effectiveness',
    description: 'Reviewing how well processes are defined, documented, and performing against objectives.'
  },
  {
    id: 'risk',
    title: 'Risk management approach',
    description: 'Assessing methods for identifying, evaluating, and addressing risks and opportunities.'
  },
  {
    id: 'auditing',
    title: 'Internal auditing practices',
    description: 'Examining the effectiveness of internal audit programs and corrective action processes.'
  },
  {
    id: 'review',
    title: 'Management review process',
    description: 'Evaluating how management reviews system performance and drives improvement.'
  },
  {
    id: 'improvement',
    title: 'Continuous improvement mechanisms',
    description: "Assessing systems for capturing opportunities and implementing improvements."
  }
];

export const AssessmentAreas: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">What We Assess</h2>
        <div className="space-y-4">
          {assessmentAreas.map((area) => (
            <div key={area.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
