import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTextActiveNoteRequestAction } from '@actions';
import { RootStateInterface } from '@/interfaces';
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
    setTextareaValue(event.target.value);
    const currentDate = new Date().toISOString();
    dispatch(editTextActiveNoteRequestAction(event.target.value, currentDate));
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
