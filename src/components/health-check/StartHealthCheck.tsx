
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';

export const StartHealthCheck: React.FC = () => {
  const handleStartAssessment = () => {
    // This will trigger the questionnaire tab if we're on the health check page
    const tabsTrigger = document.querySelector('[value="questionnaire"]') as HTMLElement;
    if (tabsTrigger) {
      tabsTrigger.click();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're not on the health check page, navigate to it
      window.location.href = '/services/health-check';
    }
  };

  return (
    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
      <h3 className="font-semibold text-xl mb-4">Start Your ISO Health Check</h3>
      <p className="mb-6 text-muted-foreground">
        Get clarity on your ISO compliance status with our free assessment tool and expert consultation.
      </p>
      <Button onClick={handleStartAssessment} className="w-full mb-4 flex items-center gap-2">
        <ClipboardCheck className="h-4 w-4" />
        Take the ISO Health Check
      </Button>
      <p className="text-sm text-center text-muted-foreground">
        No obligation, just valuable insights to guide your quality journey.
      </p>
    </div>
  );
};
