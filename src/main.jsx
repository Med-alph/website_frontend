import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './components/theme-provider';
import 'antd/dist/reset.css';
import './index.css';
import '@fontsource/roboto';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

// SSG: export for vite-react-ssg build (static HTML per route)
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './ssgRoutes';

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  () => {}
);

// Dev: mount app when running with vite (no SSG)
if (typeof window !== 'undefined' && !import.meta.env.SSR) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider defaultTheme="light" storageKey="medalph-ui-theme">
            <App />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
