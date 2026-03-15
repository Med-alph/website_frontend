import React from 'react';
import Layout from './components/Layout';
import SSGRoot from './SSGRoot';

// Direct imports instead of React.lazy
import Home from './pages/Home';
import About from './pages/About';
import ProductOverview from './pages/ProductOverview';
import Modules from './pages/Modules';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export const routes = [
  {
    path: '/',
    element: <SSGRoot />,
    entry: 'src/SSGRoot.jsx',
    children: [
      {
        element: <Layout />,
        entry: 'src/components/Layout.jsx',
        children: [
          { index: true, Component: Home },
          { path: 'about', Component: About },
          { path: 'services', Component: ProductOverview },
          { path: 'modules', Component: Modules },
          { path: 'pricing', Component: Pricing },
          { path: 'security', Component: Security },
          { path: 'contact', Component: Contact },
          { path: 'privacy', Component: PrivacyPolicy },
          { path: 'terms', Component: TermsOfService },
        ],
      },
    ],
  },
];