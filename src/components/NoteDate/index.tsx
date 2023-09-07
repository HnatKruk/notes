import { FC, useState } from 'react';
import { format, parseISO } from 'date-fns';
import styles from './styles.module.scss';

interface NoteDateProps {
  dateCreated: string;
  dateEdited: string;
};

export const NoteDate: FC<NoteDateProps> = ({ dateCreated, dateEdited }) => {
  const [showDateCreated, setShowDateCreated] = useState<boolean | null>(null);

  const formattedDateCreated = format(parseISO(dateCreated), 'dd MMM yyyy, HH:mm a');
  const formattedDateEdited = format(parseISO(dateEdited), 'dd MMM yyyy, HH:mm a');

  const dateLabel = showDateCreated ? `Created: ${formattedDateCreated}` : (
    showDateCreated === false ? `Edited: ${formattedDateEdited}` : formattedDateEdited
  );

  const handleShowDateCreated = () => {
    setShowDateCreated(showDateCreated => !showDateCreated);
  };

  return (
    <span
      className={styles.noteDate}
      onClick={handleShowDateCreated}
      data-testid="note-date"
    >
      {dateLabel}
    </span>
  );
};
