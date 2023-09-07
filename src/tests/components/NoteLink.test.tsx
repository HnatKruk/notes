import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { advanceTo, clear } from 'jest-date-mock';
import { NoteLink } from '@components';
import { NoteInterface } from '@/interfaces';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

const noteLinkProps = {
  id: '445ce4ee-5f15-44ce-9efd-f373c32f1439',
  routeId: 'oawuYBDsqBV1u9RJnjaJui',
  text: 'Text 1',
  dateCreated: '2023-08-10T05:58:22.613Z',
  dateEdited: '2023-08-10T05:58:22.613Z',
};

interface ComponentProps {
  note: NoteInterface;
};

const renderComponent = (componentProps: ComponentProps) => render(
  <Provider store={store}>
    <Router>
      <NoteLink {...componentProps} />
    </Router>
  </Provider>
);

beforeEach(() => {
  store.clearActions();
  advanceTo(new Date(2023, 8, 5, 12, 0, 0));
});

afterEach(() => {
  clear();
});

describe('NoteLink', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent({ note: noteLinkProps });
    const noteLinkComponent = getByTestId('note-link');
    expect(noteLinkComponent).toBeInTheDocument();
  });

  it('displays the title', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText('Text 1')).toBeInTheDocument();
  });

  it('displays the title placeholder', () => {
    noteLinkProps.text = '\nText 2';
    const titlePlaceholder = 'New Note';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText(titlePlaceholder)).toBeInTheDocument();
  });

  it('displays the date format dd.MM.yyyy', () => {
    noteLinkProps.dateCreated = '2023-08-10T05:58:22.613Z';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText('10.08.2023')).toBeInTheDocument();
  });

  it('displays the date format h:mm a', () => {
    noteLinkProps.dateCreated = '2023-09-05T05:58:22.613Z';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText('8:58 AM')).toBeInTheDocument();
  });

  it('displays the date format EEEE', () => {
    noteLinkProps.dateCreated = '2023-09-04T05:58:22.613Z';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText('Monday')).toBeInTheDocument();
  });

  it('displays the subtitle', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText('Text 2')).toBeInTheDocument();
  });

  it('displays the subtitle placeholder', () => {
    noteLinkProps.text = 'Text 1\n';
    const subTitlePlaceholder = 'No additional text';
    const { getByText } = renderComponent({ note: noteLinkProps });
    expect(getByText(subTitlePlaceholder)).toBeInTheDocument();
  });
});
