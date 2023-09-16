import { render } from '@testing-library/react';
import { NoteItem } from '../../pages';
import { storeMocks } from '../__mocks__/store-mocks';
import { createProviders } from '../test-utils';

const wrapper = createProviders();

describe('NoteItem', () => {
  it('should renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = true;
    const { getByTestId } = render(<NoteItem />, { wrapper });

    const appLoaderComponent = getByTestId('app-loader');

    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('should renders NoteItem, NoteDate, NoteTextarea components without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = false;
    const { container, getByTestId } = render(<NoteItem />, { wrapper });
    const appComponent = getByTestId('note-item');
    const noteDateComponent = container.querySelector('span');
    const noteTextareaComponent = container.querySelector('textarea');

    expect(appComponent).toBeInTheDocument();
    expect(noteDateComponent).toBeInTheDocument();
    expect(noteTextareaComponent).toBeInTheDocument();
  });
});
