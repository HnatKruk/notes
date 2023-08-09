import { FC } from 'react';

interface ListNotesIconProps {
  fill: string;
  width: string;
  height: string;
};

export const ListNotesIcon: FC<ListNotesIconProps> = ({ fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 17H20M9 12H20M9 7H20M4 16.5H5V17.5H4V16.5ZM4 11.5H5V12.5H4V11.5ZM4 6.5V7.5H5V6.5H4Z'
      stroke={fill}
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

ListNotesIcon.defaultProps = {
  fill: '#6a6b6b',
  width: '28px',
  height: '28px',
};
