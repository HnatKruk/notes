import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActiveNoteRequestAction } from '@actions';
import { AppLoader, NoteTextarea, NoteDate } from '@components';
import { InterfaceReducer, NotesReducer } from '@interfaces/store.ts';
import styles from './styles.module.scss';

export const NoteItem: FC = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const { noteItemLoader } = useSelector((store: InterfaceReducer) => store.interfaceReducer);
  const { activeNote } = useSelector((store: NotesReducer) => store.notesReducer);
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
