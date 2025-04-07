
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Store from '@/pages/Store';
import KnowledgeCenter from '@/pages/KnowledgeCenter';
import BookConsultation from '@/pages/BookConsultation';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/store" element={<Store />} />
        <Route path="/knowledge" element={<KnowledgeCenter />} />
        <Route path="/consultation" element={<BookConsultation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
