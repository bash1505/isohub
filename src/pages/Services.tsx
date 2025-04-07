
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, ClipboardCheck, CheckSquare, Building, BadgeCheck } from 'lucide-react';

const serviceCategories = [
  {
    id: 'certification',
    title: 'ISO Certification Consulting',
    description: 'Expert guidance to help your business achieve ISO certification with confidence.',
    icon: BadgeCheck,
    path: '/services/certification'
  },
  {
    id: 'implementation',
    title: 'ISO Implementation Support',
    description: 'Get ISO-ready with our end-to-end implementation support tailored to your business.',
    icon: Building,
    path: '/services/implementation'
  },
  {
    id: 'audits',
    title: 'Internal Audits & Gap Assessments',
    description: 'Stay audit-ready and identify gaps before the auditor does with our expert assessments.',
    icon: ClipboardCheck,
    path: '/services/audits'
  },
  {
    id: 'training',
    title: 'Training & Workshops',
    description: 'Empower your team with ISO knowledge and skills through our specialized training programs.',
    icon: Users,
    path: '/services/training'
  },
  {
    id: 'support',
    title: 'Implementation Support',
    description: 'Ongoing assistance and guidance throughout your ISO implementation journey.',
    icon: CheckSquare,
    path: '/services/support'
  },
  {
    id: 'health-check',
    title: 'ISO Compliance Health Check',
    description: 'Free tool to assess your current compliance status and identify improvement areas.',
    icon: Calendar,
    path: '/services/health-check'
  }
];

const Services = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Our Expert Solutions</h1>
        <p className="text-muted-foreground max-w-3xl">
          Professional ISO services to empower your business. From planning to certification – we walk with you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((service) => (
          <Card key={service.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <service.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <Button asChild variant="outline" className="w-full">
                <Link to={service.path}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 rounded-lg p-6 border border-primary/20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground">Book a free discovery call with our ISO experts to discuss your needs.</p>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link to="/consultation">Book a Free Discovery Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
