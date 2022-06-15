import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>регистрация на свадьбу</h2>
      <p className={styles.subtitle}>
        пожалуйста, заполните поля ниже,
        <br /> чтобы мы смогли сделать вечер максимально комфортным
      </p>
      <form className={styles.form}>
        <div className={styles.formTitle}>ПРЕДСТАВЬТЕСЬ</div>
        <div className={styles.formRow}>
          <input type="text" className={styles.input} placeholder="Ваше имя" />
          <input type="text" className={styles.input} placeholder="Фамилия" />
        </div>
        <div className={styles.formTitle}>ВАШЕ РЕШЕНИЕ</div>
        <div className={styles.formRow}>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="visit1"
              name="visit"
              value="registrOnly"
              className={styles.radioInput}
            />
            <label htmlFor="visit1" className={styles.radio}>
              приду на регистрацию
            </label>
          </div>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="visit2"
              name="visit"
              value="dinner"
              className={styles.radioInput}
            />
            <label htmlFor="visit2" className={styles.radio}>
              приду на регистрацию
            </label>
          </div>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="visit3"
              name="visit"
              value="both"
              className={styles.radioInput}
            />
            <label htmlFor="visit3" className={styles.radio}>
              приду на регистрацию
            </label>
          </div>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="visit4"
              name="visit"
              value="cantCome"
              className={styles.radioInput}
            />
            <label htmlFor="visit4" className={styles.radio}>
              приду на регистрацию
            </label>
          </div>
        </div>
        <div className={styles.formTitle}>предпочтения по напиткам</div>
        <div className={styles.formRow}>
          <div className={styles.checkboxRow}>
            <input type="checkbox" id="whiteWine" name="whiteWine" />
            <label htmlFor="whiteWine">вино белое</label>
          </div>
          <div className={styles.checkboxRow}>
            <input type="checkbox" id="redWine" name="redWine" />
            <label htmlFor="redWine">вино красное</label>
          </div>
          <div className={styles.checkboxRow}>
            <input type="checkbox" id="whiskey" name="whiskey" />
            <label htmlFor="whiskey">коньяк/виски</label>
          </div>
          <div className={styles.checkboxRow}>
            <input type="checkbox" id="teatotal" name="teatotal" />
            <label htmlFor="teatotal">не пью алкоголь</label>
          </div>
        </div>
        <div className={styles.formTitle}>если есть, что добавить</div>
        <div className={styles.formRow}>
          <textarea
            name="comments"
            id="coments"
            placeholder="особые предпочтения в еде и напитках, наличие аллергии или любые другие пожелания"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.submit}>ОТПРАВИТЬ ФОРМУ</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
