import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NotesList } from '../NotesList';
import { initializeDataRequestAction } from '../../store/actions';
import { AppLoader } from '../../components/AppLoader';
import { Header } from '../Header';
import styles from './styles.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { appLoader } = useSelector(store => store.interfaceReducer);
  const { isNotesLoaded, activeNote } = useSelector(store => store.notesReducer);
  const isAppLoader = appLoader || !isNotesLoaded;

  useEffect(() => {
    dispatch(initializeDataRequestAction());
  }, [dispatch]);

  useEffect(() => {
    if (activeNote) {
      navigate(activeNote.routeId, { replace: true });
    }
  }, [activeNote, navigate]);

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
