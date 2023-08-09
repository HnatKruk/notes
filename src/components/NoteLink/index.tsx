import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { format, isToday, isThisWeek, parseISO } from 'date-fns';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface NoteLinkProps {
  note: {
    dateCreated: string;
    dateEdited: string;
    id: string;
    routeId: string;
    text: string;
  };
}

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
  const lineBreakIndex = note.text.indexOf('\n');
  const hasLineBreak = lineBreakIndex !== -1;

  const title = hasLineBreak ? note.text.substring(0, lineBreakIndex) : note.text;
  const subtitle = hasLineBreak ? note.text.substring(lineBreakIndex + 1) : '';

  return (
    <NavLink
      to={note.routeId}
      replace={true}
      className={({ isActive }) => classNames({[styles.navLink__disabled]: isActive})}
    >
      {({ isActive }) => (
        <article className={classNames(styles.noteLink, {[styles.noteLink__active]: isActive})}>
          <h2 className={styles.noteLink_header}>
            {title || titlePlaceholder}
          </h2>
          <div className={styles.noteLink_subtitle}>
            <span className={styles.noteLink_subtitle__date}>
              {formatDate(note.dateCreated)}
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
