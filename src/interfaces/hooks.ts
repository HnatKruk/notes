import { FC } from 'react';
import { IconInterface } from '.';

export interface HeaderButtonConfigInterface {
  Icon: FC<IconInterface>,
  onClick: () => void,
  isHidden: boolean,
  key: string,
  class?: string,
}
