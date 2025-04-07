
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Calendar, FileText, Users, Bell, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const newsUpdates = [
    {
      id: 1,
      title: "ISO 9001:2015 Updates Coming Soon",
      description: "New amendments to ISO 9001 expected in Q3 2023.",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "ISO 27001:2022 Now Available",
      description: "The latest information security standard is now available in our document store.",
      date: "1 week ago"
    },
    {
      id: 3,
      title: "New Environmental Compliance Requirements",
      description: "Important updates to ISO 14001 implementation guidance.",
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-6">Welcome to Fisher Infusion Hub</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Your comprehensive platform for ISO standards implementation, consultation services,
          and document management. Get started with the tools and resources you need for compliance success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">ISO Knowledge Center</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Access articles, videos, and glossaries about ISO standards searchable by industry or keyword.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/knowledge">Explore Knowledge</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Book a Consultation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Schedule virtual or on-site consultations with Fisher Infusion experts to guide your ISO journey.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/consultation">Schedule Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Document Store</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Purchase ISO standard documentation bundles with secure payment and instant download options.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/store">Browse Store</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">My Certification Journey</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Track your ISO implementation status with to-do checklists, milestone tracking, and reminders.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/certification">View Journey</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Client Portal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Secure login for existing clients to access exclusive templates, past purchases, and support.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/portal">Access Portal</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Live Chat & Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="min-h-[60px]">
                Direct messaging with the Fisher Infusion team and option to request custom solutions.
              </CardDescription>
              <Button asChild className="w-full mt-2" variant="outline">
                <Link to="/support">Start Chat</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
        </div>
        
        <div className="space-y-4">
          {newsUpdates.map(update => (
            <Card key={update.id} className="hover:bg-muted/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{update.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{update.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-4 text-right">
          <Button variant="link" size="sm">
            View all updates
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
