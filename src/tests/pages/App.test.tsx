import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from '../../pages';
import { initializeDataRequestAction } from '@/store/actions';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const renderComponent = () => render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

beforeEach(() => {
  store.clearActions();
});

describe('App', () => {
  it('renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.appLoader = true;
    const { getByTestId } = renderComponent();
    const appLoaderComponent = getByTestId('app-loader');
    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('renders App component without crashing', () => {
    storeMocks.viewReducer.appLoader = false;
    storeMocks.notesReducer.isNotesLoaded = true;
    const { getByTestId } = renderComponent();
    const appComponent = getByTestId('app');
    expect(appComponent).toBeInTheDocument();
  });

  it('dispatches action when app is loading', () => {
    renderComponent();
    expect(store.getActions()).toEqual([
      initializeDataRequestAction()
    ]);
  });

  it('renders Header component without crashing', () => {
    const { getByTestId } = renderComponent();
    const headerComponent = getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
  });

  it('renders NotesList component without crashing', () => {
    const { getByTestId } = renderComponent();
    const notesListComponent = getByTestId('notes-list');
    expect(notesListComponent).toBeInTheDocument();
  });
});
