import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { editTextActiveNoteRequestAction } from '@actions';
import { RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

interface NoteTextareaProps {
  text: string;
};

export const NoteTextarea: FC<NoteTextareaProps> = ({ text }) => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState(text);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { isSearchFocus } = useSelector((store: RootStateInterface) => store.viewReducer);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const sanitizedTextareaValue = DOMPurify.sanitize(event.target.value);
    setTextareaValue(sanitizedTextareaValue);
    const currentDate = new Date().toISOString();
    dispatch(editTextActiveNoteRequestAction(sanitizedTextareaValue, currentDate));
  };

  useEffect(() => {
    if (textareaRef.current && !isSearchFocus) {
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
