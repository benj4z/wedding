import React from "react";
import styles from "./Main.module.css";
import { ReactComponent as Logo } from "../../assets/names.svg";
import mainPhoto from "../../assets/main-photo.svg";
import { motion } from "framer-motion";
import {
  miniTitleAnimation,
  signAnimation,
  titleAnimation,
  imgAnimation,
} from "./animations";

const Main = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.grid}>
        <motion.div
          initial={miniTitleAnimation.variants.hidden}
          animate={miniTitleAnimation.variants.visible}
          variants={miniTitleAnimation.variants}
          transition={miniTitleAnimation.transition}
          className={styles.miniTitle}
        >
          <span>WEDDING DAY</span>
          <span>19.08.2022</span>
        </motion.div>
        {/*<img src={names} alt="1" />*/}
        <div className={styles.logoWrapper}>
          <Logo />
          <motion.div
            initial={signAnimation.variants.visible}
            animate={signAnimation.variants.hidden}
            variants={signAnimation.variants}
            transition={signAnimation.transition}
            className={styles.signHidder}
          />
        </div>
        <motion.h1
          initial={titleAnimation.variants.hidden}
          animate={titleAnimation.variants.visible}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className={styles.title}
        >
          МЫ РАДЫ ПРИГЛАСИТЬ
          <br />
          ВАС НА НАШУ СВАДЬБУ!
        </motion.h1>
        <motion.div
          className={styles.photoWrapper}
          initial={imgAnimation.variants.hidden}
          animate={imgAnimation.variants.visible}
          variants={imgAnimation.variants}
          transition={imgAnimation.transition}
        >
          <img src={mainPhoto} alt="1" />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
