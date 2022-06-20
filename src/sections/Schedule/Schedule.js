import React from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Schedule.module.css";
import { Title } from "../../components/Title/Title";
import { scheduleData } from "./data";
import { BackgroundTitle } from "../../components/BackgroundTitle/BackgroundTitle";
import { listAnimation } from "./animations";

const ScheduleItem = ({ time, theme, description, index }) => {
  return (
    <motion.div
      className={styles.item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.05 * index }}
      variants={listAnimation.variants}
    >
      <div className={styles.time}>{time}</div>
      <div className={styles.descriptionWrapper}>
        <span className={styles.theme}>{theme}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
};

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <BackgroundTitle fz={300}>19/08</BackgroundTitle>
      </div>
      <Title>расписание нашего дня</Title>
      <motion.div className={styles.scheduleContainer}>
        {scheduleData.map(({ time, theme, description }, index) => (
          <ScheduleItem
            time={time}
            theme={theme}
            description={description}
            key={time}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Schedule;
