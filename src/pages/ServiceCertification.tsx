
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCertification = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">ISO Certification Consulting</h1>
        <p className="text-primary font-semibold text-xl mb-4">
          Expert Guidance to Help You Achieve ISO Certification with Confidence
        </p>
        <p className="text-muted-foreground max-w-3xl">
          At Fisher Infusion, we specialize in guiding organizations through the ISO certification 
          process from start to finish. Whether you're aiming for ISO 9001, 14001, 45001, or 27001, 
          our certified consultants ensure you are prepared, compliant, and confident when facing your 
          external auditors.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">1</div>
                    <div>
                      <span className="font-medium">Initial Discovery Call & Readiness Assessment</span>
                      <p className="text-sm text-muted-foreground">Understand your current status and certification goals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">2</div>
                    <div>
                      <span className="font-medium">Tailored Certification Roadmap</span>
                      <p className="text-sm text-muted-foreground">Customized timeline and implementation plan for your organization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">3</div>
                    <div>
                      <span className="font-medium">Support with Required Documentation</span>
                      <p className="text-sm text-muted-foreground">Templates and guidance for creating compliant documentation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">4</div>
                    <div>
                      <span className="font-medium">Guidance on Policies, Objectives & Process Mapping</span>
                      <p className="text-sm text-muted-foreground">Development of key management system components</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">5</div>
                    <div>
                      <span className="font-medium">Pre-certification Audit Preparation</span>
                      <p className="text-sm text-muted-foreground">Mock audits and readiness assessment before certification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">6</div>
                    <div>
                      <span className="font-medium">Certification Body Selection Assistance</span>
                      <p className="text-sm text-muted-foreground">Help choosing the right certification body for your needs</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Why It Matters</h2>
                <p className="mb-4">
                  ISO certification strengthens your business's reputation, opens doors to new markets, and demonstrates 
                  a commitment to quality, safety, and continuous improvement. Our hands-on support makes the 
                  process clear, structured, and stress-free.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Enhance your organization's credibility and market position</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Meet customer and stakeholder requirements for certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Improve internal processes and operational efficiency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Reduce the risk of non-compliance and associated costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Client Testimonials</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "Fisher Infusion simplified our ISO 9001 certification journey. Their systematic approach saved us 
                  months of trial and error."
                  <footer className="mt-2 text-sm font-medium">- Sarah Chen, Operations Director at TechSoft</footer>
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How long does ISO certification typically take?</AccordionTrigger>
                    <AccordionContent>
                      The process usually takes 3-6 months depending on your organization's size and readiness.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Do we need to change all our processes?</AccordionTrigger>
                    <AccordionContent>
                      Not necessarily. We work with your existing processes where possible, enhancing them to meet ISO requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What's your success rate with certification?</AccordionTrigger>
                    <AccordionContent>
                      We have a 98% first-time success rate for clients who complete our full certification program.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
            <h3 className="font-semibold text-xl mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-muted-foreground">
              Book a free discovery call with our ISO certification experts to discuss your needs and objectives.
            </p>
            <Button asChild className="w-full mb-4">
              <Link to="/consultation">Book Your Free Discovery Call</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              No obligation, just expert advice to help you move forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCertification;
