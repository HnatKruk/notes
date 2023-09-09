import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeMocks } from './__mocks__/store-mocks';

const mockStore = configureStore([]);
export const store = mockStore(storeMocks);

export const renderWithStore = (children: React.ReactNode) => render(
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
);

export * from '@testing-library/react';
