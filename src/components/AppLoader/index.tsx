import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface AppLoaderProps {
  customStyles?: React.CSSProperties;
};

export const AppLoader: FC<AppLoaderProps> = ({ customStyles }) => (
  <div className={classNames(styles.loaderContainer, customStyles)}>
    <span className={styles.loader} />
  </div>
);

AppLoader.defaultProps = {
  customStyles: {},
};
