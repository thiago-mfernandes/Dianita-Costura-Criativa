import Home from 'pages/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import About from 'components/about';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>
);

