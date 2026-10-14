import Card from "./Card";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <div>
      {/* ====== Navbar ====== */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img
            src="./images/logo2.png"
            className={styles.logo}
            alt="company logo"></img>
        </div>
        <div className={styles.menu}>
          <button>Menu 1</button>
          <button>Menu 2</button>
          <button>Menu 3</button>
          <button>Login</button>
          <img src="./images/burgerMenu.svg" className={styles.burgerMenu} />
        </div>
        <div className={styles.dropDownMenu}>
          <button>Menu 1</button>
          <button>Menu 2</button>
          <button>Menu 3</button>
          <button>Login</button>
        </div>
      </nav>

      {/* ====== Hero Section ====== */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet</h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloremque, similique distinctio dicta nihil maxime reprehenderit
            amet nostrum asperiores voluptatibus eaque ullam nisi vel ex?
            Corporis at nisi laboriosam aliquam?
          </p> */}
        </div>
        <img
          src="./images/logo.png"
          className={styles.heroLogo}
          alt="company logo"
        />
        <div className={styles.searchField}>
          <input type="seach" className={styles.searchInput}></input>
          <button className={styles.searchBtn}>Search</button>
        </div>
      </section>

      {/* ====== Card Section ====== */}
      <section className={styles.cardSection}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
