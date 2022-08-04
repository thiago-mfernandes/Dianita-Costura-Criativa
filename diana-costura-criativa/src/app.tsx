
import Footer from 'components/footer';
import Menu from 'components/menu';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import About from 'components/about';
import Location from 'components/location';
import Contact from 'components/contact';
import Depoiments from 'components/depoiments';
import ExchangePolicy from 'components/exchangePolicy';
import Header from 'components/header';
import Materials from 'components/materials';
import Products from 'components/products';

const Contato = lazy(() => import('components/contact'));

export default function App() {
  return (
    <motion.main
      initial={{backgroundColor: '#fff', opacity: 0}}
      animate={{backgroundColor: 'transparent', opacity: 1}}
      transition={{duration: 0.45}}
    >
      <Menu />
      <Suspense fallback={<p> Carregando... </p>}>
        <Header />
        <About />
        <Materials />
        <Products />
        <ExchangePolicy />
        <Location />
        <Depoiments />
        <Contact /> 
      </Suspense>
      <Footer />
    </motion.main>
  );
}
