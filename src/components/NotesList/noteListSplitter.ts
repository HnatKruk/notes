import { isToday, parseISO, isWithinInterval, subDays } from 'date-fns';
import { NoteInterface } from '@interfaces';

export const splitNotesListByDate = (notesList: NoteInterface[]) => {
  const currentDateNotes: NoteInterface[]  = [];
  const pastWeekNotes: NoteInterface[] = [];
  const olderNotes: NoteInterface[] = [];
  const today = new Date();

  notesList.forEach((note) => {
    const itemDate = parseISO(note.dateEdited);

    if (isToday(itemDate)) {
      currentDateNotes.push(note);
    } else if (isWithinInterval(itemDate, { start: subDays(today, 7), end: today })) {
      pastWeekNotes.push(note);
    } else {
      olderNotes.push(note);
    }
  });

  const splittedNotesListConfig = [
    {
      notesListName: 'Today',
      notesList: currentDateNotes,
    },
    {
      notesListName: 'Previous 7 Days',
      notesList: pastWeekNotes,
    },
    {
      notesListName: 'Previously',
      notesList: olderNotes,
    },
  ];

  return splittedNotesListConfig;
};
