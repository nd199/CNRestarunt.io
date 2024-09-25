import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const logoFnt = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerFull}>
        <div className={styles.leftFooter}>
          <Link href="/" className={`${styles.logo} ${logoFnt.className}`}>
            <Image src="/images/logo.png" width={70} height={70} alt="logo" />
            <span className={styles.logoName}>Cn Restaurant.io</span>
          </Link>
          <p className={styles.p}>
            Where flavor meets passion, and every dish tells a story. Crafted
            with the finest ingredients, served with heart. Experience
            unforgettable moments, one bite at a time.
          </p>
          <div className={styles.social}>
            <Image
              src="/images/socials/1.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="Social icon 1"
            />
            <Image
              src="/images/socials/2.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="Social icon 2"
            />
            <Image
              src="/images/socials/3.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="Social icon 3"
            />
            <Image
              src="/images/socials/4.png"
              width={25}
              height={25}
              className={styles.icon}
              alt="Social icon 4"
            />
          </div>
        </div>
        <div className={styles.middleFooter}>
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <Link href="/menu">Home</Link>
            <Link href="/contact">Menu</Link>
            <Link href="/book">Book</Link>
            <Link href="/about">About</Link>
            <Link href="/pages">Blogs</Link>
            <Link href="/blog">Contact</Link>
          </div>
        </div>
        <div className={styles.rightFooter}></div>
      </div>
      <div className={styles.footerBottom}>
        @2024 CodeNaren.io. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
