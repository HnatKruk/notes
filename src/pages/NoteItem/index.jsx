import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActiveNoteRequestAction } from '../../store/actions';
import { AppLoader } from '../../components/AppLoader';
import { NoteTextarea } from './NoteTextarea';
import { NoteDate } from './NoteDate';
import styles from './styles.module.scss';

export const NoteItem = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const { noteItemLoader } = useSelector(store => store.interfaceReducer);
  const { activeNote } = useSelector(store => store.notesReducer);
  const isNoteItemLoader = noteItemLoader || !activeNote;

  useEffect(() => {
    dispatch(getActiveNoteRequestAction(noteId));
  }, [dispatch, noteId]);

  return isNoteItemLoader ? <AppLoader customStyles={styles.loaderStyles}/> : (
    <div className={styles.noteItem}>
      <NoteDate dateCreated={activeNote.dateCreated} dateEdited={activeNote.dateEdited} />
      <NoteTextarea text={activeNote.text} />
    </div>
  );
};
