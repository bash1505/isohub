
import React from 'react';
import { HealthCheckHeader } from '@/components/health-check/HealthCheckHeader';
import { HealthCheckProcess } from '@/components/health-check/HealthCheckProcess';
import { AssessmentAreas } from '@/components/health-check/AssessmentAreas';
import { BenefitsList } from '@/components/health-check/BenefitsList';
import { WhyItMatters } from '@/components/health-check/WhyItMatters';
import { ClientTestimonial } from '@/components/health-check/ClientTestimonial';
import { StartHealthCheck } from '@/components/health-check/StartHealthCheck';
import { LazyImage } from '@/components/LazyImage';

const ServiceHealthCheck = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <HealthCheckHeader />

      <div className="mb-8">
        <LazyImage 
          src="https://images.unsplash.com/photo-1585842712064-2d3f6a804d41?q=80&w=1200&auto=format&fit=crop" 
          alt="ISO Health Check Process" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

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
