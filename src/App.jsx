import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductOverview = lazy(() => import('./pages/ProductOverview'));
const Modules = lazy(() => import('./pages/Modules'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Security = lazy(() => import('./pages/Security'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Loading Fallback Component
const LoadingSpinner = () => (
  <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ProductOverview />} />
            <Route path="modules" element={<Modules />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="security" element={<Security />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
