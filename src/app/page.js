import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import Menu from "@/components/(homeGroup)/menu/Menu";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

export default function Home() {
  return (
    <sections>
      <section1 className={styles.page}>
        <div className={styles.texts}>
          <div className={logoFnt.className}>
            <span className={styles.title}>Best food for your taste </span>
          </div>
          <p className={styles.subTitle}>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <di className={styles.buttons}>
            <button className={styles.button}>Book A Table</button>
            <button className={styles.btn}>Explore Menu</button>
          </di>
        </div>
        <div className={styles.item}></div>
      </section1>
      <section2>
        <Menu />
      </section2>
      <section3></section3>
      <section4></section4>
    </sections>
  );
}
