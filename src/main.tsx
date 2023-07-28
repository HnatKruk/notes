import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './router';
import './components/styles/styles.module.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
