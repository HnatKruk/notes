import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NotesList } from '../NotesList';
import { initializeDataRequestAction } from '../../store/actions';
import { AppLoader } from '../../components/AppLoader';
import { Header } from '../Header';
import styles from './styles.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const appLoader = useSelector(store => store.interfaceReducer.appLoader);
  const isNotesLoaded = useSelector(store => store.notesReducer.isNotesLoaded);
  const isAppLoader = appLoader || !isNotesLoaded;

  useEffect(() => {
    dispatch(initializeDataRequestAction());
  }, [dispatch]);

  return isAppLoader ? <AppLoader customStyles={styles.loaderStyles}/> : (
    <div className={styles.app}>
      <Header />
      <main className={styles.app_main}>
        <NotesList />
        <Outlet />
      </main>
    </div>
  );
};
