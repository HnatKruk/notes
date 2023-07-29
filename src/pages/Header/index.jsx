import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteActiveNoteRequestAction } from '../../store/actions';
import { ResizeBorder } from '../../components/ResizeBorder';
import { RemoveNoteIcon } from '../../components/icons';
import styles from './styles.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { resizeBorderWidth, noteItemLoader } = useSelector(store => store.interfaceReducer);
  const { activeNote } = useSelector(store => store.notesReducer);
  const isNoteItemLoader = noteItemLoader || !activeNote;

  const deleteActiveNote = () => {
    dispatch(deleteActiveNoteRequestAction(activeNote.id));
    navigate('/', { replace: true });
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
      <div  className={styles.header_rightSide}>
      </div>
    </header>
  );
};
