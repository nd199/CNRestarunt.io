"use client";
import React from "react";
import styles from "./about.module.css";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { MailOutline, PhoneOutlined, PlaceOutlined } from "@mui/icons-material";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const AboutUs = () => {
  return (
    <div className={styles.page}>
      <h1 className={(styles.title, logoFnt.className)}>About Us</h1>
      <section className={styles.sec}>
        <section1 className={styles.section}>
          <div className={styles.videoSection}>
            <video className={styles.video} autoPlay muted loop>
              <source src="videos/AboutVideo.mp4" type="video/mp4" />
            </video>
            <div className={styles.overlay}>
              <h3 className={styles.overlayTitle}>Come and visit us</h3>
              <p className={styles.overlaySubtitle}>
                <PhoneOutlined className={styles.overlayIcon} />
                (+91) 8072205480
              </p>
              <p className={styles.overlaySubtitle}>
                <MailOutline className={styles.overlayIcon} />
                naren06251999@gmail.com
              </p>
              <p className={styles.overlaySubtitle}>
                <PlaceOutlined className={styles.overlayIcon} />
                No:5 Ponniamman Medu Chennai-600110, TN, India.
              </p>
            </div>
          </div>
        </section1>
        <section2 className={styles.section}>
          <h5 className={(logoFnt.className, styles.title2)}>
            We provide healthy food for your family.
          </h5>
          <p className={styles.p1}>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city,s rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p className={styles.p2}>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className={styles.MoreButton}>
            <Link href="/about">More about Us</Link>
          </button>
        </section2>
      </section>
    </div>
  );
};

export default AboutUs;
