import { render } from '@testing-library/react';
import { format, parseISO } from 'date-fns';
import { advanceTo, clear } from 'jest-date-mock';
import { NoteLink } from '@components';
import { createProviders } from '../test-utils';

const wrapper = createProviders();

const noteLinkProps = {
  id: '445ce4ee-5f15-44ce-9efd-f373c32f1439',
  routeId: 'oawuYBDsqBV1u9RJnjaJui',
  text: 'Text 1',
  dateCreated: '2023-08-10T05:58:22.613Z',
  dateEdited: '2023-08-10T05:58:22.613Z',
};

beforeEach(() => {
  advanceTo(new Date(2023, 8, 5, 12, 0, 0));
});

afterEach(() => {
  clear();
});

describe('NoteLink', () => {
  it('should displays the title', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText('Text 1')).toBeInTheDocument();
  });

  it('should displays the title placeholder', () => {
    noteLinkProps.text = '\nText 2';
    const titlePlaceholder = 'New Note';
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText(titlePlaceholder)).toBeInTheDocument();
  });

  it('should displays the date format dd.MM.yyyy', () => {
    noteLinkProps.dateEdited = '2023-08-10T05:58:22.613Z';
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText('10.08.2023')).toBeInTheDocument();
  });

  it('should displays the date format h:mm a', () => {
    noteLinkProps.dateEdited = '2023-09-05T05:58:22.613Z';
    const formattedDate = format(parseISO(noteLinkProps.dateCreated), 'h:mm a');
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  it('should displays the date format EEEE', () => {
    noteLinkProps.dateEdited = '2023-09-04T05:58:22.613Z';
    const formattedDate = format(parseISO(noteLinkProps.dateEdited), 'EEEE');
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  it('should displays the subtitle', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText('Text 2')).toBeInTheDocument();
  });

  it('should displays the subtitle placeholder', () => {
    noteLinkProps.text = 'Text 1\n';
    const subTitlePlaceholder = 'No additional text';
    const { getByText } = render(<NoteLink note={noteLinkProps} />, { wrapper });
    expect(getByText(subTitlePlaceholder)).toBeInTheDocument();
  });
});
