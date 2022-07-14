import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Footer from 'components/footer';
import DefaultPage from 'components/DefaultPage';
import Menu from 'components/menu';
import { lazy, Suspense } from 'react';

{/* 
  1. dentro do defaultPage vai um outlet 
  2. a rota de home eh relativa a rota atual, ou seja, ao / entao nao precisa ser /home..
*/}

const Contato = lazy(() => import('pages/Contato'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route index path='home' element={<Home />} />
              <Route path='sobre' element={<Sobre />} />
              <Route path='produtos' element={<Produtos />} />
              <Route path='contato' element={<Contato />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
