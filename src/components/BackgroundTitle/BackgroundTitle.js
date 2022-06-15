import React from "react";
import styles from "./BackgroundTitle.module.css";

export const BackgroundTitle = ({ children, fz, lh }) => {
  return (
    <span className={styles.font} style={{ fontSize: `${fz}px`, lineHeight: `${lh}px` }}>
      {children}
    </span>
  );
};
