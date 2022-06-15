import React from 'react';
import styles from './Schedule.module.css';
import {Title} from "../../components/Title/Title";
import {scheduleData} from "./data";
import {BackgroundTitle} from "../../components/BackgroundTitle/BackgroundTitle";

const ScheduleItem = ({time, theme, description}) => {
  return (
    <div className={styles.item}>
      <div className={styles.time}>{time}</div>
      <div className={styles.descriptionWrapper}>
        <span className={styles.theme}>{theme}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <BackgroundTitle fz={300}>19/08</BackgroundTitle>
      </div>
      <Title>расписание нашего дня</Title>
      <div className={styles.scheduleContainer}>
        {scheduleData.map(({time, theme, description}) =>
          <ScheduleItem time={time} theme={theme} description={description} key={time} />
        )}
      </div>
    </div>
  );
};

export default Schedule;
