
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import IllustratedCard from '@/components/IllustratedCard';

const auditTypes = [
  {
    id: 'pre-cert',
    title: 'Pre-certification readiness audits',
    description: 'Prepare for your initial certification with a thorough review of your management system.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance audits for certified systems',
    description: 'Regular check-ups to ensure continued compliance with ISO standards.'
  },
  {
    id: 'process',
    title: 'Process-specific audits',
    description: 'Focused reviews of individual processes within your management system.'
  },
  {
    id: 'integrated',
    title: 'Integrated management system audits',
    description: 'Comprehensive assessments covering multiple ISO standards simultaneously.'
  },
  {
    id: 'remote',
    title: 'Remote/virtual audit options',
    description: "Convenient assessments conducted online when on-site visits aren't feasible."
  }
];

const auditProcess = [
  {
    id: 1,
    title: 'Planning',
    description: 'Define scope, criteria, and schedule'
  },
  {
    id: 2,
    title: 'Preparation',
    description: 'Review documentation and previous findings'
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Interviews, observations, and evidence collection'
  },
  {
    id: 4,
    title: 'Reporting',
    description: 'Clear findings with practical recommendations'
  },
  {
    id: 5,
    title: 'Follow-up',
    description: 'Support for addressing non-conformities'
  }
];

const perfectFor = [
  'Businesses preparing for an external audit',
  'Organizations maintaining ISO certification',
  'Companies needing independent, unbiased internal auditors'
];

const ServiceAudits = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Internal Audits & Gap Assessments</h1>
        <p className="text-primary font-semibold text-xl mb-4">
          Stay Audit-Ready and Identify Gaps Before the Auditor Does
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Whether you're preparing for initial certification or maintaining compliance, internal audits 
          and gap assessments are essential. Fisher Infusion offers objective, expert-led audits that 
          highlight strengths, uncover risks, and ensure you meet ISO requirements with confidence.
        </p>
      </header>

      <div className="mb-8">
        <LazyImage 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop" 
          alt="Internal Audit Process" 
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <IllustratedCard 
              imageSrc="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=600&auto=format&fit=crop"
              alt="Various types of audits"
              imagePosition="right"
            >
              <h2 className="text-xl font-semibold mb-4">Types of Audits Offered</h2>
              <div className="space-y-4">
                {auditTypes.map((type) => (
                  <div key={type.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </IllustratedCard>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
                      alt="Audit process steps" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-semibold mb-4">Our Audit Process</h2>
                    <div className="relative">
                      {auditProcess.map((step, index) => (
                        <div key={step.id} className="flex mb-4 last:mb-0">
                          <div className="flex flex-col items-center mr-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full">
                              {step.id}
                            </div>
                            {index < auditProcess.length - 1 && (
                              <div className="w-px h-full bg-border"></div>
                            )}
                          </div>
                          <div className="pt-1 pb-4">
                            <h3 className="font-medium">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <IllustratedCard 
              imageSrc="https://images.unsplash.com/photo-1593013233230-06c8a3a679fe?q=80&w=600&auto=format&fit=crop"
              alt="Audit deliverables"
              imagePosition="left"
            >
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Internal Audit Planning & Execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Audit Reports with Findings & Recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Non-Conformance Tracking Tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Gap Analysis Report vs. ISO Requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Action Plan to Address Deficiencies</span>
                </li>
              </ul>
            </IllustratedCard>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Why It Matters</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      Internal audits are a critical part of any ISO system. They not only prepare you for 
                      certification audits, but they also drive continuous improvement. Our audits offer 
                      insight, not just inspection.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg mt-4">
                      <h3 className="font-medium mb-2">Benefits of Regular Internal Audits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1" />
                          <span>Identify non-conformities before external auditors do</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1" />
                          <span>Maintain certification without costly surprises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1" />
                          <span>Drive continuous improvement through regular assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1" />
                          <span>Build internal capability for ongoing compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?q=80&w=600&auto=format&fit=crop"
                      alt="Continuous improvement" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Perfect For</h2>
                <ul className="space-y-3">
                  {perfectFor.map((item, index) => (
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
            <LazyImage 
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=600&auto=format&fit=crop"
              alt="Audit professional" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-xl mb-4">Ready for an Audit?</h3>
            <p className="mb-6 text-muted-foreground">
              Schedule an internal audit or gap assessment with our experienced team.
            </p>
            <Button asChild className="w-full mb-4">
              <Link to="/consultation">Schedule Your Internal Audit</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Choose from on-site, remote, or hybrid audit options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAudits;
