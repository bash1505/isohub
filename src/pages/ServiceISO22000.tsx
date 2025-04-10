
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, CheckSquare, Award, ShieldCheck, Users, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyImage } from '@/components/LazyImage';

const ServiceISO22000 = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">ISO 22000 Food Safety Management</h1>
        <p className="text-muted-foreground max-w-3xl">
          Expert guidance for implementing and maintaining an effective Food Safety Management System that ensures compliance and certification.
        </p>
      </header>

      <div className="mb-12">
        <LazyImage 
          src="https://images.unsplash.com/photo-1615866031617-a6e144b7a587?q=80&w=1200&auto=format&fit=crop" 
          alt="Food Safety Management" 
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>What is ISO 22000?</h2>
            <p>
              ISO 22000 is an international standard that specifies requirements for a food safety management system (FSMS). 
              It maps out what an organization needs to do to demonstrate its ability to control food safety hazards and ensure 
              food is safe for consumption.
            </p>
            
            <h2>Why Choose ISO 22000?</h2>
            <p>
              Implementing ISO 22000 helps your organization:
            </p>
            <ul>
              <li>Systematically control food safety hazards</li>
              <li>Ensure compliance with regulatory requirements</li>
              <li>Improve customer confidence in your products</li>
              <li>Optimize processes and reduce waste</li>
              <li>Facilitate international trade and market access</li>
              <li>Integrate with other ISO management systems</li>
            </ul>

            <h2>Our ISO 22000 Services</h2>
            <p>
              Fisher Infusion Hub provides comprehensive support for your ISO 22000 certification journey:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Gap Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive assessment of your current practices against ISO 22000 requirements to identify improvement areas.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">HACCP Implementation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert guidance in developing and implementing Hazard Analysis and Critical Control Points systems.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Specialized Training</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customized training programs for your team on food safety principles, HACCP, and ISO 22000 requirements.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Certification Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  End-to-end assistance through the certification process, including pre-audit preparation and corrective actions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl">Ready to Improve Food Safety?</CardTitle>
              <CardDescription>
                Get expert guidance on implementing ISO 22000 in your organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">Customized implementation plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">Expert consultants with food industry experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">Comprehensive documentation templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">Ongoing support and maintenance</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link to="/consultation">Book a Free Consultation</Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/health-check">Take ISO Readiness Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="bg-primary/5 rounded-lg p-8 border border-primary/20 mb-12">
        <h2 className="text-2xl font-bold mb-6">ISO 22000 Documentation Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Food Safety Management System Manual</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>HACCP Plan Templates and Examples</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Prerequisite Programs (PRPs) Documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Standard Operating Procedures (SOPs)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Food Safety Policy and Objectives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Risk Assessment Templates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Internal Audit Checklists</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              Our comprehensive documentation package gives you all the templates and guidance you need to implement 
              ISO 22000 efficiently.
            </p>
            <Button asChild size="lg">
              <Link to="/store">View Documentation Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your ISO 22000 Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Book a free discovery call with our ISO 22000 experts to discuss your needs and get a customized implementation plan.
        </p>
        <Button asChild size="lg">
          <Link to="/consultation">Book a Free Discovery Call</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceISO22000;
