
import React from 'react';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { ArticleType } from '@/types/knowledge';

interface ArticleGridProps {
  articles: ArticleType[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
          <Button 
            variant="link" 
            onClick={() => setSearchTerm('')}
            className="mt-2"
          >
            Clear search
          </Button>
        </div>
      )}
    </>
  );
};

export default ArticleGrid;
