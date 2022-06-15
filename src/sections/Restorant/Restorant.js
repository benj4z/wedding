import React from "react";
import styles from "./Restorant.module.css";
import restorant from "../../assets/restorant.png";
import { Link } from "../../components/Link/Link";

const URL =
  "https://2gis.ru/krasnoyarsk/firm/985691699739212?m=92.886371%2C56.012807%2F18.22";

const Place = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>ресторан</div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <div className={styles.linkPlacer}>
              <Link url={URL}>смотреть на карте</Link>
            </div>
            <img src={restorant} />
          </div>
          <p className={styles.text}>
            Праздничный ужин пройдет в банкетном зале “Пассаж” на проспекте
            Мира, 96. Наверное, надо еще чето дописать, пока не знаю что,
            подумаю еще
          </p>
        </div>
      </div>
    </div>
  );
};

export default Place;
