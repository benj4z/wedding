import React from "react";
import styles from "./Concept.module.css";
import { Title } from "../../components/Title/Title";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";

const Cubes = () => {
  return (
    <div className={styles.cubes}>
      <div className={styles.cubesRow}>
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
      </div>
      <div className={styles.cubesRow}>
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
      </div>
    </div>
  )
}

const Concept = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBackground}>
        <BackgroundTitle fz={200} lh={267}>CONCEPT</BackgroundTitle>
      </div>
      <div className={styles.rightBackground}>
        <BackgroundTitle fz={200} lh={176}>DRESS CODE</BackgroundTitle>
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
