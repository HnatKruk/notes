import { render, fireEvent } from '@testing-library/react';
import { advanceTo, clear } from 'jest-date-mock';
import { Header } from '@components';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@/store/actions';
import { createProviders, store } from '../test-utils';
import { storeMocks } from '../__mocks__/store-mocks';

const wrapper = createProviders();

beforeEach(() => {
  store.clearActions();
  advanceTo(new Date(2023, 8, 5, 12, 0, 0));

  storeMocks.viewReducer.noteItemLoader = false;
  storeMocks.notesReducer.activeNote = {
    id: '445ce4ee-5f15-44ce-9efd-f373c32f1439',
    routeId: 'oawuYBDsqBV1u9RJnjaJui',
    text: 'Text 1',
    dateCreated: '2023-08-10T05:58:22.613Z',
    dateEdited: '2023-08-10T05:58:22.613Z',
  };
});

afterEach(() => {
  clear();
});

describe('Header', () => {
  it('should renders without crashing', () => {
    const { container, getByTestId } = render(<Header />, { wrapper });
    const headerComponent = container.querySelector('header');
    const newNoteButton = getByTestId('new-note-icon');
    const resizeBorder = getByTestId('resize-border');

    expect(headerComponent).toBeInTheDocument();
    expect(newNoteButton).toBeInTheDocument();
    expect(resizeBorder).toBeInTheDocument();

  });

  it('should dispatches createActiveNoteRequestAction when NewNoteIcon button is clicked', () => {
    const { getByTestId } = render(<Header />, { wrapper });
    const newNoteButton = getByTestId('new-note-icon');

    fireEvent.click(newNoteButton);

    expect(store.getActions()).toEqual([
      createActiveNoteRequestAction(new Date().toISOString())
    ]);
  });

  it('should renders RemoveNoteIcon button when activeNote is available', () => {
    const { getByTestId } = render(<Header />, { wrapper });
    const removeNoteButton = getByTestId('remove-note-icon');
    expect(removeNoteButton).toBeInTheDocument();
  });

  it('should dispatches deleteActiveNoteRequestAction when RemoveNoteIcon button is clicked', () => {
    const { getByTestId } = render(<Header />, { wrapper });
    const removeNoteButton = getByTestId('remove-note-icon');
    const activeNote = storeMocks.notesReducer.activeNote;

    if (activeNote !== null) {
      const { id } = activeNote;
      fireEvent.click(removeNoteButton);

      expect(store.getActions()).toEqual([
        deleteActiveNoteRequestAction(id, expect.any(Function))
      ]);
    }
  });

  it('shouldn`t renders NewNoteIcon button if noteItemLoader', () => {
    storeMocks.viewReducer.noteItemLoader = true;
    const { queryByTestId } = render(<Header />, { wrapper });
    const newNoteButton = queryByTestId('remove-note-icon');
    expect(newNoteButton).toBeNull();
  });

  it('shouldn`t renders NewNoteIcon button if !activeNote', () => {
    storeMocks.notesReducer.activeNote = null;
    const { queryByTestId } = render(<Header />, { wrapper });
    const newNoteButton = queryByTestId('remove-note-icon');
    expect(newNoteButton).toBeNull();
  });
});
