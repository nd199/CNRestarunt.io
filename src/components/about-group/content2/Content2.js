import React from "react";
import { Playfair_Display } from "next/font/google";
import styles from "./content2.module.css";
import Image from "next/image";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Content2 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={logoFnt.className}>Our Partners :)</h1>
        <div>
          <div className={styles.circles}>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/swiggy.png"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/zomato.jpeg"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/Uber.png"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/dunzo.png"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/dominos.jpeg"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/eat.png"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/pizzaHut.jpeg"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleUserAv}>
                <Image
                  src="/images/partners/deliveroo.png"
                  width={1460}
                  height={1460}
                  alt="avatar"
                  className={styles.circleUserAvatar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
