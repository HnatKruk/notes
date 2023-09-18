import { render, fireEvent, waitFor } from '@testing-library/react';
import { createProviders, store } from '../test-utils';
import { SearchNotes } from '@components';
import { setFilterTextAction } from '@/store/actions';

const wrapper = createProviders();

beforeEach(() => {
  store.clearActions();
});

describe('SearchNotes', () => {
  it('should render SearchNotes component with placeholder and icon', () => {
    const { getByPlaceholderText, getByTestId } = render(<SearchNotes />, { wrapper });
  
    const inputElement = getByPlaceholderText('Search');
    const searchIcon = getByTestId('search-note-icon');
  
    expect(inputElement).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('should update search input value when typed', () => {
    const { getByPlaceholderText } = render(<SearchNotes />, { wrapper });
    const inputElement = getByPlaceholderText('Search');
    const inputValue = 'New Search Text';

    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(inputElement).toHaveValue(inputValue);
  });

  it('should dispatch setFilterTextAction on input change', async () => {
    const { getByPlaceholderText } = render(<SearchNotes />, { wrapper });
    const inputElement = getByPlaceholderText('Search');
    const inputValue = 'Search Query';

    fireEvent.change(inputElement, { target: { value: inputValue } });

    await waitFor(() => {
      expect(store.getActions()).toEqual([
        setFilterTextAction(inputValue)
      ]);
    });
  });
});
