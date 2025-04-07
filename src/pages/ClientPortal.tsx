
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientLogin from '@/components/ClientLogin';
import ClientRegister from '@/components/ClientRegister';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState<string>('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8">Client Portal</h1>
          
          <div className="bg-background rounded-lg border border-border shadow-sm p-6">
            <Tabs 
              defaultValue="login" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <ClientLogin onSuccess={() => {}} />
              </TabsContent>
              <TabsContent value="register">
                <ClientRegister onSuccess={() => setActiveTab('login')} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
