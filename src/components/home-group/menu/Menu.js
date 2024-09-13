import React from "react";
import styles from "./menu.module.css";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Menu = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={(styles.title, logoFnt.className)}>Browse Our Menu</h1>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.iconShadow}>
              <Image
                src="/images/menu/home:menu/platter.png"
                width={62}
                height={60}
                alt="breakfast"
                className={styles.m_icon}
              />
            </div>
            <h2 className={styles.boxTitle}>Breakfast</h2>
            <p className={styles.boxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <h5>Explore Menu</h5>
          </div>
          <div className={styles.box}>
            <div className={styles.iconShadow}>
              <Image
                src="/images/menu/home:menu/lunch.png"
                width={62}
                height={60}
                alt="main dish"
                className={styles.m_icon}
              />
            </div>
            <h2 className={styles.boxTitle}>Main Dish</h2>
            <p className={styles.boxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <h5>Explore Menu</h5>
          </div>
          <div className={styles.box}>
            <div className={styles.iconShadow}>
              <Image
                src="/images/menu/home:menu/cocktail.png"
                width={62}
                height={60}
                alt="drinks"
                className={styles.m_icon}
              />
            </div>
            <h2 className={styles.boxTitle}>Drinks</h2>
            <p className={styles.boxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <h5>Explore Menu</h5>
          </div>
          <div className={styles.box}>
            <div className={styles.iconShadow}>
              <Image
                src="/images/menu/home:menu/cake.png"
                width={62}
                height={60}
                alt="desserts"
                className={styles.m_icon}
              />
            </div>
            <h2 className={styles.boxTitle}>Desserts</h2>
            <p className={styles.boxText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <h5>Explore Menu</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
