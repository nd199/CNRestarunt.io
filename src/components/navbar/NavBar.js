"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const logoFnt = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 4,
    title: "Pages",
    url: "/pages",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={(styles.logo, logoFnt.className)}>
        <Image src="/logo.png" width={70} height={70} alt="logo" />
        <span className={styles.logoName}>Cn Restaurant.io</span>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <button
        className={styles.bookTable}
        onClick={() => {
          console.log("LoggedOut");
        }}
      >
        Book A Table
      </button>
    </div>
  );
};

export default NavBar;
