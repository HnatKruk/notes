import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteActiveNoteRequestAction } from '../../store/actions';
import { ResizeBorder } from '../../components/ResizeBorder';
import { RemoveNoteIcon } from '../../components/icons';
import { HeaderButton } from '../../components/HeaderButton';
import styles from './styles.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resizeBorderWidth = useSelector((store) => store.interfaceReducer.resizeBorderWidth);
  const activeNote = useSelector(store => store.notesReducer.activeNote);

  const deleteActiveNote = () => {
    dispatch(deleteActiveNoteRequestAction(activeNote.id));
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.header_leftSide}
        style={{ width: `${resizeBorderWidth}px` }}
      >
        <div className={styles.header_buttonsContainer}>
          <HeaderButton onClick={deleteActiveNote}>
            <RemoveNoteIcon />
          </HeaderButton>
        </div>
        <ResizeBorder />
      </div>
      <div  className={styles.header_rightSide}>
      </div>
    </header>
  );
};
