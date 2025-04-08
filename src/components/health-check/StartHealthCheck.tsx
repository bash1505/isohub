
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const StartHealthCheck: React.FC = () => {
  return (
    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
      <h3 className="font-semibold text-xl mb-4">Start Your ISO Health Check</h3>
      <p className="mb-6 text-muted-foreground">
        Get clarity on your ISO compliance status with our free assessment tool and expert consultation.
      </p>
      <Button asChild className="w-full mb-4">
        <Link to="/consultation">Take the ISO Health Check</Link>
      </Button>
      <p className="text-sm text-center text-muted-foreground">
        No obligation, just valuable insights to guide your quality journey.
      </p>
    </div>
  );
};
