import React from 'react';
import styles from './Place.module.css'
import place from '../../assets/place.png'
import { Link } from "../../components/Link/Link";

const URL = 'https://2gis.ru/krasnoyarsk/firm/985691699739212?m=92.886371%2C56.012807%2F18.22'

const Place = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          место <br/> торжества
        </div>
        <div className={styles.content}>
          <div className={styles.photo}>
            <img src={place}/>
            <div className={styles.linkPlacer}>
              <Link url={URL}>смотреть на карте</Link>
            </div>
          </div>
          <p className={styles.text}>
            Торжественная регистрация нашего брака пройдет
            19 августа в Доме семейных торжеств на проспекте Мира, 24 г.
            чето наверное надо еще дописать, пока не знаю что
          </p>
        </div>
      </div>
    </div>
  );
};

export default Place;
