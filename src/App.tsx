
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import Store from '@/pages/Store';
import DocumentStoreLanding from '@/pages/DocumentStoreLanding';
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
import ClientPortal from '@/pages/ClientPortal';
import ClientDashboard from '@/pages/ClientDashboard';
import Support from '@/pages/Support';
import CertificationJourney from '@/pages/CertificationJourney';
import ArticleDetails from '@/pages/ArticleDetails';
import DocumentDetails from '@/pages/DocumentDetails';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import ThankYou from '@/pages/ThankYou';
import { CartProvider } from '@/contexts/CartContext';
import StoreEmbed from '@/components/store/StoreEmbed';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store-landing" element={<DocumentStoreLanding />} />
            <Route path="/store/:id" element={<DocumentDetails />} />
            <Route path="/store/embed" element={<StoreEmbed />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/knowledge" element={<KnowledgeCenter />} />
            <Route path="/knowledge/:id" element={<ArticleDetails />} />
            <Route path="/consultation" element={<BookConsultation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/certification" element={<ServiceCertification />} />
            <Route path="/services/implementation" element={<ServiceImplementation />} />
            <Route path="/services/audits" element={<ServiceAudits />} />
            <Route path="/services/training" element={<ServiceTraining />} />
            <Route path="/services/support" element={<ServiceSupport />} />
            <Route path="/services/health-check" element={<ServiceHealthCheck />} />
            <Route path="/portal" element={<ClientPortal />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/certification" element={<CertificationJourney />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
