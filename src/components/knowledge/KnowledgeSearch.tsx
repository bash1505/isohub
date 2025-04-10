
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface KnowledgeSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const KnowledgeSearch: React.FC<KnowledgeSearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search articles, standards, or topics..."
        className="pl-10"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default KnowledgeSearch;
