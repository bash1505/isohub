
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import CartButton from '@/components/CartButton';

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
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
  );
};

export default Header;
