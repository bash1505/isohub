
import React, { useEffect } from 'react';

interface WordPressIntegrationProps {
  onNavigate?: (path: string) => void;
}

const WordPressIntegration: React.FC<WordPressIntegrationProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Listen for messages from WordPress parent frame
    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security (replace with your WordPress domain)
      // if (event.origin !== 'https://yourwordpresssite.com') return;
      
      if (event.data.type === 'NAVIGATE_TO') {
        onNavigate?.(event.data.path);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Send ready message to WordPress
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'REACT_APP_READY',
        height: document.body.scrollHeight
      }, '*');
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onNavigate]);

  // Auto-resize iframe based on content
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (window.parent !== window) {
        window.parent.postMessage({
          type: 'RESIZE',
          height: document.body.scrollHeight
        }, '*');
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return null;
};

export default WordPressIntegration;
