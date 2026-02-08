import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from "./components/theme-provider"
import 'antd/dist/reset.css';
import './index.css';
import '@fontsource/roboto';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="medalph-ui-theme">
        <App />
        <SpeedInsights />
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

