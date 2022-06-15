import React from 'react';
import styles from './Link.module.css'

export const Link = ({children, url}) => {
  return (
    <a className={styles.link} href={url} target="_blank">{children}</a>
  );
};

