import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ViteReactSSG } from 'vite-react-ssg';
import { ThemeProvider } from './components/theme-provider';
import { routes } from './ssgRoutes';
import 'antd/dist/reset.css';
import './index.css';
import '@fontsource/roboto';

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  () => {}
);

export function AppShell({ children }) {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="medalph-ui-theme">
        {children}
      </ThemeProvider>
    </HelmetProvider>
  );
}