import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeMocks } from './__mocks__/store-mocks';

const mockStore = configureStore([]);
export const store = mockStore(storeMocks);

export const createProviders = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  );
};
