import styles from "./Card.module.css";
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src="./images/logo.png"
          className={styles.cardLogo}
          alt="company logo"
        />
      </div>
      <div className={styles.cardText}>
        <h2>Lorem ipsum</h2>
        <p>dolor sit</p>
      </div>
    </div>
  );
}
