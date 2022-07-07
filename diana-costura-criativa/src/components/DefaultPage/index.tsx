import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <div className={styles.defaultPage}>
        <Outlet />
      </div>
    </>
  );
}
