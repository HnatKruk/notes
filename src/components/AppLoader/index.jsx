import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const AppLoader = ({ customStyles }) => (
  <div className={classNames(styles.loaderContainer, customStyles)}>
    <span className={styles.loader} />
  </div>
);

AppLoader.defaultProps = {
  customStyles: {},
};
