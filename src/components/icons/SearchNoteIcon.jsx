import React from 'react';

export const SearchNoteIcon = ({ fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z'
      stroke={fill}
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

SearchNoteIcon.defaultProps = {
  fill: '#6a6b6b',
  width: '26px',
  height: '26px',
};