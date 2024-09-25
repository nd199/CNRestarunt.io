import React from "react";
import styles from "./content.module.css";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Content = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.section}>
          <section1 className={styles.section1}>
            <div>
              <Image
                src={"/images/offer&Delivery/CookTogether.jpeg"}
                width={331}
                height={500}
                alt="main"
                className={styles.Image}
              />
            </div>
            <div>
              <Image
                src={"/images/offer&Delivery/NonVeg.jpeg"}
                width={240}
                height={240}
                alt="side1"
                className={styles.Image}
              />
              <Image
                src={"/images/offer&Delivery/veg.jpeg"}
                width={240}
                height={250}
                alt="side2"
                className={styles.Image}
              />
            </div>
          </section1>
          <section2 className={styles.section2}>
            <h6 className={(styles.sec2title, logoFnt.className)}>
              Fastest Food Delivery in City
            </h6>
            <p className={styles.subTitle}>
              Quick delivery across city, feel our delight taste within minutes
              at your home.
            </p>
            <div className={styles.quickPoints}>
              <div className={styles.quickPoint}>
                <Image
                  src="/images/offer&Delivery/delivery.png"
                  width={40}
                  height={40}
                  alt="delivery"
                  className={styles.quickIcon}
                />
                <p>Delivery within minutes</p>
              </div>
              <div className={styles.quickPoint}>
                <Image
                  src="/images/offer&Delivery/offer.png"
                  width={40}
                  height={40}
                  alt="offer"
                  className={styles.quickIcon}
                />
                <p>Best Offer & Prices</p>
              </div>
              <div className={styles.quickPoint}>
                <Image
                  src="/images/offer&Delivery/cart.png"
                  width={40}
                  height={40}
                  alt="cart"
                  className={styles.quickIcon}
                />
                <p>Online Services Available</p>
              </div>
            </div>
          </section2>
        </section>
      </div>
    </div>
  );
};

export default Content;
