import { FC, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NoteLink, ResizeBorder } from '@components';
import { NoteInterface, RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

export const NotesList: FC = () => {
  const { notesList } = useSelector((store: RootStateInterface) => store.notesReducer);
  const { resizeBorderWidth } = useSelector((store: RootStateInterface) => store.viewReducer);
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
      data-testid="notes-list"
    >
      <nav>
        <ul className={styles.notesList_listContainer} ref={ulRef}>
          {notesList.map((note: NoteInterface) => <li key={note.id}>
            <NoteLink note={note}/>
          </li>)}
        </ul>
      </nav>
      <ResizeBorder borderHeight={borderHeight} />
    </aside>
  );
};
