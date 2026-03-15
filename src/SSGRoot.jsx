import React from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme-provider';
import ScrollToTop from './components/ScrollToTop';

/**
 * Root wrapper for vite-react-ssg: provides Helmet, Theme, and ScrollToTop.
 * Layout and page content render via Outlet.
 */
const SSGRoot = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="medalph-ui-theme">
      <ScrollToTop />
      <Outlet />
    </ThemeProvider>
  </HelmetProvider>
);

export default SSGRoot;
