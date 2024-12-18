import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/index.css'; // Consolidated Tailwind and global styles
import './styles/app.css';   // App-specific styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
