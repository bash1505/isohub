
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Book, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ArticleType {
  id: string;
  title: string;
  description: string;
  category: string;
  standard: string;
  readTime: string;
}

const KnowledgeCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const articles: ArticleType[] = [
    {
      id: "intro-iso9001",
      title: "Introduction to ISO 9001:2015",
      description: "Learn the basics of Quality Management Systems and how ISO 9001:2015 can benefit your organization.",
      category: "Beginner",
      standard: "ISO 9001",
      readTime: "5 min"
    },
    {
      id: "risk-based-thinking",
      title: "Risk-Based Thinking in ISO Standards",
      description: "Understand how to implement risk-based thinking across your management systems.",
      category: "Intermediate",
      standard: "Multiple",
      readTime: "8 min"
    },
    {
      id: "internal-audits",
      title: "Conducting Effective Internal Audits",
      description: "Best practices for planning and executing internal audits that add value.",
      category: "Advanced",
      standard: "Multiple",
      readTime: "12 min"
    },
    {
      id: "iso14001-benefits",
      title: "Business Benefits of ISO 14001",
      description: "Discover the ROI and competitive advantages of implementing ISO 14001.",
      category: "Beginner",
      standard: "ISO 14001",
      readTime: "6 min"
    },
    {
      id: "integrated-systems",
      title: "Integrating Multiple ISO Management Systems",
      description: "Strategies for efficiently implementing and maintaining multiple ISO standards.",
      category: "Advanced",
      standard: "Multiple",
      readTime: "15 min"
    },
    {
      id: "iso27001-controls",
      title: "Understanding ISO 27001 Security Controls",
      description: "A deep dive into Annex A controls and how to implement them effectively.",
      category: "Intermediate",
      standard: "ISO 27001",
      readTime: "10 min"
    }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.standard.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">ISO Knowledge Center</h1>
        <p className="text-muted-foreground max-w-3xl">
          Explore our library of articles, guides, and resources to deepen your understanding of ISO standards 
          and implementation best practices.
        </p>
      </header>

      <div className="relative max-w-2xl mx-auto mb-8">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles, standards, or topics..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="iso9001">ISO 9001</TabsTrigger>
          <TabsTrigger value="iso14001">ISO 14001</TabsTrigger>
          <TabsTrigger value="iso45001">ISO 45001</TabsTrigger>
          <TabsTrigger value="iso27001">ISO 27001</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Book className="h-4 w-4 text-primary" />
                      <CardTitle className="text-base">{article.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.standard}</span>
                    <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.category}</span>
                    <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">{article.description}</CardDescription>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Button variant="link" className="p-0 h-auto flex items-center gap-1">
                    Read Article
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
              <Button 
                variant="link" 
                onClick={() => setSearchTerm('')}
                className="mt-2"
              >
                Clear search
              </Button>
            </div>
          )}
        </TabsContent>
        
        {/* Filter tabs for specific standards */}
        {["iso9001", "iso14001", "iso45001", "iso27001"].map((standard) => (
          <TabsContent key={standard} value={standard} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles
                .filter(article => article.standard.toLowerCase().includes(standard.replace("iso", "iso ")))
                .map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <Book className="h-4 w-4 text-primary" />
                          <CardTitle className="text-base">{article.title}</CardTitle>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.standard}</span>
                        <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.category}</span>
                        <span className="bg-secondary text-xs rounded-full px-2 py-1">{article.readTime}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm">{article.description}</CardDescription>
                    </CardContent>
                    <div className="p-4 pt-0 mt-auto">
                      <Button variant="link" className="p-0 h-auto flex items-center gap-1">
                        Read Article
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default KnowledgeCenter;
