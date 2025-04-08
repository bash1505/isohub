
import React from 'react';

export const HealthCheckHeader: React.FC = () => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">ISO Compliance Health Check</h1>
      <p className="text-primary font-semibold text-xl mb-4">
        Free Tool to Assess Your Current Compliance Status
      </p>
      <p className="text-muted-foreground max-w-3xl">
        Not sure where you stand with ISO compliance? Our ISO Compliance Health Check helps you 
        identify gaps, understand your readiness, and create a clear path forward—whether 
        you're just starting your ISO journey or looking to improve an existing system.
      </p>
    </header>
  );
};
