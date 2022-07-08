import Products from 'components/products';
import { Outlet } from 'react-router-dom';

export default function Produtos() {
  return (
    <>
      <Products />
      <div>
        <Outlet />
      </div>
    </>
  );
}
