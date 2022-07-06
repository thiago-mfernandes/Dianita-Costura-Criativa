import About from 'components/about';
import Contact from 'components/contact';
import Depoiments from 'components/depoiments';
import Footer from 'components/footer';
import Header from 'components/header/';
import Materials from 'components/materials';
import Products from 'components/products';
import Location from 'components/location';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Materials />
      <Products />
      <Location />
      <Depoiments />
      <Contact />
      <Footer />
    </>
  );
}
