import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NoteItem } from '../../pages';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const renderComponent = () => render(
  <Provider store={store}>
    <Router>
      <NoteItem />
    </Router>
  </Provider>
);

beforeEach(() => {
  store.clearActions();
});

describe('NoteItem', () => {
  it('renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = true;
    const { getByTestId } = renderComponent();
    const appLoaderComponent = getByTestId('app-loader');
    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('renders NoteItem component without crashing', () => {
    storeMocks.viewReducer.noteItemLoader = false;
    const { getByTestId } = renderComponent();
    const appComponent = getByTestId('note-item');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders NoteDate component without crashing', () => {
    const { getByTestId } = renderComponent();
    const noteDateComponent = getByTestId('note-date');
    expect(noteDateComponent).toBeInTheDocument();
  });

  it('renders NoteTextarea component without crashing', () => {
    const { getByTestId } = renderComponent();
    const noteTextareaComponent = getByTestId('note-textarea');
    expect(noteTextareaComponent).toBeInTheDocument();
  });
});
