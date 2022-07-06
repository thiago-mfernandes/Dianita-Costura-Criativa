import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Home from 'pages/Home';
import About from 'components/about';
import Materials from 'components/materials';
import Products from 'components/products';
import Location from 'components/location';
import Depoiments from 'components/depoiments';
import Contact from 'components/contact';
import Footer from 'components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <Materials />
    <Products />
    <Location />
    <Depoiments />
    <Contact />
    <Footer />
  </React.StrictMode>
);
