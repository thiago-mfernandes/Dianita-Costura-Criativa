import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Produtos from './pages/Produtos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Produtos />
  </React.StrictMode>
);

