import { renderWithStore } from '../test-utils';
import { advanceTo, clear } from 'jest-date-mock';
import { NoteLink } from '@components';

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
  it('should renders without crashing', () => {
    const { container } = renderWithStore(<NoteLink note={noteLinkProps} />);
    const noteLinkComponent = container.querySelector(`a[href='/${noteLinkProps.routeId}']`);
    expect(noteLinkComponent).toBeInTheDocument();
  });

  it('should displays the title', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText('Text 1')).toBeInTheDocument();
  });

  it('should displays the title placeholder', () => {
    noteLinkProps.text = '\nText 2';
    const titlePlaceholder = 'New Note';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText(titlePlaceholder)).toBeInTheDocument();
  });

  it('should displays the date format dd.MM.yyyy', () => {
    noteLinkProps.dateCreated = '2023-08-10T05:58:22.613Z';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText('10.08.2023')).toBeInTheDocument();
  });

  it('should displays the date format h:mm a', () => {
    noteLinkProps.dateCreated = '2023-09-05T05:58:22.613Z';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText('8:58 AM')).toBeInTheDocument();
  });

  it('should displays the date format EEEE', () => {
    noteLinkProps.dateCreated = '2023-09-04T05:58:22.613Z';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText('Monday')).toBeInTheDocument();
  });

  it('should displays the subtitle', () => {
    noteLinkProps.text = 'Text 1\nText 2';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText('Text 2')).toBeInTheDocument();
  });

  it('should displays the subtitle placeholder', () => {
    noteLinkProps.text = 'Text 1\n';
    const subTitlePlaceholder = 'No additional text';
    const { getByText } = renderWithStore(<NoteLink note={noteLinkProps} />);
    expect(getByText(subTitlePlaceholder)).toBeInTheDocument();
  });
});
