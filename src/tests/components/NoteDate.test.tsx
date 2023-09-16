import { render, fireEvent } from '@testing-library/react';
import { format, parseISO } from 'date-fns';
import { NoteDate } from '@components';
import { createProviders } from '../test-utils';

const wrapper = createProviders();

const noteDateProps = {
  dateCreated: '2023-08-10T05:58:22.613Z',
  dateEdited: '2023-09-10T05:58:22.613Z',
};

describe('NoteDate', () => {
  it('should displays the date format dd MMM yyyy, HH:mm a', () => {
    const { getByText } = render(<NoteDate {...noteDateProps} />, { wrapper });
    const formattedDateEdited = format(parseISO(noteDateProps.dateEdited), 'dd MMM yyyy, HH:mm a');
    expect(getByText(formattedDateEdited)).toBeInTheDocument();
  });

  it('should displays the date format Created: dd MMM yyyy, HH:mm a', () => {
    const { container, getByText } = render(<NoteDate {...noteDateProps} />, { wrapper });
    const noteDateComponent = container.querySelector('span');
    const formattedDateCreated = format(parseISO(noteDateProps.dateCreated), 'dd MMM yyyy, HH:mm a');

    if (noteDateComponent) fireEvent.click(noteDateComponent);

    expect(getByText(`Created: ${formattedDateCreated}`)).toBeInTheDocument();
  });

  it('should displays the date format Edited: dd MMM yyyy, HH:mm a', () => {
    const { container, getByText } = render(<NoteDate {...noteDateProps} />, { wrapper });
    const noteDateComponent = container.querySelector('span');
    const formattedDateEdited = format(parseISO(noteDateProps.dateEdited), 'dd MMM yyyy, HH:mm a');

    if (noteDateComponent) {
      fireEvent.click(noteDateComponent);
      fireEvent.click(noteDateComponent);
    }

    expect(getByText(`Edited: ${formattedDateEdited}`)).toBeInTheDocument();
  });
});
