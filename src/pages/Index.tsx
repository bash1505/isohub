
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import CartButton from '@/components/CartButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                  <span className="sr-only">Navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[380px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/knowledge" className="text-lg font-medium hover:text-primary transition-colors">
                    ISO Knowledge Center
                  </Link>
                  <Link to="/services" className="text-lg font-medium hover:text-primary transition-colors">
                    Our Services
                  </Link>
                  <Link to="/certification" className="text-lg font-medium hover:text-primary transition-colors">
                    My Certification Journey
                  </Link>
                  <Link to="/consultation" className="text-lg font-medium hover:text-primary transition-colors">
                    Book a Consultation
                  </Link>
                  <Link to="/store" className="text-lg font-medium hover:text-primary transition-colors">
                    Document Store
                  </Link>
                  <Link to="/portal" className="text-lg font-medium hover:text-primary transition-colors">
                    Client Portal
                  </Link>
                  <Link to="/support" className="text-lg font-medium hover:text-primary transition-colors">
                    Live Chat & Support
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl font-bold text-primary">Fisher Infusion Hub</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/knowledge" className="text-sm font-medium hover:text-primary transition-colors">
                Knowledge
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/consultation" className="text-sm font-medium hover:text-primary transition-colors">
                Consultation
              </Link>
              <Link to="/store" className="text-sm font-medium hover:text-primary transition-colors">
                Store
              </Link>
              <Link to="/portal" className="text-sm font-medium hover:text-primary transition-colors">
                Client Portal
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <CartButton />
            <Button variant="outline" size="sm" asChild>
              <Link to="/portal">Client Login</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <Dashboard />
      </main>

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
    </div>
  );
};

export default Index;
