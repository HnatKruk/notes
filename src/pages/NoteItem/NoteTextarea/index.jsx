import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTextActiveNoteRequestAction } from '../../../store/actions';
import styles from './styles.module.scss';

export const NoteTextarea = ({ text }) => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState(text);
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
    dispatch(editTextActiveNoteRequestAction(event.target.value, (new Date().toISOString())));
  };

  useEffect(() => {
    if (textareaRef.current) {
      const { current: textarea } = textareaRef;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, []);

  return (
    <textarea
      className={styles.noteTextarea}
      value={textareaValue}
      onChange={handleChange}
      ref={textareaRef}
    />
  );
};
