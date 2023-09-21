import { render, fireEvent, waitFor } from '@testing-library/react';
import { createProviders, store } from '../test-utils';
import { SearchNotes } from '@components';
import { setFilterTextRequestAction, setSearchFocusAction } from '@actions';
import { storeMocks } from '../__mocks__/store-mocks';

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
        setFilterTextRequestAction(inputValue)
      ]);
    });
  });

  it('should dispatch setSearchFocusAction on input focus and blur', () => {
    const { getByPlaceholderText } = render(<SearchNotes />, { wrapper });
    const inputElement = getByPlaceholderText('Search');

    fireEvent.focus(inputElement);

    expect(store.getActions()).toEqual([
      setSearchFocusAction(true)
    ]);

    fireEvent.blur(inputElement);

    expect(store.getActions()).toEqual([
      setSearchFocusAction(true),
      setSearchFocusAction(false)
    ]);
  });

  it('should call setValue and dispatch setFilterTextRequestAction in useEffect', () => {
    const filterText = 'filterText'
    storeMocks.notesReducer.filterText = filterText;
    const { container } = render(<SearchNotes />, { wrapper });
    const inputElement = container.querySelector('input');

    expect(inputElement).toHaveValue(filterText);
    expect(store.getActions()).toEqual([
      setSearchFocusAction(true),
      setFilterTextRequestAction(filterText)
    ]);
  });
});
