import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActiveNoteRequestAction } from '../../store/actions';
import { AppLoader, NoteTextarea, NoteDate } from '../../components';
import styles from './styles.module.scss';

export const NoteItem = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const { noteItemLoader } = useSelector((store: RootState) => store.interfaceReducer);
  const { activeNote } = useSelector((store: RootState) => store.notesReducer);
  const isNoteItemLoader = noteItemLoader || !activeNote;

  useEffect(() => {
    dispatch(getActiveNoteRequestAction(noteId));
  }, [dispatch, getActiveNoteRequestAction, noteId]);

  return isNoteItemLoader ? <AppLoader customStyles={styles.loaderStyles}/> : (
    <div className={styles.noteItem}>
      <NoteDate dateCreated={activeNote.dateCreated} dateEdited={activeNote.dateEdited} />
      <NoteTextarea text={activeNote.text} />
    </div>
  );
};

interface ActiveNote {
  dateCreated: string;
  dateEdited: string;
  id: string;
  routeId: string;
  text: string;
};

interface RootState {
  interfaceReducer: {
    noteItemLoader: boolean;
  };
  notesReducer: {
    activeNote: ActiveNote;
  };
};
