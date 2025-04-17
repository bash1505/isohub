
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ArticleFooter: React.FC = () => {
  return (
    <div className="mt-12 pt-8 border-t">
      <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
      <p className="text-muted-foreground mb-6">
        Our ISO experts can provide personalized guidance for your specific industry and needs.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link to="/consultation">Book a Consultation</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/store">Browse ISO Documents</Link>
        </Button>
      </div>
    </div>
  );
};

export default ArticleFooter;
