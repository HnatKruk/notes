import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NoteLink, ResizeBorder } from '..';
import styles from './styles.module.scss';

export const NotesList = () => {
  const { notesList } = useSelector(store => store.notesReducer);
  const { resizeBorderWidth } = useSelector(store => store.interfaceReducer);
  const [borderHeight, setBorderHeight] = useState(null);
  const asideRef = useRef(null);
  const ulRef = useRef(null);

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
