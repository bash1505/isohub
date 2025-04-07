
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, Clock, Calendar, FileQuestion, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for a client dashboard
  const upcomingMilestones = [
    { id: 1, title: 'Document Review', date: '2025-04-15', status: 'upcoming' },
    { id: 2, title: 'Stage 1 Audit', date: '2025-05-10', status: 'upcoming' },
    { id: 3, title: 'Gap Assessment', date: '2025-04-22', status: 'upcoming' }
  ];
  
  const documentStatus = [
    { id: 1, name: 'Quality Manual', status: 'approved', updated: '2025-03-28' },
    { id: 2, name: 'Procedures', status: 'in-review', updated: '2025-04-02' },
    { id: 3, name: 'Work Instructions', status: 'draft', updated: '2025-04-05' },
    { id: 4, name: 'Forms & Records', status: 'approved', updated: '2025-03-30' }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <Button variant="outline" onClick={() => navigate('/')}>Sign Out</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Certification Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">In Progress</div>
            <p className="text-xs text-muted-foreground mt-1">ISO 9001:2015</p>
            <div className="mt-2 flex items-center text-sm">
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <span className="ml-2 font-medium">65%</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Project Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">147 Days</div>
            <p className="text-xs text-muted-foreground mt-1">Remaining until target certification</p>
            <p className="text-sm mt-2">Target Date: <span className="font-medium">September 1, 2025</span></p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 Hours</div>
            <p className="text-xs text-muted-foreground mt-1">Remaining from package</p>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="bg-primary/10 p-2 rounded mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Scheduled for {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="mr-2 h-4 w-4" />
              View Full Timeline
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Documents Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documentStatus.map((doc) => (
                <div key={doc.id} className="flex items-start justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{doc.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Updated: {new Date(doc.updated).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    {doc.status === 'approved' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Approved
                      </span>
                    ) : doc.status === 'in-review' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400">
                        <FileQuestion className="mr-1 h-3 w-3" />
                        In Review
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400">
                        <FileText className="mr-1 h-3 w-3" />
                        Draft
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Download className="mr-2 h-4 w-4" />
              Document Repository
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDashboard;
