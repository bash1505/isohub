
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NewsletterSubscribe } from '@/components/NewsletterSubscribe';
import { articles } from '@/data/knowledgeArticles';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import KnowledgeSearch from '@/components/knowledge/KnowledgeSearch';
import ArticleGrid from '@/components/knowledge/ArticleGrid';

const KnowledgeCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.standard.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <KnowledgeHeader />
      <KnowledgeSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Content</TabsTrigger>
              <TabsTrigger value="iso9001">ISO 9001</TabsTrigger>
              <TabsTrigger value="iso14001">ISO 14001</TabsTrigger>
              <TabsTrigger value="iso45001">ISO 45001</TabsTrigger>
              <TabsTrigger value="iso27001">ISO 27001</TabsTrigger>
              <TabsTrigger value="iso22000">ISO 22000</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <ArticleGrid 
                articles={filteredArticles} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
              />
            </TabsContent>
            
            {/* Filter tabs for specific standards */}
            {["iso9001", "iso14001", "iso45001", "iso27001", "iso22000"].map((standard) => (
              <TabsContent key={standard} value={standard} className="mt-0">
                <ArticleGrid 
                  articles={filteredArticles.filter(article => 
                    article.standard.toLowerCase().includes(standard.replace("iso", "iso "))
                  )} 
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      <div className="max-w-md mx-auto">
        <NewsletterSubscribe />
      </div>
    </div>
  );
};

export default KnowledgeCenter;
