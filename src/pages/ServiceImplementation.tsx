
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const stages = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description: 'Understanding your business context and needs'
  },
  {
    id: 2,
    title: 'Gap Analysis',
    description: 'Identifying what you have vs. what you need'
  },
  {
    id: 3,
    title: 'Documentation Development',
    description: 'Creating tailored management system documents'
  },
  {
    id: 4,
    title: 'Training & Awareness',
    description: 'Ensuring staff understand and support the system'
  },
  {
    id: 5,
    title: 'Implementation Support',
    description: 'Guiding you through putting it all into practice'
  },
  {
    id: 6,
    title: 'Readiness Review',
    description: 'Preparing you for certification'
  }
];

const idealFor = [
  'Companies new to ISO',
  'Businesses growing into new markets',
  'Organizations improving or expanding existing systems'
];

const resources = [
  'Implementation toolkit with templates and checklists',
  'Monthly progress review meetings',
  'Staff awareness training materials',
  'Post-implementation support (3 months)'
];

const ServiceImplementation = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">ISO Implementation Support</h1>
        <p className="text-primary font-semibold text-xl mb-4">
          Get ISO-Ready With Our End-to-End Implementation Support
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Implementing an ISO Management System can be complex—but not with Fisher Infusion by your side. 
          We partner with you to establish a system tailored to your operations, industry, and goals. 
          Our goal? To make ISO practical, not painful.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Our Implementation Approach</h2>
                <div className="space-y-4">
                  {stages.map((stage) => (
                    <div key={stage.id} className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        {stage.id}
                      </div>
                      <div>
                        <h3 className="font-medium">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Resources Included</h2>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Why It Matters</h2>
                <p className="mb-4">
                  A properly implemented ISO system enhances efficiency, reduces errors, and empowers your team. 
                  We help you build systems that work for you—not just for the auditor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Efficiency Gains</h3>
                    <p className="text-sm text-muted-foreground">
                      Standardized processes reduce waste and improve resource utilization.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Risk Reduction</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify and mitigate potential issues before they impact your business.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Culture of Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Develop an organization-wide mindset focused on improvement.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Market Advantage</h3>
                    <p className="text-sm text-muted-foreground">
                      Meet customer requirements and stand out from competitors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Ideal For</h2>
                <ul className="space-y-3">
                  {idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
            <h3 className="font-semibold text-xl mb-4">Ready to Implement?</h3>
            <p className="mb-6 text-muted-foreground">
              Get a customized implementation plan and quote tailored to your organization's specific needs.
            </p>
            <Button asChild className="w-full mb-4">
              <Link to="/consultation">Request an Implementation Quote</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              We'll respond within 24 business hours with next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImplementation;
