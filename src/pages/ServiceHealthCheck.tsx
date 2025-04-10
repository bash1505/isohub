
import React from 'react';
import { HealthCheckHeader } from '@/components/health-check/HealthCheckHeader';
import { HealthCheckProcess } from '@/components/health-check/HealthCheckProcess';
import { AssessmentAreas } from '@/components/health-check/AssessmentAreas';
import { BenefitsList } from '@/components/health-check/BenefitsList';
import { WhyItMatters } from '@/components/health-check/WhyItMatters';
import { ClientTestimonial } from '@/components/health-check/ClientTestimonial';
import { StartHealthCheck } from '@/components/health-check/StartHealthCheck';
import { ISOReadinessQuestionnaire } from '@/components/health-check/ISOReadinessQuestionnaire';
import { LazyImage } from '@/components/LazyImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsletterSubscribe } from '@/components/NewsletterSubscribe';

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

      <Tabs defaultValue="about" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="about">About ISO Health Check</TabsTrigger>
          <TabsTrigger value="questionnaire">Take Assessment</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <HealthCheckProcess />
                <AssessmentAreas />
                <BenefitsList />
                <WhyItMatters />
                <ClientTestimonial />
              </div>
            </div>

            <div className="space-y-6">
              <StartHealthCheck />
              <NewsletterSubscribe />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="questionnaire">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ISOReadinessQuestionnaire />
            </div>
            
            <div className="space-y-6">
              <StartHealthCheck />
              <NewsletterSubscribe />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceHealthCheck;
