import React from 'react';
import Layout from './components/Layout';

// Same lazy pages as App.jsx (no component changes)
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ProductOverview = React.lazy(() => import('./pages/ProductOverview'));
const Modules = React.lazy(() => import('./pages/Modules'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Security = React.lazy(() => import('./pages/Security'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

import SSGRoot from './SSGRoot';

/** Routes for vite-react-ssg (mirrors App.jsx structure). */
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
