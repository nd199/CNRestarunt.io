import styles from "./ContainerTop.module.css";
import { Playfair_Display } from "next/font/google";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const ContainerTop = () => {
  return (
    <div className={styles.containerTop}>
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1 className={logoFnt.className}>
            Discover Exquisite Indian Flavors
          </h1>
          <p className={styles.subtitle}>Where Tradition Meets Modern Taste</p>
        </div>
        <div className={styles.para}>
          <p>
            <strong>
              Welcome to CN_Restaurant.io, where we bring the rich, vibrant
              flavors of India to your table.
            </strong>
          </p>
          <p>
            Indulge in a diverse array of dishes prepared with passion,
            precision, and the freshest ingredients. Join us for an
            unforgettable dining experience that blends tradition with a modern
            twist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContainerTop;
