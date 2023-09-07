import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NoteDate } from '@components';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const noteDateProps = {
  dateCreated: '2023-08-10T05:58:22.613Z',
  dateEdited: '2023-09-10T05:58:22.613Z',
};

interface ComponentProps {
  dateCreated: string;
  dateEdited: string;
};

const renderComponent = (componentProps: ComponentProps) => render(
  <Provider store={store}>
    <Router>
      <NoteDate {...componentProps} />
    </Router>
  </Provider>
);

describe('NoteLink', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent({ ...noteDateProps });
    const noteDateComponent = getByTestId('note-date');
    expect(noteDateComponent).toBeInTheDocument();
  });

  it('displays the date format dd MMM yyyy, HH:mm a', () => {
    const { getByText } = renderComponent({ ...noteDateProps });
    expect(getByText('10 Sep 2023, 08:58 AM')).toBeInTheDocument();
  });

  it('displays the date format Created: dd MMM yyyy, HH:mm a', () => {
    const { getByTestId, getByText } = renderComponent({ ...noteDateProps });
    const noteDateComponent = getByTestId('note-date');

    fireEvent.click(noteDateComponent);

    expect(getByText('Created: 10 Aug 2023, 08:58 AM')).toBeInTheDocument();
  });

  it('displays the date format Edited: dd MMM yyyy, HH:mm a', () => {
    const { getByTestId, getByText } = renderComponent({ ...noteDateProps });
    const noteDateComponent = getByTestId('note-date');

    fireEvent.click(noteDateComponent);
    fireEvent.click(noteDateComponent);


    expect(getByText('Edited: 10 Sep 2023, 08:58 AM')).toBeInTheDocument();
  });
});
