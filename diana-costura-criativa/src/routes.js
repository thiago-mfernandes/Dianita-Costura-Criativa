import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Footer from 'components/footer';
import Menu from 'components/menu';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';


const Contato = lazy(() => import('pages/Contato'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function AppRouter() {
  return (
    <motion.main
      initial={{backgroundColor: '#fff', opacity: 0}}
      animate={{backgroundColor: 'transparent', opacity: 1}}
      transition={{duration: 0.45}}
    >
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='produtos' element={<Produtos />} />
            <Route path='contato' element={<Contato />} />            
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </motion.main>
  );
}
