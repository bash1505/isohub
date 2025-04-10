
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyImage } from '@/components/LazyImage';
import { ArticleType } from '@/types/knowledge';

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <LazyImage
          src={article.imageSrc}
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Book className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">{article.title}</CardTitle>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.standard}</span>
          <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.category}</span>
          <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.readTime}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">{article.description}</CardDescription>
      </CardContent>
      <div className="p-4 pt-0 mt-auto">
        <Button variant="link" className="p-0 h-auto flex items-center gap-1" asChild>
          <Link to={`/knowledge/${article.id}`}>
            Read Article
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ArticleCard;
