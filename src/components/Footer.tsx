
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-12">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Fisher Infusion Hub</h3>
            <p className="text-muted-foreground text-sm">
              Your all-in-one platform for ISO standards, consultations,
              and documentation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/knowledge" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ISO Knowledge Center
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Document Store
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <div className="mb-2">
                <strong>Managing Director:</strong> Sebastian Fisher<br />
                Email: sebastian@fisherinfused.co.za<br />
                Phone: +27 78 647 4544
              </div>
              <div>
                <strong>Operations Director:</strong> Estelle Fisher<br />
                Email: estelle@fisherinfused.co.za<br />
                Phone: +27 78 067 2552
              </div>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fisher Infusion Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
