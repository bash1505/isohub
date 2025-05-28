
import React from 'react';
import { Button } from '@/components/ui/button';

const WordPressHeader = () => {
  const navigateToWordPress = (path: string = '') => {
    if (window.parent !== window) {
      // We're in an iframe, send message to WordPress
      window.parent.postMessage({
        type: 'NAVIGATE_TO_WP',
        path: path
      }, '*');
    } else {
      // Direct navigation
      window.location.href = `/${path}`;
    }
  };

  return (
    <div className="bg-primary/5 border-b border-border py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigateToWordPress()}
          >
            ← Back to Main Site
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          Fisher Infusion Hub Application
        </div>
      </div>
    </div>
  );
};

export default WordPressHeader;
