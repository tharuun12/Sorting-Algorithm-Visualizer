import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Analytics } from '@vercel/analytics/react'; // Import Analytics
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics /> {/* Add Analytics component */}
  </StrictMode>
);
