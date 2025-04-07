
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Store from '@/pages/Store';
import KnowledgeCenter from '@/pages/KnowledgeCenter';
import BookConsultation from '@/pages/BookConsultation';
import NotFound from '@/pages/NotFound';
import Services from '@/pages/Services';
import ServiceCertification from '@/pages/ServiceCertification';
import ServiceImplementation from '@/pages/ServiceImplementation';
import ServiceAudits from '@/pages/ServiceAudits';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/store" element={<Store />} />
        <Route path="/knowledge" element={<KnowledgeCenter />} />
        <Route path="/consultation" element={<BookConsultation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/certification" element={<ServiceCertification />} />
        <Route path="/services/implementation" element={<ServiceImplementation />} />
        <Route path="/services/audits" element={<ServiceAudits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
