import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes.global';

const root: any = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);