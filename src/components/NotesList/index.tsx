import { FC, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NoteLink, ResizeBorder } from '..';
import styles from './styles.module.scss';

interface NotesListProps {};

export const NotesList: FC<NotesListProps> = () => {
  const { notesList } = useSelector((store: RootState) => store.notesReducer);
  const { resizeBorderWidth } = useSelector((store: RootState) => store.interfaceReducer);
  const [borderHeight, setBorderHeight] = useState(0);
  const asideRef = useRef<HTMLElement | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const compareHeights = () => {
      if (asideRef.current && ulRef.current) {
        const asideHeight = asideRef.current.getBoundingClientRect().height;
        const ulHeight = ulRef.current.getBoundingClientRect().height;
  
        setBorderHeight(Math.max(asideHeight, ulHeight));
      }
    };

    compareHeights();
    window.addEventListener('resize', compareHeights);

    return () => {
      window.removeEventListener('resize', compareHeights);
    };
  }, []);

  return (
    <aside
      className={styles.notesList}
      style={{ width: `${resizeBorderWidth}px` }}
      ref={asideRef}
    >
      <nav>
        <ul className={styles.notesList_listContainer} ref={ulRef}>
          {notesList.map((note) => <li key={note.id}>
            <NoteLink note={note}/>
          </li>)}
        </ul>
      </nav>
      <ResizeBorder borderHeight={borderHeight} />
    </aside>
  );
};

interface Note {
  dateCreated: string;
  dateEdited: string;
  id: string;
  routeId: string;
  text: string;
};

interface RootState {
  interfaceReducer: {
    resizeBorderWidth: number;
  };
  notesReducer: {
    notesList: Note[];
  };
}
