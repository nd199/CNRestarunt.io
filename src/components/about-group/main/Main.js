"use client";
import React from "react";
import styles from "./main.module.css";
import { Playfair_Display } from "next/font/google";
import { MailOutline, PhoneOutlined, PlaceOutlined } from "@mui/icons-material";

const logoFnt = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const Main = () => {
  return (
    <div className={styles.page}>
      <h1 className={logoFnt.className}>
        Cn Restaurant.io: A Taste of India, Elevated{" "}
      </h1>
      <section className={styles.sec}>
        <section1 className={styles.section}>
          <div className={styles.videoSection}>
            <video className={styles.video} autoPlay muted loop>
              <source src="/about2.mp4" type="video/mp4" />
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
          <p className={styles.p1}>
            At Cn Restaurant.io, we take pride in offering wholesome, delicious
            meals for your family, inspired by the rich culinary traditions of
            India. Our journey began with a vision to create an unforgettable
            dining experience that combines gourmet cuisine, impeccable service,
            and a vibrant atmosphere. Every dish we serve is crafted with fresh
            ingredients and the finest Indian spices, celebrating both local
            roots and global influences.
          </p>
          <p className={styles.p2}>
            Dining at Cn Restaurant.io goes beyond just food, it’s about
            creating lasting memories. Our dedicated team, known for their warm
            hospitality and attention to detail, ensures every visit feels
            special and enjoyable. Whether you’re gathering with family or
            hosting a special event, we’re here to make your dining experience
            exceptional from start to finish.
          </p>
        </section2>
      </section>
    </div>
  );
};

export default Main;
