import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeDataRequestAction } from '@actions';
import { NotesList, AppLoader, Header } from '@components';
import { RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { appLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { isNotesLoaded, activeNote, filterText } = useSelector((store: RootStateInterface) => store.notesReducer);
  const isAppLoader = appLoader || !isNotesLoaded;

  useEffect(() => {
    dispatch(initializeDataRequestAction());
  }, [dispatch]);

  useEffect(() => {
    if (activeNote && !filterText ) {
      navigate(activeNote.routeId, { replace: true });
    }
  }, [activeNote, navigate, filterText]);

  return isAppLoader ? <AppLoader customStyles={styles.loaderStyles}/> : (
    <div
      className={styles.app}
      data-testid='app'
    >
      <Header />
      <main className={styles.app_main}>
        <NotesList />
        <Outlet />
      </main>
    </div>
  );
};
