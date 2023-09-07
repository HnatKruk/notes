import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotesList } from '@components';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const renderComponent = () => render(
  <Provider store={store}>
    <Router>
      <NotesList />
    </Router>
  </Provider>
);

describe('NotesList', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent();
    const notesListComponent = getByTestId('notes-list');
    expect(notesListComponent).toBeInTheDocument();
  });

  it('renders li elements for each note', () => {
    const { container } = renderComponent();
    const notesList = storeMocks.notesReducer.notesList;

    const liElements = container.querySelectorAll('li'); 
    expect(liElements.length).toBe(notesList.length);
  });

  it('renders ResizeBorder without crashing', () => {
    const { getByTestId } = renderComponent();
    const resizeBorderComponent = getByTestId('resize-border');
    expect(resizeBorderComponent).toBeInTheDocument();
  });
});
