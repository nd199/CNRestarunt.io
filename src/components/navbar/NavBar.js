"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const logoFnt = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} ${logoFnt.className}`}>
          <Image src="/logo.png" width={70} height={70} alt="logo" />
          <span className={styles.logoName}>Cn Restaurant.io</span>
        </Link>
        <div className={styles.links}>
          {[
            { id: 1, title: "Home", url: "/" },
            { id: 2, title: "About", url: "/about" },
            { id: 3, title: "Menu", url: "/menu" },
            { id: 4, title: "Blog", url: "/blog" },
            { id: 5, title: "Contact", url: "/contact" },
          ].map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
        <button
          className={styles.bookTable}
          onClick={() => {
            console.log("Book a table clicked");
          }}
        >
          Book A Table
        </button>
      </div>
    </div>
  );
};

export default NavBar;
