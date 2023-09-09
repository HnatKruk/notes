import { renderWithStore } from '../test-utils';
import { NoteItem } from '../../pages';
import { storeMocks } from '../__mocks__/store-mocks';

describe('NoteItem', () => {
  it('should renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = true;
    const { getByTestId } = renderWithStore(<NoteItem />);
    const appLoaderComponent = getByTestId('app-loader');
    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('should renders NoteItem component without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = false;
    const { getByTestId } = renderWithStore(<NoteItem />);
    const appComponent = getByTestId('note-item');
    expect(appComponent).toBeInTheDocument();
  });

  it('should renders NoteDate component without crashing', () => {
    const { container } = renderWithStore(<NoteItem />);
    const noteDateComponent = container.querySelector('span');
    expect(noteDateComponent).toBeInTheDocument();
  });

  it('should renders NoteTextarea component without crashing', () => {
    const { container } = renderWithStore(<NoteItem />);
    const noteTextareaComponent = container.querySelector('textarea');
    expect(noteTextareaComponent).toBeInTheDocument();
  });
});
