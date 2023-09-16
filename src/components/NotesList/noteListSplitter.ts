import { isToday, isYesterday, parseISO, isWithinInterval, subDays } from 'date-fns';
import { NoteInterface } from '@interfaces';

export const splitNotesListByDate = (notesList: NoteInterface[]) => {
  const currentDayNotes: NoteInterface[]  = [];
  const pastDayNotes: NoteInterface[]  = [];
  const pastWeekNotes: NoteInterface[] = [];
  const pastMonthNotes: NoteInterface[] = [];
  const olderNotes: NoteInterface[] = [];
  const today = new Date();

  notesList.forEach((note) => {
    const itemDate = parseISO(note.dateEdited);

    if (isToday(itemDate)) {
      currentDayNotes.push(note);
    } else if (isYesterday(itemDate)) {
      pastDayNotes.push(note);
    } else if (isWithinInterval(itemDate, { start: subDays(today, 7), end: today })) {
      pastWeekNotes.push(note);
    } else if (isWithinInterval(itemDate, { start: subDays(today, 30), end: today })) {
      pastMonthNotes.push(note);
    } else {
      olderNotes.push(note);
    }
  });

  const splittedNotesListConfig = [
    {
      notesListName: 'Today',
      notesList: currentDayNotes,
    },
    {
      notesListName: 'Yesterday',
      notesList: pastDayNotes,
    },
    {
      notesListName: 'Previous 7 Days',
      notesList: pastWeekNotes,
    },
    {
      notesListName: 'Previous 30 Days',
      notesList: pastMonthNotes,
    },
    {
      notesListName: 'Previously',
      notesList: olderNotes,
    },
  ];

  return splittedNotesListConfig;
};
