import { renderWithStore } from '../test-utils';
import { NotesList } from '@components';
import { storeMocks } from '../__mocks__/store-mocks';

describe('NotesList', () => {
  it('should renders without crashing', () => {
    const { container } = renderWithStore(<NotesList />);
    const notesListComponent = container.querySelector('aside');
    expect(notesListComponent).toBeInTheDocument();
  });

  it('should renders li elements for each note', () => {
    const { container } = renderWithStore(<NotesList />);
    const notesList = storeMocks.notesReducer.notesList;

    const liElements = container.querySelectorAll('li'); 
    expect(liElements.length).toBe(notesList.length);
  });

  it('should renders ResizeBorder without crashing', () => {
    const { getByTestId } = renderWithStore(<NotesList />);
    const resizeBorderComponent = getByTestId('resize-border');
    expect(resizeBorderComponent).toBeInTheDocument();
  });
});
