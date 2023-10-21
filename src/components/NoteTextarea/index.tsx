import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { editTextActiveNoteRequestAction } from '@actions';
import { RootStateInterface } from '@interfaces';
import { ALLOWED_TAGS, ALLOWED_ATTR } from '@/constants/AllowedElements';
import styles from './styles.module.scss';

interface NoteTextareaProps {
  text: string;
}

export const NoteTextarea: FC<NoteTextareaProps> = ({ text }) => {
  const dispatch = useDispatch();
  const [textareaValue, setTextareaValue] = useState(text);
  const [isTextareaFocused, setIsTextareaFocused] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const { isSearchFocus } = useSelector((store: RootStateInterface) => store.viewReducer);

  const setTextareaFocus = () => {
    if (textareaRef.current && !isSearchFocus) {
      const { current: textarea } = textareaRef;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  };

  const handleFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleBlur = () => {
    setIsTextareaFocused(false);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const sanitizedTextareaValue = event.target.value;
    setTextareaValue(sanitizedTextareaValue);
    const currentDate = new Date().toISOString();
    dispatch(editTextActiveNoteRequestAction(sanitizedTextareaValue, currentDate));
  };

  useEffect(() => {
    setTextareaFocus();
  }, [isSearchFocus, isTextareaFocused]);

  useEffect(() => {
    if (divRef.current) {
      const childElements = divRef.current.querySelectorAll('[href]');
      childElements.forEach((element) => {
        element.addEventListener('click', (e) => e.stopPropagation());
      });
    }
  }, [isTextareaFocused]);

  if (isTextareaFocused) {
    return (
      <textarea
        className={styles.noteTextarea}
        value={textareaValue}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={textareaRef}
        onBlur={handleBlur}
      />
    );
  }

  return (
    <div
      ref={divRef}
      className={styles.noteTextarea}
      onClick={handleFocus}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(
        textareaValue,
        { ALLOWED_TAGS, ALLOWED_ATTR },
      )}}
    />
  );
};
