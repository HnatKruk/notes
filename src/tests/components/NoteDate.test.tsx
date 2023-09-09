import { renderWithStore, fireEvent } from '../test-utils';
import { NoteDate } from '@components';

const noteDateProps = {
  dateCreated: '2023-08-10T05:58:22.613Z',
  dateEdited: '2023-09-10T05:58:22.613Z',
};

describe('NoteDate', () => {
  it('should renders without crashing', () => {
    const { container } = renderWithStore(<NoteDate {...noteDateProps} />);
    const noteDateComponent = container.querySelector('span');
    expect(noteDateComponent).toBeInTheDocument();
  });

  it('should displays the date format dd MMM yyyy, HH:mm a', () => {
    const { getByText } = renderWithStore(<NoteDate {...noteDateProps} />);
    expect(getByText('10 Sep 2023, 08:58 AM')).toBeInTheDocument();
  });

  it('should displays the date format Created: dd MMM yyyy, HH:mm a', () => {
    const { container, getByText } = renderWithStore(<NoteDate {...noteDateProps} />);
    const noteDateComponent = container.querySelector('span');

    if (noteDateComponent) fireEvent.click(noteDateComponent);

    expect(getByText('Created: 10 Aug 2023, 08:58 AM')).toBeInTheDocument();
  });

  it('should displays the date format Edited: dd MMM yyyy, HH:mm a', () => {
    const { container, getByText } = renderWithStore(<NoteDate {...noteDateProps} />);
    const noteDateComponent = container.querySelector('span');

    if (noteDateComponent) {
      fireEvent.click(noteDateComponent);
      fireEvent.click(noteDateComponent);
    }

    expect(getByText('Edited: 10 Sep 2023, 08:58 AM')).toBeInTheDocument();
  });
});
