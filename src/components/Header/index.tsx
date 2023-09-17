import { FC } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { ResizeBorder } from '@components';
import { RootStateInterface } from '@/interfaces';
import { createHeaderButtons } from './headerButtonsCreator';
import { LEFT_SIDE, RIGHT_SIDE } from './headerConstants';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const { resizeBorderWidth } = useSelector((store: RootStateInterface) => store.viewReducer);
  const headerButtonsConfig = createHeaderButtons();

  const renderHeaderButtons = (headerSide: string) => headerButtonsConfig
    .filter((buttonConfig) => buttonConfig.side === headerSide)
    .map((buttonConfig) => !buttonConfig.isHidden && (
      <button
        className={cx(styles.headerButton, buttonConfig.class)}
        onClick={buttonConfig.onClick}
        key={buttonConfig.key}
      >
        <buttonConfig.icon />
      </button>
    ));

  return (
    <header className={styles.header}>
      <div
        className={styles.header_leftSide}
        style={{ width: `${resizeBorderWidth}px` }}
      >
        {renderHeaderButtons(LEFT_SIDE)}
        <ResizeBorder />
      </div>
      <div className={styles.header_rightSide}>
        {renderHeaderButtons(RIGHT_SIDE)}
      </div>
    </header>
  );
};
