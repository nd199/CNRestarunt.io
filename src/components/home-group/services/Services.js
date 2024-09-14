import React from "react";
import styles from "./services.module.css";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Services = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={logoFnt.className}>
            We also offer unique services for your events
          </h1>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <Image
              src={"/images/services/catering.jpeg"}
              width={206}
              height={220}
              alt="catering"
              className={styles.sImage}
            />
            <div className={styles.textPart}>
              <h2 className={styles.boxTitle}>Catering</h2>
              <p className={styles.boxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src={"/images/services/birthday.jpg"}
              width={206}
              height={220}
              alt="birthdays"
              className={styles.sImage}
            />
            <div className={styles.textPart}>
              <h2 className={styles.boxTitle}>Birthdays</h2>
              <p className={styles.boxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src={"/images/services/wedding.jpeg"}
              width={206}
              height={220}
              alt="wedding"
              className={styles.sImage}
            />
            <div className={styles.textPart}>
              <h2 className={styles.boxTitle}>Wedding</h2>
              <p className={styles.boxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src={"/images/services/events.jpg"}
              width={206}
              height={220}
              alt="events"
              className={styles.sImage}
            />
            <div className={styles.textPart}>
              <h2 className={styles.boxTitle}>Events</h2>
              <p className={styles.boxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
