
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, FileText } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex rounded-full bg-green-100 p-6 mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Your order has been successfully processed. A confirmation email with your receipt and download instructions has been sent to your email address.
        </p>
        
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="font-medium text-xl mb-4">What's Next?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-left">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Download Your Files</h3>
                <p className="text-sm text-muted-foreground">
                  Your purchased files are available for immediate download from the email we sent you or from your account dashboard.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-left">
              <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Explore Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Review the included documentation to learn how to effectively use and customize the templates for your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/dashboard">Go to My Account</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/store">Continue Shopping</Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          If you have any questions or need assistance, please contact our support team at <a href="mailto:support@fisherinfused.co.za" className="text-primary hover:underline">support@fisherinfused.co.za</a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
