"use client";

import styles from "./CardNew.module.scss";

interface ICardNew {
  text: string;
}

const CardNew = ({ text }: ICardNew) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default CardNew;
