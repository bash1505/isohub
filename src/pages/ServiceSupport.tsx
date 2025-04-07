
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, FileSpreadsheet, FileText, Clock } from 'lucide-react';

const supportPackages = [
  {
    id: 'essential',
    title: 'Essential Package',
    features: [
      'Documentation templates and guidance',
      'Monthly check-in calls',
      'Email support (response within 48 hours)',
      'ISO requirements interpretation',
      'Basic implementation tracking tools'
    ]
  },
  {
    id: 'standard',
    title: 'Standard Package',
    features: [
      'All Essential Package features',
      'Weekly progress calls',
      'Document review and feedback',
      'Implementation planning assistance',
      'Gap assessment and action planning',
      'Next-day email support'
    ]
  },
  {
    id: 'premium',
    title: 'Premium Package',
    features: [
      'All Standard Package features',
      'On-site support days (quantity based on project)',
      'Staff awareness and training sessions',
      'Mock audit before certification',
      'Direct access to consultant via phone',
      'Certification body coordination'
    ]
  }
];

const durationOptions = [
  {
    id: 'accelerated',
    title: '3-Month Accelerated Implementation',
    description: 'Intensive support for organizations with dedicated resources who need certification quickly.',
    icon: Clock
  },
  {
    id: 'standard',
    title: '6-Month Standard Implementation',
    description: 'Our most popular timeline, balancing efficiency with realistic implementation pace.',
    icon: Clock
  },
  {
    id: 'comprehensive',
    title: '12-Month Comprehensive Implementation',
    description: 'Thorough approach allowing for gradual change management and deep organizational adoption.',
    icon: Clock
  }
];

const methodology = [
  {
    id: 'phased',
    title: 'Phased approach with clear milestones',
    description: 'Breaking down the implementation into manageable stages with defined deliverables.'
  },
  {
    id: 'tracking',
    title: 'Regular progress tracking and adjustment',
    description: 'Continuous monitoring of implementation status with course corrections as needed.'
  },
  {
    id: 'transfer',
    title: 'Knowledge transfer to your team',
    description: 'Building internal capability so your team can maintain the system independently.'
  },
  {
    id: 'sustainable',
    title: 'Sustainable system design',
    description: 'Creating processes and documentation that work for your business long-term.'
  }
];

const includedResources = [
  {
    title: 'Implementation Toolkit',
    description: 'Templates, checklists, and guides tailored to your ISO standard',
    icon: FileText
  },
  {
    title: 'Progress Tracking',
    description: 'Monthly progress review meetings with detailed status reports',
    icon: FileSpreadsheet
  },
  {
    title: 'Training Materials',
    description: 'Staff awareness and role-specific training resources',
    icon: CheckCircle2
  },
  {
    title: 'Post-Implementation Support',
    description: '3 months of support after system implementation',
    icon: MessageSquare
  }
];

const ServiceSupport = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Implementation Support</h1>
        <p className="text-primary font-semibold text-xl mb-4">
          Ongoing Assistance Throughout Your ISO Journey
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Fisher Infusion provides flexible, expert support to guide you through the ISO implementation 
          process. Our packages are designed to complement your team's capabilities and fill any 
          resource or knowledge gaps, ensuring a smooth and successful certification journey.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Our Support Packages</h2>
                <div className="space-y-6">
                  {supportPackages.map((pkg) => (
                    <div key={pkg.id} className="border border-border rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-3">{pkg.title}</h3>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Support Duration Options</h2>
                <div className="space-y-4">
                  {durationOptions.map((option) => (
                    <div key={option.id} className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <option.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Implementation Methodology</h2>
                <div className="space-y-4">
                  {methodology.map((item) => (
                    <div key={item.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Included Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {includedResources.map((resource, index) => (
                    <div key={index} className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">{resource.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "After struggling with ISO 14001 implementation for nearly a year, we brought in Fisher Infusion. 
                  Their structured approach helped us get certified within 3 months."
                  <footer className="mt-2 text-sm font-medium">- Anna Rodriguez, EHS Director, GreenSolutions Inc.</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
            <h3 className="font-semibold text-xl mb-4">Get Implementation Support</h3>
            <p className="mb-6 text-muted-foreground">
              Discuss your implementation needs with our experts and get a customized support package.
            </p>
            <Button asChild className="w-full mb-4">
              <Link to="/consultation">Request Support Information</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Flexible payment options available for all support packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSupport;
