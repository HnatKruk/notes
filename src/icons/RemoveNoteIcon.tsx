import { FC } from 'react';
import { IconInterface } from '@interfaces';

export const RemoveNoteIcon: FC<IconInterface> = ({ fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    data-testid='remove-note-icon'
  >
    <path
      d='M10 11V17'
      stroke={fill}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 11V17'
      stroke={fill}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 7H20'
      stroke={fill}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z'
      stroke={fill}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z'
      stroke={fill}
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

RemoveNoteIcon.defaultProps = {
  fill: '#6a6b6b',
  width: '27px',
  height: '27px',
};
