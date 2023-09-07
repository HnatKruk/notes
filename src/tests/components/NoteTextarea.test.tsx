import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { NoteTextarea } from '@components';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

interface ComponentProps {
  text: string,
};

const renderComponent = (componentProps: ComponentProps) => render(
  <Provider store={store}>
    <NoteTextarea {...componentProps} />
  </Provider>
);

describe('NoteTextarea', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent({ text: '' });
    const noteTextareaComponent = getByTestId('note-textarea');
    expect(noteTextareaComponent).toBeInTheDocument();
  });

  it('changes textarea value when input value changes', () => {
    const { getByTestId } = renderComponent({ text: 'Initial text' });
    const noteTextareaComponent = getByTestId('note-textarea') as HTMLTextAreaElement;

    fireEvent.input(noteTextareaComponent, { target: { value: 'New text' } });

    expect(noteTextareaComponent.value).toBe('New text');
  });
});
