
import React, { useState } from 'react';
import DocumentPackageCard from '../DocumentPackageCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { documentPackages } from '@/data/documentPackages';

const StoreEmbed: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = documentPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full min-h-screen bg-background p-4">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search document packages..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPackages.map((pkg) => (
          <DocumentPackageCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
};

export default StoreEmbed;
