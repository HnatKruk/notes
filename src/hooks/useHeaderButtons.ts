import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { exportNote } from '@/utils/exportNote';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@actions';
import { NewNoteIcon, RemoveNoteIcon, ExportNoteIcon } from '@icons';
import { RootStateInterface, HeaderButtonConfigInterface } from '@interfaces';
import styles from '@/styles/headerButtons.module.scss';

export const useHeaderButtons = ():[HeaderButtonConfigInterface[], HeaderButtonConfigInterface[]] => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noteItemLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { activeNote } = useSelector((store: RootStateInterface) => store.notesReducer);

  const isNoteItemLoader = noteItemLoader || !activeNote;

  const deleteActiveNote = () => {
    const handleNavigate = () => { navigate('/', { replace: true }) };
    dispatch(deleteActiveNoteRequestAction(activeNote?.id as string, handleNavigate));
  };

  const createActiveNote = () => {
    const currentDate = new Date().toISOString();
    dispatch(createActiveNoteRequestAction(currentDate));
  };

  return [
    [
      {
        Icon: RemoveNoteIcon,
        onClick: deleteActiveNote,
        isHidden: isNoteItemLoader,
        key: useId(),
        class: styles.removeNote,
      },
    ],
    [
      {
        Icon: NewNoteIcon,
        onClick: createActiveNote,
        isHidden: false,
        key: useId(),
      },
      {
        Icon: ExportNoteIcon,
        onClick: () => exportNote(activeNote),
        isHidden: isNoteItemLoader,
        key: useId(),
        class: styles.exportNote,
      },
    ],
  ];
};