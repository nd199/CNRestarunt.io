import React from "react";
import styles from "./content1.module.css";
import { Playfair_Display } from "next/font/google";

const logoFnt = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const Content1 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.section}>
        <div className={styles.section1}>
          <div className={styles.section1Top}>
            <h1 className={(logoFnt.className, styles.title)}>
              A little information for our valuable guest
            </h1>
            <p className={styles.para}>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className={styles.section1Bottom}>
            <div className={styles.section1Bottom1}>
              <div className={styles.box}>
                <h5 className={styles.boxTitle}>3</h5>
                <p className={styles.boxPara}>Locations</p>
              </div>
              <div className={styles.box}>
                <h5 className={styles.boxTitle}>2012</h5>
                <p className={styles.boxPara}>Founded</p>
              </div>
              <div className={styles.box}>
                <h5 className={styles.boxTitle}>65+</h5>
                <p className={styles.boxPara}>Staff</p>
              </div>
              <div className={styles.box}>
                <h5 className={styles.boxTitle}>100%</h5>
                <p className={styles.boxPara}>Satisfied Customers</p>
              </div>
            </div>
            <div className={styles.section1Bottom2}>
              <video className={styles.video} autoPlay muted loop>
                <source src="/videos/content2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <video className={styles.video} autoPlay muted loop>
            <source src="/videos/content2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Content1;
