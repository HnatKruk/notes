import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActiveNoteRequestAction } from '@actions';
import { AppLoader, NoteTextarea, NoteDate } from '@components';
import { RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

export const NoteItem: FC = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  const { noteItemLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { activeNote } = useSelector((store: RootStateInterface) => store.notesReducer);
  const isNoteItemLoader = noteItemLoader || !activeNote;

  useEffect(() => {
    dispatch(getActiveNoteRequestAction(noteId as string));
  }, [dispatch, noteId]);

  return isNoteItemLoader ? <AppLoader customStyles={styles.loaderStyles}/> : (
    <div
      className={styles.noteItem}
      data-testid='note-item'
    >
      <NoteDate dateCreated={activeNote.dateCreated} dateEdited={activeNote.dateEdited} />
      <NoteTextarea text={activeNote.text} />
    </div>
  );
};
