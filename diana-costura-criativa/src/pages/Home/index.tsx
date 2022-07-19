import About from 'components/about';
import Depoiments from 'components/depoiments';
import Materials from 'components/materials';
import Products from 'components/products';
import Location from 'components/location';
import Header from 'components/header';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Materials />
      <Products />
      <Location />
      <Depoiments />
    </>
  );
}
