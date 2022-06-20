import React from "react";
import styles from "./Concept.module.css";
import { motion } from "framer-motion";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";

const cubeAnimation = {
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
};

const Cubes = () => {
  return (
    <div className={styles.cubes}>
      <div className={styles.cubesRow}>
        {[0, 1, 2].map((i) => (
          <motion.div
            className={styles.cube}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ease: 'backIn', duration: 1, delay: 0.25 * i }}
            variants={cubeAnimation.variants}
            key={i}
          />
        ))}
      </div>
      <div className={styles.cubesRow}>
        {[0, 1, 2].map((i) => (
          <motion.div
            className={styles.cube}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ease: "backIn", duration: 1, delay: 0.1 * i + 1 }}
            variants={cubeAnimation.variants}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

const Concept = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBackground}>
        <BackgroundTitle fz={200} lh={267} left>
          CONCEPT
        </BackgroundTitle>
      </div>
      <div className={styles.rightBackground}>
        <BackgroundTitle fz={200} lh={176}>
          DRESS CODE
        </BackgroundTitle>
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <Title>что вас ждёт на нашей свадьбе</Title>
          <span className={styles.text}>
            Нас связала музыка, и мы не представляем свою жизнь и любовь без
            неё. Концепция нашего праздника - музыкальная свадьба! Поэтому мы
            просим каждого гостя подготовить музыкальный номер и исполнить его
            на праздничном ужине.
          </span>
        </div>
        <div className={styles.textWrapper}>
          <Title>дресс-код</Title>
          <span className={styles.text}>
            Наша свадьба будет проходить в определенных оттенках, а изюминкой
            наших свадебных луков будут белые кеды. Мы будем очень рады, если вы
            поддержите дресс-код и придёте в нарядах, соответствующих нашей
            цветовой палитре и белых кедах.
          </span>
        </div>
      </div>
      <Cubes />
    </div>
  );
};

export default Concept;
