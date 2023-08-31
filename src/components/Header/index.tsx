import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@actions';
import { ResizeBorder } from '@components';
import { NewNoteIcon, RemoveNoteIcon } from '@icons';
import { RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { resizeBorderWidth, noteItemLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { activeNote } = useSelector((store: RootStateInterface) => store.notesReducer);
  const isNoteItemLoader = noteItemLoader || !activeNote;

  const deleteActiveNote = () => {
    const handleNavigate = () => {navigate('/', { replace: true })};
    dispatch(deleteActiveNoteRequestAction(activeNote?.id as string, handleNavigate));
  };

  const createActiveNote = () => {
    const currentDate = new Date().toISOString();
    dispatch(createActiveNoteRequestAction(currentDate));
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.header_leftSide}
        style={{ width: `${resizeBorderWidth}px` }}
      >
        <div className={styles.header_buttonsContainer}>
          {!isNoteItemLoader && <button
            className={styles.headerButton}
            onClick={deleteActiveNote}
          >
            <RemoveNoteIcon />
          </button>}
        </div>
        <ResizeBorder />
      </div>
      <div className={styles.header_rightSide}>
        <button
          className={styles.headerButton}
          onClick={createActiveNote}
        >
          <NewNoteIcon />
        </button>
      </div>
    </header>
  );
};
