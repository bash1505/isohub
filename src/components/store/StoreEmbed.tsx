
import React from 'react';
import DocumentPackageCard from '../DocumentPackageCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const StoreEmbed: React.FC = () => {
  const documentPackages = [
    {
      id: "iso-9001",
      title: "ISO 9001:2015 – Quality Management System Package",
      description: "Complete documentation package for ISO 9001:2015 QMS implementation",
      price: 7999,
      includes: [
        "Quality Manual template",
        "Quality Policy and Objectives",
        "Process interaction map",
        "Risk & opportunity register",
        "Internal audit checklist"
      ],
      importance: "Essential for quality management certification"
    },
    {
      id: "iso-14001",
      title: "ISO 14001:2015 – Environmental Management System Package",
      description: "Complete documentation package for ISO 14001:2015 EMS implementation",
      price: 6999,
      includes: [
        "Environmental Manual",
        "Aspects & Impacts Register",
        "Legal Requirements Tracker",
        "Emergency Preparedness Plan"
      ],
      importance: "Critical for environmental compliance"
    }
  ];

  return (
    <div className="w-full h-full min-h-screen bg-background p-4">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search document packages..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentPackages.map((pkg) => (
          <DocumentPackageCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
};

export default StoreEmbed;
