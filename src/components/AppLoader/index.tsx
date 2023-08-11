import { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface AppLoaderProps {
  customStyles?: { [key: string]: string };
};

export const AppLoader: FC<AppLoaderProps> = ({ customStyles }) => (
  <div className={cx(styles.loaderContainer, customStyles)}>
    <span className={styles.loader} />
  </div>
);

AppLoader.defaultProps = {
  customStyles: {},
};
