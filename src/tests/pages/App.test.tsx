import { renderWithStore, store } from '../test-utils';
import { App } from '../../pages';
import { initializeDataRequestAction } from '@/store/actions';
import { storeMocks } from '../__mocks__/store-mocks';

beforeEach(() => {
  store.clearActions();
});

describe('App', () => {
  it('should renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.appLoader = true;
    const { getByTestId } = renderWithStore(<App />);
    const appLoaderComponent = getByTestId('app-loader');
    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('should renders App component without crashing', () => {
    storeMocks.viewReducer.appLoader = false;
    storeMocks.notesReducer.isNotesLoaded = true;
    const { getByTestId } = renderWithStore(<App />);
    const appComponent = getByTestId('app');
    expect(appComponent).toBeInTheDocument();
  });

  it('should dispatches action when app is loading', () => {
    renderWithStore(<App />);
    expect(store.getActions()).toEqual([
      initializeDataRequestAction()
    ]);
  });

  it('should renders Header component without crashing', () => {
    const { container } = renderWithStore(<App />);
    const headerComponent = container.querySelector('header');
    expect(headerComponent).toBeInTheDocument();
  });

  it('should renders NotesList component without crashing', () => {
    const { container } = renderWithStore(<App />);
    const notesListComponent = container.querySelector('aside');
    expect(notesListComponent).toBeInTheDocument();
  });
});
