
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Calendar, Clock, GraduationCap } from 'lucide-react';

const trainingFormats = [
  {
    id: 'onsite',
    title: 'On-site workshops',
    description: 'Hands-on training delivered at your facility, tailored to your specific processes and needs.'
  },
  {
    id: 'virtual',
    title: 'Virtual instructor-led training',
    description: 'Live online sessions with the same interaction and learning benefits as in-person training.'
  },
  {
    id: 'elearning',
    title: 'Self-paced e-learning modules',
    description: 'Flexible online courses that allow staff to learn at their own pace and on their own schedule.'
  },
  {
    id: 'hybrid',
    title: 'Hybrid training programs',
    description: 'Combined approach with both online learning and face-to-face sessions for optimal results.'
  }
];

const popularPrograms = [
  {
    id: 'fundamentals',
    title: 'ISO Management System Fundamentals',
    duration: '1 day',
    participants: '5-15',
    description: 'A comprehensive overview of ISO management systems, key principles, and implementation basics.'
  },
  {
    id: 'auditor',
    title: 'Internal Auditor Training',
    duration: '2 days',
    participants: '5-12',
    description: 'Learn how to plan, conduct, and report on internal audits effectively within your organization.'
  },
  {
    id: 'risk',
    title: 'Process Approach & Risk-Based Thinking',
    duration: '1 day',
    participants: '5-15',
    description: 'Master the process approach and risk management techniques central to modern ISO standards.'
  },
  {
    id: 'rca',
    title: 'Root Cause Analysis & Corrective Action',
    duration: '1 day',
    participants: '5-15',
    description: 'Effective methods to identify root causes of problems and implement lasting solutions.'
  },
  {
    id: 'document',
    title: 'Document Control Essentials',
    duration: '0.5 day',
    participants: '5-20',
    description: 'Best practices for managing documentation in compliance with ISO requirements.'
  }
];

const whyChoose = [
  'Delivered by certified lead auditors with real-world implementation experience',
  'Practical exercises based on your industry scenarios',
  'Post-training support and resources',
  'Certificate of completion for all participants',
  'Customized content to address your specific challenges'
];

const ServiceTraining = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Training & Workshops</h1>
        <p className="text-primary font-semibold text-xl mb-4">
          Empower Your Team with ISO Knowledge and Skills
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Fisher Infusion offers specialized training programs designed to build your team's capacity to
          implement, maintain, and improve ISO management systems. Our practical, engaging approach
          ensures participants gain skills they can apply immediately.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Training Formats</h2>
                <div className="space-y-4">
                  {trainingFormats.map((format) => (
                    <div key={format.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium">{format.title}</h3>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Popular Training Programs</h2>
                <div className="space-y-6">
                  {popularPrograms.map((program) => (
                    <div key={program.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium text-lg">{program.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 mb-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{program.participants} participants</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Why Choose Our Training</h2>
                <ul className="space-y-3">
                  {whyChoose.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Our Training Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Learn</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Engaging presentation of concepts, principles, and requirements with real-world examples.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Practice</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hands-on exercises and group activities to apply knowledge in realistic scenarios.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Implement</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Action planning for applying new skills in your workplace with ongoing support.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Master</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Follow-up resources and coaching to solidify learning and address questions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Client Testimonial</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "The internal audit training from Fisher Infusion was game-changing. Our team now conducts thorough audits that drive real improvements."
                  <footer className="mt-2 text-sm font-medium">- David Chen, Operations Manager, MediCore Supplies</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 sticky top-24">
            <h3 className="font-semibold text-xl mb-4">Ready to Build Your Team's Capabilities?</h3>
            <p className="mb-6 text-muted-foreground">
              Discuss your training needs with our experienced instructors and get a customized program.
            </p>
            <Button asChild className="w-full mb-4">
              <Link to="/consultation">Request Training Information</Link>
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Custom training programs for groups of 5 or more participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTraining;
