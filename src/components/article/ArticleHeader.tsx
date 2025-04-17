
import React from 'react';
import { User, Calendar, Book } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import { ArticleContent } from '@/types/article';

interface ArticleHeaderProps {
  article: ArticleContent;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <header className="mb-8">
      <div className="rounded-lg overflow-hidden mb-6 h-64">
        <LazyImage 
          src={article.imageSrc} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">{article.title}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Book className="h-4 w-4" />
          <span>{article.readTime} read</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.standard}</span>
        <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.category}</span>
      </div>
    </header>
  );
};

export default ArticleHeader;
