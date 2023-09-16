import { render, fireEvent } from '@testing-library/react';
import { NoteTextarea } from '@components';
import { createProviders } from '../test-utils';

const wrapper = createProviders();

describe('NoteTextarea', () => {
  it('should changes textarea value when input value changes', () => {
    const { container } = render(<NoteTextarea text={'Initial text'} />, { wrapper });
    const noteTextareaComponent = container.querySelector('textarea') as HTMLTextAreaElement;

    fireEvent.input(noteTextareaComponent, { target: { value: 'New text' } });

    expect(noteTextareaComponent.value).toBe('New text');
  });
});
