import { render } from '@testing-library/react';
import { App } from '../../pages';
import { initializeDataRequestAction } from '@/store/actions';
import { storeMocks } from '../__mocks__/store-mocks';
import { createProviders, store } from '../test-utils';

const wrapper = createProviders();

beforeEach(() => {
  store.clearActions();
});

describe('App', () => {
  it('should renders AppLoader component without crashing', () => {
    storeMocks.viewReducer.appLoader = true;
    const { getByTestId } = render(<App />, { wrapper });
    const appLoaderComponent = getByTestId('app-loader');
    expect(appLoaderComponent).toBeInTheDocument();
  });

  it('should renders App component without crashing', () => {
    storeMocks.viewReducer.appLoader = false;
    storeMocks.notesReducer.isNotesLoaded = true;
    const { container, getByTestId } = render(<App />, { wrapper });
    const appComponent = getByTestId('app');
    const headerComponent = container.querySelector('header');
    const notesListComponent = container.querySelector('aside');

    expect(appComponent).toBeInTheDocument();
    expect(headerComponent).toBeInTheDocument();
    expect(notesListComponent).toBeInTheDocument();
  });

  it('should dispatches action when app is loading', () => {
    render(<App />, { wrapper });
    expect(store.getActions()).toEqual([
      initializeDataRequestAction()
    ]);
  });
});
