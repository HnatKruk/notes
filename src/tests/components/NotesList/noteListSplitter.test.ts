import { subDays } from 'date-fns';
import { splitNotesListByDate } from '@/components/NotesList/noteListSplitter.ts';
import { NoteInterface } from '@/interfaces';

const generateNote = (dateEdited: string) => ({
  id: '1',
  dateEdited,
  routeId: 'oawuYBDsqBV1u9RJnjaJui',
  text: 'Text 1',
  dateCreated: '2023-08-10T05:58:22.613Z',
});

describe('splitNotesListByDate', () => {
  it('should split notes correctly when all notes are from today', () => {
    const today = new Date().toISOString();
    const notesList = [
      generateNote(today),
      generateNote(today),
    ];

    const result = splitNotesListByDate(notesList);

    expect(result).toEqual([
      {
        notesListName: 'Today',
        notesList: notesList,
      },
      {
        notesListName: 'Yesterday',
        notesList: [],
      },
      {
        notesListName: 'Previous 7 Days',
        notesList: [],
      },
      {
        notesListName: 'Previous 30 Days',
        notesList: [],
      },
      {
        notesListName: 'Previously',
        notesList: [],
      },
    ]);
  });

  it('should split notes correctly when notes span multiple categories', () => {
    const today = new Date();
    const yesterday = subDays(today, 1).toISOString();
    const pastWeek = subDays(today, 7).toISOString();
    const pastMonth = subDays(today, 20).toISOString();
    const previousDate = subDays(today, 40).toISOString();
    const notesList = [
      generateNote(today.toISOString()),
      generateNote(yesterday),
      generateNote(pastWeek),
      generateNote(pastMonth),
      generateNote(today.toISOString()),
      generateNote(pastWeek),
      generateNote(previousDate),
    ];

    const result = splitNotesListByDate(notesList);

    expect(result).toEqual([
      {
        notesListName: 'Today',
        notesList: [notesList[0], notesList[4]],
      },
      {
        notesListName: 'Yesterday',
        notesList: [notesList[1]],
      },
      {
        notesListName: 'Previous 7 Days',
        notesList: [notesList[2], notesList[5]],
      },
      {
        notesListName: 'Previous 30 Days',
        notesList: [notesList[3]],
      },
      {
        notesListName: 'Previously',
        notesList: [notesList[6]],
      },
    ]);
  });

  it('should split notes correctly when there are no notes', () => {
    const notesList: NoteInterface[] = [];

    const result = splitNotesListByDate(notesList);

    expect(result).toEqual([
      {
        notesListName: 'Today',
        notesList: [],
      },
      {
        notesListName: 'Yesterday',
        notesList: [],
      },
      {
        notesListName: 'Previous 7 Days',
        notesList: [],
      },
      {
        notesListName: 'Previous 30 Days',
        notesList: [],
      },
      {
        notesListName: 'Previously',
        notesList: [],
      },
    ]);
  });
});
