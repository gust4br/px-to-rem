import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { App } from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Toaster position="top-right"/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
