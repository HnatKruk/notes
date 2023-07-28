import React from 'react';
import styles from './styles.module.scss'

export const HeaderButton = ({ children, onClick }) => (
  <button className={styles.headerButton} onClick={onClick}>
    {children}
  </button>
);
