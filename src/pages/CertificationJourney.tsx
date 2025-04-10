
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, Clock, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { LazyImage } from '@/components/LazyImage';

const CertificationJourney = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const stages = [
    {
      id: 'assessment',
      title: 'Initial Assessment',
      description: 'Gap analysis to determine your current status against the ISO standard requirements.',
      status: 'completed',
      date: '15 March 2025',
      documents: ['Gap Analysis Report', 'Initial Assessment Checklist'],
      detailPath: '/services/certification#assessment',
      imageSrc: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'planning',
      title: 'Planning & Implementation',
      description: 'Develop required documentation and implement processes to meet standard requirements.',
      status: 'in-progress',
      date: '30 May 2025',
      documents: ['Process Documentation', 'Implementation Plan'],
      detailPath: '/services/implementation',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'internal-audit',
      title: 'Internal Audit',
      description: 'Verify compliance with the standard through internal auditing.',
      status: 'pending',
      date: '15 July 2025',
      documents: ['Audit Schedule', 'Audit Checklist'],
      detailPath: '/services/audits',
      imageSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'review',
      title: 'Management Review',
      description: 'Leadership review of the management system to ensure it meets objectives.',
      status: 'pending',
      date: '1 August 2025',
      documents: ['Review Meeting Agenda', 'Management Review Template'],
      detailPath: '/services/certification#review',
      imageSrc: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'certification',
      title: 'Certification Audit',
      description: 'External auditor reviews your system for certification.',
      status: 'pending',
      date: '15 September 2025',
      documents: ['Pre-Audit Checklist', 'Certification Requirements'],
      detailPath: '/services/certification#certification-audit',
      imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const handleViewDetails = (stage) => {
    navigate(stage.detailPath);
  };

  const handleContinueWorking = (stage) => {
    if (stage.id === 'planning') {
      navigate('/services/implementation');
    } else {
      toast({
        title: "Continue Working",
        description: `You're continuing work on the ${stage.title} stage.`,
      });
      // For demonstration, navigate to the same detail page
      navigate(stage.detailPath);
    }
  };

  const handleLockedStage = () => {
    toast({
      title: "Stage Locked",
      description: "You need to complete previous stages before accessing this one.",
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Certification Journey</h1>
        <p className="text-muted-foreground max-w-3xl">
          Track your progress towards ISO certification with our step-by-step journey planner.
          Each stage provides guidance and resources to help you succeed.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <LazyImage 
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop" 
            alt="ISO Certification Journey Path" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
        </div>
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="font-semibold text-xl mb-4">Your Progress</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Assessment</span>
              <span className="text-green-500 font-medium">Completed</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Implementation</span>
              <span className="text-blue-500 font-medium">In Progress</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Other Stages</span>
              <span className="text-gray-400 font-medium">Pending</span>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overall Progress:</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2.5 mt-2">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <LazyImage
                    src={stage.imageSrc}
                    alt={stage.title}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
                <div className="md:w-3/4">
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
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleViewDetails(stage)}
                    >
                      View Details
                    </Button>
                  ) : stage.status === 'in-progress' ? (
                    <Button 
                      className="w-full"
                      onClick={() => handleContinueWorking(stage)}
                    >
                      Continue Working
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      disabled 
                      className="w-full"
                      onClick={handleLockedStage}
                    >
                      Locked
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4">
            <LazyImage 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=600&auto=format&fit=crop" 
              alt="Expert ISO Consultant" 
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Need Expert Guidance?</h2>
            <p className="text-muted-foreground mb-4">Our ISO consultants can help accelerate your certification journey.</p>
            <Button asChild size="lg">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationJourney;
