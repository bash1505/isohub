
import React from 'react';
import DocumentPackageCard, { DocumentPackage } from '@/components/DocumentPackageCard';
import { Button } from '@/components/ui/button';

interface DocumentPackageGridProps {
  packages: DocumentPackage[];
  searchTerm: string;
  clearSearch: () => void;
}

const DocumentPackageGrid: React.FC<DocumentPackageGridProps> = ({ 
  packages, 
  searchTerm, 
  clearSearch 
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <DocumentPackageCard key={pkg.id} package={pkg} />
        ))}
      </div>

      {packages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No document packages found matching your search.</p>
          <Button 
            variant="link" 
            onClick={clearSearch}
            className="mt-2"
          >
            Clear search
          </Button>
        </div>
      )}
    </>
  );
};

export default DocumentPackageGrid;
