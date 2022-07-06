import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Contato from 'pages/Contato';
import Header from 'components/header';
import Footer from 'components/footer';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}