import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Contato from 'pages/Contato';
import Header from 'components/header';
import Footer from 'components/footer';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

{/* 
  1. dentro do defaultPage vai um outlet 
  2. a rota de home eh relativa a rota atual, ou seja, ao / entao nao precisa ser /home..
*/}

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index path='home' element={<Home />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='produtos' element={<Produtos />} />
            <Route path='contato' element={<Contato />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
