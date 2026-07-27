import { Link, Outlet } from 'react-router';
import styles from '@/layouts/AppLayout.module.scss';

function AppLayout() {
  return (
    <>
      <header>
        <h1>
          <Link className={styles['title']} to='/'>
            NBA Dashboard
          </Link>
          </h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles['footer']}>
        <div>
          "Copyright" {new Date().getFullYear()} kokoben "LLC". All rights not quite reserved.
        </div>
        <div>
          Created using ESPN's public APIs.
        </div>
      </footer>
    </>
  );
}

export default AppLayout;
