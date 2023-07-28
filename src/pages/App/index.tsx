import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export const App = () => (
  <div className={styles.app}>
    {/* <Header /> */}
    <main className={styles.app_main}>
      {/* <NotesList /> */}
      <Outlet />
    </main>
  </div>
);
