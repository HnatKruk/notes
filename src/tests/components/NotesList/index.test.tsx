import { render } from '@testing-library/react';
import { NotesList } from '@components';
import { createProviders } from '../../test-utils';
import { storeMocks } from '../../__mocks__/store-mocks';

const wrapper = createProviders();

describe('NotesList', () => {
  it('should renders li elements for each note', () => {
    const { container } = render(<NotesList />, { wrapper });
    const notesList = storeMocks.notesReducer.notesList;

    const liElements = container.querySelectorAll('li'); 
    expect(liElements.length).toBe(notesList.length);
  });

  it('should renders ResizeBorder without crashing', () => {
    const { getByTestId } = render(<NotesList />, { wrapper });
    const resizeBorderComponent = getByTestId('resize-border');
    expect(resizeBorderComponent).toBeInTheDocument();
  });
});
