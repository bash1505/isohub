
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, Clock, Calendar } from 'lucide-react';

const CertificationJourney = () => {
  const stages = [
    {
      id: 'assessment',
      title: 'Initial Assessment',
      description: 'Gap analysis to determine your current status against the ISO standard requirements.',
      status: 'completed',
      date: '15 March 2025',
      documents: ['Gap Analysis Report', 'Initial Assessment Checklist']
    },
    {
      id: 'planning',
      title: 'Planning & Implementation',
      description: 'Develop required documentation and implement processes to meet standard requirements.',
      status: 'in-progress',
      date: '30 May 2025',
      documents: ['Process Documentation', 'Implementation Plan']
    },
    {
      id: 'internal-audit',
      title: 'Internal Audit',
      description: 'Verify compliance with the standard through internal auditing.',
      status: 'pending',
      date: '15 July 2025',
      documents: ['Audit Schedule', 'Audit Checklist']
    },
    {
      id: 'review',
      title: 'Management Review',
      description: 'Leadership review of the management system to ensure it meets objectives.',
      status: 'pending',
      date: '1 August 2025',
      documents: ['Review Meeting Agenda', 'Management Review Template']
    },
    {
      id: 'certification',
      title: 'Certification Audit',
      description: 'External auditor reviews your system for certification.',
      status: 'pending',
      date: '15 September 2025',
      documents: ['Pre-Audit Checklist', 'Certification Requirements']
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Certification Journey</h1>
        <p className="text-muted-foreground max-w-3xl">
          Track your progress towards ISO certification with our step-by-step journey planner.
          Each stage provides guidance and resources to help you succeed.
        </p>
      </header>

      <div className="space-y-6">
        {stages.map((stage) => (
          <Card key={stage.id} className={`border-l-4 ${stage.status === 'completed' ? 'border-l-green-500' : stage.status === 'in-progress' ? 'border-l-blue-500' : 'border-l-gray-300'}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {stage.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : stage.status === 'in-progress' ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-gray-300" />
                  )}
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{stage.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{stage.description}</CardDescription>
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium">Resources:</h4>
                <ul className="space-y-1">
                  {stage.documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {stage.status === 'completed' ? (
                <Button variant="outline" className="w-full">View Details</Button>
              ) : stage.status === 'in-progress' ? (
                <Button className="w-full">Continue Working</Button>
              ) : (
                <Button variant="outline" disabled className="w-full">Locked</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Need Expert Guidance?</h2>
          <p className="text-muted-foreground">Our ISO consultants can help accelerate your certification journey.</p>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link to="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificationJourney;
