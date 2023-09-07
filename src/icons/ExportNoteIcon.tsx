import { FC } from 'react';
import { IconInterface } from '@interfaces';

export const ExportNoteIcon: FC<IconInterface> = ({ fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    data-testid='export-note-icon'
  >
    <path
      d='M42 27C42 33 38 43 24 43C10 43 6 33 6 27'
      stroke={fill}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M24.0078 5.10046V33'
      stroke={fill}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 17L24 5L36 17'
      stroke={fill}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

ExportNoteIcon.defaultProps = {
  fill: '#6a6b6b',
  width: '25px',
  height: '25px',
};
