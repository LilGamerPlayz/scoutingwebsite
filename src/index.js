import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderPages from './RenderPages';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderPages />
  </React.StrictMode>
);