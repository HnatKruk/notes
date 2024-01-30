import { FC, useState, useEffect, useRef, Fragment, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'short-uuid';
import { NoteLink, ResizeBorder } from '@components';
import { NoteInterface, RootStateInterface } from '@interfaces';
import { splitNotesListByDate } from './noteListSplitter';
import styles from './styles.module.scss';
import { createActiveNoteRequestAction } from '@/store/actions';

export const NotesList: FC = () => {
  const { notesList, filterText } = useSelector((store: RootStateInterface) => store.notesReducer);
  const { resizeBorderWidth } = useSelector((store: RootStateInterface) => store.viewReducer);
  const [borderHeight, setBorderHeight] = useState(0);
  const asideRef = useRef<HTMLElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const dispatch = useDispatch();

  const compareHeights = useCallback(() => {
    if (asideRef.current && ulRef.current) {
      const asideHeight = asideRef.current.getBoundingClientRect().height;
      const ulHeight = ulRef.current.getBoundingClientRect().height;
  
      setBorderHeight(Math.max(asideHeight, ulHeight));
    }
  }, [setBorderHeight]);

  useEffect(() => {
    if (notesList.length === 0) {
      const currentDate = new Date().toISOString();
      dispatch(createActiveNoteRequestAction(currentDate));
    }
  }, [notesList])

  useEffect(() => {
    compareHeights();
    window.addEventListener('resize', compareHeights);

    return () => {
      window.removeEventListener('resize', compareHeights);
    };
  }, []);

  const filteredNotesList = useMemo(() => {
    return notesList.filter((note) => {
      const uppercaseText = note.text.toUpperCase();
      if (uppercaseText.includes(filterText.toUpperCase())) {
        return note;
      }
    });
  }, [notesList, filterText]);

  const splittedNotesListConfig = splitNotesListByDate(filteredNotesList);

  const renderNoteLinks = (notesList: NoteInterface[]) => {
    return notesList.map((note: NoteInterface) => <li key={note.id}>
      <NoteLink note={note}/>
    </li>);
  };

  return (
    <aside
      className={styles.notesList}
      style={{ width: `${resizeBorderWidth}px` }}
      ref={asideRef}
    >
      <nav>
        <ul className={styles.notesList_listContainer} ref={ulRef}>
          {splittedNotesListConfig.map((splittedNotesList) => splittedNotesList.notesList.length > 0 && (
            <Fragment key={uuid()}>
              <span className={styles.notesList__listName}>{splittedNotesList.notesListName}</span>
              {renderNoteLinks(splittedNotesList.notesList)}
            </Fragment>
          ))}
        </ul>
      </nav>
      <ResizeBorder borderHeight={borderHeight} />
    </aside>
  );
};
