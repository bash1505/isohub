
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ClipboardCheck, BarChart, ArrowRight, Clock } from 'lucide-react';

const assessmentAreas = [
  {
    id: 'leadership',
    title: 'Leadership commitment and involvement',
    description: 'Evaluating top management's engagement with the management system and quality objectives.'
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
    description: 'Assessing systems for capturing opportunities and implementing improvements.'
  }
];

const healthCheckProcess = [
  {
    id: 1,
    title: 'Complete Self-Assessment',
    description: 'Answer our online questionnaire about your current management system (15-20 minutes).',
    icon: ClipboardCheck
  },
  {
    id: 2,
    title: 'Receive Gap Report',
    description: 'Get an immediate score and detailed analysis of your ISO compliance status.',
    icon: BarChart
  },
  {
    id: 3,
    title: 'Consultation Call',
    description: 'Schedule a free 30-minute session to discuss findings with our ISO expert.',
    icon: Clock
  },
  {
    id: 4,
    title: 'Custom Roadmap',
    description: 'Receive personalized recommendations for improving your management system.',
    icon: ArrowRight
  }
];

const benefits = [
  'Identify strengths and weaknesses in your current system',
  'Prioritize improvement areas for maximum impact',
  'Estimate time and resources needed for certification',
  'Build a realistic implementation roadmap',
  'Benchmark against ISO best practices'
];

const ServiceHealthCheck = () => {
  return (
    <div className="container mx-auto py-8 px-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">How It Works</h2>
                <div className="space-y-6">
                  {healthCheckProcess.map((step) => (
                    <div key={step.id} className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Why It Matters</h2>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="mb-4">
                    Having a clear picture of your ISO compliance status is the essential first step in any 
                    successful certification or improvement journey. Our Health Check eliminates guesswork 
                    and provides actionable insights.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border border-border p-3 rounded-md">
                      <h3 className="font-medium mb-1">For New Implementations</h3>
                      <p className="text-sm text-muted-foreground">
                        Understand what you already have in place and what needs to be developed, making 
                        implementation more efficient.
                      </p>
                    </div>
                    <div className="border border-border p-3 rounded-md">
                      <h3 className="font-medium mb-1">For Existing Systems</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify improvement opportunities and ensure your system is delivering value, 
                        not just maintaining compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "The ISO Compliance Health Check gave us exactly what we needed—a clear snapshot of where 
                  we stood and a roadmap for moving forward. It saved us months of trying to figure things 
                  out on our own."
                  <footer className="mt-2 text-sm font-medium">- Jennifer Martinez, Quality Director, Pharmatech Solutions</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default ServiceHealthCheck;
