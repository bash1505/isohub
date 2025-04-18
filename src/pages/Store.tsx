
import React, { useState } from 'react';
import StoreHeader from '@/components/store/StoreHeader';
import SearchAndFilter from '@/components/store/SearchAndFilter';
import DocumentPackageGrid from '@/components/store/DocumentPackageGrid';
import EmbedCodeSection from '@/components/store/EmbedCodeSection';
import { documentPackages } from '@/data/documentPackages';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = documentPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => setSearchTerm('');

  return (
    <div className="container mx-auto py-8 px-4">
      <StoreHeader />
      <SearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DocumentPackageGrid 
        packages={filteredPackages} 
        searchTerm={searchTerm} 
        clearSearch={clearSearch} 
      />
      <EmbedCodeSection />
    </div>
  );
};

export default Store;
