import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    visit: null,
    whiteWine: false,
    redWine: false,
    whiskey: false,
    teatotal: false,
    comments: "",
  });

  const [submitted, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setData((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    fetch("https://www.actionforms.io/e/r/evgeny-jakuba-test", requestOptions)
      .then((res) => {
        res.text();
      })
      .then((res) => setSubmit(true))
      .catch((error) => alert("Что то пошло не так, обязательно попробуйте зарегистрироваться снова чуть позже!"));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>регистрация на свадьбу</h2>
      <p className={styles.subtitle}>
        пожалуйста, заполните поля ниже,
        <br /> чтобы мы смогли сделать вечер максимально комфортным
      </p>
      {submitted ? (
        <div className={styles.successWrap}>
          <h2 className={styles.successTitle}>Спасибо за регистрацию!</h2>
          <p className={styles.successText}>
            Присоединяйтесь к{" "}
            <a href="https://t.me/+MDa-S8AjKXA5ODIy" target="_blank">
              группе в телеграм
            </a>{" "}
            чтобы не пропустить все анонсы!
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.formTitle}>ПРЕДСТАВЬТЕСЬ</div>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Ваше имя"
              value={data.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="surname"
              className={styles.input}
              placeholder="Фамилия"
              value={data.surname}
              onChange={handleChange}
              required
            />
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
                onChange={handleChange}
                required
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
                value="both"
                onChange={handleChange}
                className={styles.radioInput}
              />
              <label htmlFor="visit2" className={styles.radio}>
                приду на оба мероприятия
              </label>
            </div>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="visit3"
                name="visit"
                value="dinner"
                onChange={handleChange}
                className={styles.radioInput}
              />
              <label htmlFor="visit3" className={styles.radio}>
                приду на праздничный ужин
              </label>
            </div>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="visit4"
                name="visit"
                value="cantCome"
                onChange={handleChange}
                className={styles.radioInput}
              />
              <label htmlFor="visit4" className={styles.radio}>
                не смогу прийти
              </label>
            </div>
          </div>
          <div className={styles.formTitle}>предпочтения по напиткам</div>
          <div className={styles.formRow}>
            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                id="whiteWine"
                name="whiteWine"
                onChange={handleChange}
              />
              <label htmlFor="whiteWine">вино белое</label>
            </div>
            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                id="redWine"
                name="redWine"
                onChange={handleChange}
              />
              <label htmlFor="redWine">вино красное</label>
            </div>
            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                id="whiskey"
                name="whiskey"
                onChange={handleChange}
              />
              <label htmlFor="whiskey">коньяк/виски</label>
            </div>
            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                id="teatotal"
                name="teatotal"
                onChange={handleChange}
              />
              <label htmlFor="teatotal">не пью алкоголь</label>
            </div>
          </div>
          <div className={styles.formTitle}>если есть, что добавить</div>
          <div className={styles.formRow}>
            <textarea
              name="comments"
              id="comments"
              onChange={handleChange}
              placeholder="особые предпочтения в еде и напитках, наличие аллергии или любые другие пожелания"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.submit}>ОТПРАВИТЬ ФОРМУ</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
