import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { format, isToday, isThisWeek, parseISO } from 'date-fns';
import cx from 'classnames';
import DOMPurify from 'dompurify';
import { NoteInterface } from '@interfaces';
import styles from './styles.module.scss';

interface NoteLinkProps {
  note: NoteInterface;
};

export const NoteLink: FC<NoteLinkProps> = ({ note }) => {
  const formatDate = (date: string) => {
    const parsedDate = parseISO(date);

    if (isToday(parsedDate)) {
      return format(parsedDate, 'h:mm a');
    } else if (isThisWeek(parsedDate)) {
      return format(parsedDate, 'EEEE');
    } else {
      return format(parsedDate, 'dd.MM.yyyy');
    }
  };

  const titlePlaceholder = 'New Note';
  const subTitlePlaceholder = 'No additional text';
  const sanitizedNoteText = DOMPurify.sanitize(note.text);
  const lineBreakIndex = sanitizedNoteText.indexOf('\n');
  const hasLineBreak = lineBreakIndex !== -1;

  const title = hasLineBreak ? sanitizedNoteText.substring(0, lineBreakIndex) : sanitizedNoteText;
  const subtitle = hasLineBreak ? sanitizedNoteText.substring(lineBreakIndex + 1) : '';

  return (
    <NavLink
      to={note.routeId}
      replace={true}
      className={({ isActive }) => cx({[styles.navLink__disabled]: isActive})}
    >
      {({ isActive }) => (
        <article className={cx(styles.noteLink, {[styles.noteLink__active]: isActive})}>
          <h2 className={styles.noteLink_header}>
            {title || titlePlaceholder}
          </h2>
          <div className={styles.noteLink_subtitle}>
            <span className={styles.noteLink_subtitle__date}>
              {formatDate(note.dateEdited)}
            </span>
            <p className={styles.noteLink_subtitle__text}>
              {subtitle || subTitlePlaceholder}
            </p>
          </div>
        </article>
      )}
    </NavLink>
  );
};
