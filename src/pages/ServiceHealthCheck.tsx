
import React from 'react';
import { HealthCheckHeader } from '@/components/health-check/HealthCheckHeader';
import { HealthCheckProcess } from '@/components/health-check/HealthCheckProcess';
import { AssessmentAreas } from '@/components/health-check/AssessmentAreas';
import { BenefitsList } from '@/components/health-check/BenefitsList';
import { WhyItMatters } from '@/components/health-check/WhyItMatters';
import { ClientTestimonial } from '@/components/health-check/ClientTestimonial';
import { StartHealthCheck } from '@/components/health-check/StartHealthCheck';

const ServiceHealthCheck = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <HealthCheckHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <HealthCheckProcess />
            <AssessmentAreas />
            <BenefitsList />
            <WhyItMatters />
            <ClientTestimonial />
          </div>
        </div>

        <div>
          <StartHealthCheck />
        </div>
      </div>
    </div>
  );
};

export default ServiceHealthCheck;
