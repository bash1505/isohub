
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
import ServiceTraining from '@/pages/ServiceTraining';
import ServiceSupport from '@/pages/ServiceSupport';
import ServiceHealthCheck from '@/pages/ServiceHealthCheck';

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
        <Route path="/services/training" element={<ServiceTraining />} />
        <Route path="/services/support" element={<ServiceSupport />} />
        <Route path="/services/health-check" element={<ServiceHealthCheck />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
