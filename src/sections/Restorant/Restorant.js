import React from "react";
import styles from "./Restorant.module.css";
import { motion } from "framer-motion";
import restorant from "../../assets/restorant.png";
import { Link } from "../../components/Link/Link";
import { textAnimation, titleAnimation } from "../Place/Place";

export const photoAnimation = {
  variants: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.35, delay: 0.15 },
};

export const linkAnimation = {
  variants: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.45, delay: 0.25 },
};
const URL =
  "https://2gis.ru/krasnoyarsk/firm/70000001006350367?m=92.861838%2C56.011706%2F18.22";

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
          ресторан
        </motion.div>
        <div className={styles.content}>
          <div className={styles.photo}>
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
            <motion.img
              src={restorant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={photoAnimation.transition}
              variants={photoAnimation.variants}
            />
          </div>
          <motion.p
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={textAnimation.transition}
            variants={textAnimation.variants}
          >
            Праздничный ужин пройдет в банкетном зале “Пассаж” на проспекте
            Мира, 96. На велкоме вас будут ждать легкий фуршет и фотозона
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Place;
