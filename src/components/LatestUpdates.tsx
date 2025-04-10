
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface UpdateItem {
  id: number;
  title: string;
  description: string;
  date: string;
  fullContent: string;
}

export const LatestUpdates: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const newsUpdates: UpdateItem[] = [
    {
      id: 1,
      title: "ISO 9001:2015 Updates Coming Soon",
      description: "New amendments to ISO 9001 expected in Q3 2023.",
      date: "2 days ago",
      fullContent: "The International Organization for Standardization (ISO) has announced potential amendments to ISO 9001:2015, expected to be released in Q3 2023. These updates aim to address emerging quality management challenges in the digital transformation era and provide clearer guidance on risk-based thinking implementation. Organizations currently certified to ISO 9001:2015 should begin preparing for these changes to ensure a smooth transition when the updates are officially released."
    },
    {
      id: 2,
      title: "ISO 27001:2022 Now Available",
      description: "The latest information security standard is now available in our document store.",
      date: "1 week ago",
      fullContent: "We are pleased to announce that the updated ISO 27001:2022 documentation is now available in our document store. This latest version of the information security management standard includes significant changes to Annex A controls, restructuring from 14 to 4 main clauses, and introduces new controls for threat intelligence and cloud security. Our comprehensive documentation package includes all templates, procedures, and policies needed for implementing or transitioning to the 2022 version."
    },
    {
      id: 3,
      title: "New ISO 22000 Food Safety Resources",
      description: "Comprehensive food safety management system templates and guides now available.",
      date: "2 weeks ago",
      fullContent: "We've expanded our resource library to include specialized ISO 22000:2018 Food Safety Management System documentation and implementation guides. These resources are designed to help food manufacturers, processors, and handlers establish effective HACCP-based food safety systems that comply with international standards. The package includes HACCP plan templates, prerequisite program documentation, food safety policy templates, and comprehensive procedure guides for managing food safety hazards."
    }
  ];

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
      </div>
      
      <div className="space-y-4">
        {newsUpdates.map(update => (
          <Collapsible key={update.id} open={expandedId === update.id} onOpenChange={() => toggleExpand(update.id)}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{update.title}</CardTitle>
                  <span className="text-xs text-muted-foreground">{update.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{update.description}</p>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="mt-2 h-8 p-0">
                    <span className="flex items-center text-xs">
                      {expandedId === update.id ? 'Read less' : 'Read more'} 
                      {expandedId === update.id ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />}
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm">{update.fullContent}</p>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <Button variant="link" size="sm">
          View all updates
        </Button>
      </div>
    </section>
  );
};
