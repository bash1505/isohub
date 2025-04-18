
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmbedCodeSection: React.FC = () => {
  const { toast } = useToast();
  
  const embedCode = `<iframe
  src="${window.location.origin}/store/embed"
  width="100%"
  height="800"
  frameborder="0"
></iframe>`;

  const handleCopyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      toast({
        title: "Copied to Clipboard",
        description: "Embed code has been copied successfully.",
      });
    }).catch((err) => {
      toast({
        title: "Copy Failed",
        description: "Unable to copy embed code.",
        variant: "destructive"
      });
    });
  };

  return (
    <div className="mb-8">
      <details className="bg-muted p-4 rounded-lg">
        <summary className="font-medium cursor-pointer">Embed Store</summary>
        <div className="mt-4 flex items-center gap-4">
          <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto flex-grow">
            <code>{embedCode}</code>
          </pre>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleCopyEmbedCode}
            className="shrink-0"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </details>
    </div>
  );
};

export default EmbedCodeSection;
