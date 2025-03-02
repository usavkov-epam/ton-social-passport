import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css'

WebApp.ready();

if (import.meta.env.DEV) {
  eruda.init();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
