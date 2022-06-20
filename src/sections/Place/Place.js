import React from "react";
import styles from "./Place.module.css";
import place from "../../assets/place.png";
import { motion } from "framer-motion";
import { Link } from "../../components/Link/Link";

const URL =
  "https://2gis.ru/krasnoyarsk/firm/985691699739212?m=92.886371%2C56.012807%2F18.22";

export const titleAnimation = {
  variants: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { duration: 0.45 },
};

export const photoAnimation = {
  variants: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  transition: { ease: 'easeOut', duration: 0.35, delay: 0.15 },
};

export const linkAnimation = {
  variants: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  transition: { ease: 'easeOut', duration: 0.45, delay: 0.25 },
};

export const textAnimation = {
  variants: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  transition: { duration: 0.45, delay: 0.55 },
};

const Place = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          className={styles.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={titleAnimation.transition}
          variants={titleAnimation.variants}
        >
          место <br /> торжества
        </motion.div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <motion.img
              src={place}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={photoAnimation.transition}
              variants={photoAnimation.variants}
            />
            <motion.div
              className={styles.linkPlacer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={linkAnimation.transition}
              variants={linkAnimation.variants}
            >
              <Link url={URL}>смотреть на карте</Link>
            </motion.div>
          </div>
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={textAnimation.transition}
            variants={textAnimation.variants}
          >
            Торжественная регистрация нашего брака пройдет 19 августа в Доме
            семейных торжеств на проспекте Мира, 24 г. чето наверное надо еще
            дописать, пока не знаю что
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Place;
