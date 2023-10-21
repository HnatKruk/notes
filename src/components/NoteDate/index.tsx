import { FC, useMemo, useState } from 'react';
import { format, parseISO } from 'date-fns';
import styles from './styles.module.scss';

interface NoteDateProps {
  dateCreated: string;
  dateEdited: string;
}

export const NoteDate: FC<NoteDateProps> = ({ dateCreated, dateEdited }) => {
  const [showDateCreated, setShowDateCreated] = useState<boolean | null>(null);

  const formattedDateCreated = useMemo(() => format(parseISO(dateCreated), 'dd MMM yyyy, HH:mm a'), [dateCreated]);
  const formattedDateEdited = useMemo(() => format(parseISO(dateEdited), 'dd MMM yyyy, HH:mm a'), [dateEdited]);

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
    >
      {dateLabel}
    </span>
  );
};
