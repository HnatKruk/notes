import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { advanceTo, clear } from 'jest-date-mock';
import { Header } from '@components';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@/store/actions';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const renderComponent = () => render(
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>
);

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
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent();
    const headerComponent = getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
  });

  it('renders NewNoteIcon button', () => {
    const { getByTestId } = renderComponent();
    const newNoteButton = getByTestId('new-note-icon');
    expect(newNoteButton).toBeInTheDocument();
  });

  it('dispatches createActiveNoteRequestAction when NewNoteIcon button is clicked', () => {
    const { getByTestId } = renderComponent();
    const newNoteButton = getByTestId('new-note-icon');

    fireEvent.click(newNoteButton);

    expect(store.getActions()).toEqual([
      createActiveNoteRequestAction('2023-09-05T09:00:00.000Z')
    ]);
  });

  it('renders ResizeBorder component', () => {
    const { getByTestId } = renderComponent();
    const resizeBorder = getByTestId('resize-border');
    expect(resizeBorder).toBeInTheDocument();
  });

  it('renders RemoveNoteIcon button when activeNote is available', () => {
    const { getByTestId } = renderComponent();
    const removeNoteButton = getByTestId('remove-note-icon');
    expect(removeNoteButton).toBeInTheDocument();
  });

  it('dispatches deleteActiveNoteRequestAction when RemoveNoteIcon button is clicked', () => {
    const { getByTestId } = renderComponent();
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

  it('don`t renders NewNoteIcon button if noteItemLoader', () => {
    storeMocks.viewReducer.noteItemLoader = true;
    const { queryByTestId } = renderComponent();
    const newNoteButton = queryByTestId('remove-note-icon');
    expect(newNoteButton).toBeNull();
  });

  it('don`t renders NewNoteIcon button if !activeNote', () => {
    storeMocks.notesReducer.activeNote = null;
    const { queryByTestId } = renderComponent();
    const newNoteButton = queryByTestId('remove-note-icon');
    expect(newNoteButton).toBeNull();
  });
});
