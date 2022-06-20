import React from "react";
import { motion } from "framer-motion";
import styles from "./BackgroundTitle.module.css";

const leftAnimation = {
  variants: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  },
  transition: { ease: "easeInOut", duration: 1.5 },
};

const rightAnimation = {
  variants: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  },
  transition: { ease: "easeInOut", duration: 1.5, delay: 0.25 },
};

export const BackgroundTitle = ({ children, fz, lh, left = false }) => {

  return (
    <motion.div
      className={styles.font}
      style={{ fontSize: `${fz}px`, lineHeight: `${lh}px` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={left ? leftAnimation.transition : rightAnimation.transition}
      variants={left ? leftAnimation.variants : rightAnimation.variants }
    >
      {children}
    </motion.div>
  );
};
