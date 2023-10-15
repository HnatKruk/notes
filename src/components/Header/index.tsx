import { FC } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { useHeaderButtons } from '@/hooks/useHeaderButtons';
import { ResizeBorder, SearchNotes } from '@components';
import { RootStateInterface, HeaderButtonConfigInterface } from '@interfaces';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const { resizeBorderWidth } = useSelector((store: RootStateInterface) => store.viewReducer);
  const [leftButtonsConfig, rightButtonsConfig] = useHeaderButtons();

  const renderHeaderButtons = (buttonsConfig: HeaderButtonConfigInterface[]) => buttonsConfig
    .filter((buttonConfig) => !buttonConfig.isHidden)
    .map(({  class: buttonClass, Icon, ...buttonProps }) => (
      <button
        className={cx(styles.headerButton, buttonClass)}
        {...buttonProps}
      >
        <Icon />
      </button>
    ));

  return (
    <header className={styles.header}>
      <div
        className={styles.header_leftSide}
        style={{ width: `${resizeBorderWidth}px` }}
      >
        {renderHeaderButtons(leftButtonsConfig)}
        <ResizeBorder />
      </div>
      <div className={styles.header_rightSide}>
        {renderHeaderButtons(rightButtonsConfig)}
        <SearchNotes />
      </div>
    </header>
  );
};
