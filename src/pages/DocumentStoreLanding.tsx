
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, CheckCircle, Star, FileText, Download, Users } from 'lucide-react';
import DocumentPackageCard from '@/components/DocumentPackageCard';
import { documentPackages } from '@/data/documentPackages';

const DocumentStoreLanding = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = documentPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPackages = documentPackages.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Professional ISO Document Packages
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Save months of work with our expertly crafted ISO documentation templates. 
            Get certified faster with professionally prepared document packages.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for ISO standards (9001, 14001, 45001...)"
              className="pl-12 h-14 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <FileText className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-muted-foreground">Document Templates</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">1,200+</span>
              </div>
              <p className="text-muted-foreground">Certified Companies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">4.9/5</span>
              </div>
              <p className="text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Document Packages?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionally prepared templates that save you time and ensure compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Download</h3>
              <p className="text-sm text-muted-foreground">Get your documents immediately after purchase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Crafted</h3>
              <p className="text-sm text-muted-foreground">Created by ISO certification experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fully Editable</h3>
              <p className="text-sm text-muted-foreground">Customize templates for your organization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">60-Day Support</h3>
              <p className="text-sm text-muted-foreground">Email support included with every purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Document Packages</h2>
            <p className="text-lg text-muted-foreground">Our most popular ISO documentation bundles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPackages.map((pkg) => (
              <DocumentPackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="px-8">
              View All {documentPackages.length} Document Packages
            </Button>
          </div>
        </div>
      </section>

      {/* All Packages Section */}
      {searchTerm && (
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Search Results</h2>
              <p className="text-lg text-muted-foreground">
                Found {filteredPackages.length} packages matching "{searchTerm}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <DocumentPackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your ISO Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 1,200 companies that have successfully achieved ISO certification with our document packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Browse All Packages
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentStoreLanding;
