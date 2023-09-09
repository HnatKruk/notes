import { renderWithStore, fireEvent } from '../test-utils';
import { NoteTextarea } from '@components';

describe('NoteTextarea', () => {
  it('should renders without crashing', () => {
    const { container } = renderWithStore(<NoteTextarea text={''} />);
    const noteTextareaComponent = container.querySelector('textarea');
    expect(noteTextareaComponent).toBeInTheDocument();
  });

  it('should changes textarea value when input value changes', () => {
    const { container } = renderWithStore(<NoteTextarea text={'Initial text'} />);
    const noteTextareaComponent = container.querySelector('textarea') as HTMLTextAreaElement;

    fireEvent.input(noteTextareaComponent, { target: { value: 'New text' } });

    expect(noteTextareaComponent.value).toBe('New text');
  });
});
