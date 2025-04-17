
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { articles } from '@/data/articleContent';
import ArticleHeader from '@/components/article/ArticleHeader';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleFooter from '@/components/article/ArticleFooter';

const ArticleDetails: React.FC = () => {
  const { id } = useParams();
  const article = id ? articles[id] : null;

  if (!article) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/knowledge">Return to Knowledge Center</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/knowledge" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Center
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        <ArticleHeader article={article} />
        <ArticleContent content={article.content} />
        <ArticleFooter />
      </article>
    </div>
  );
};

export default ArticleDetails;
