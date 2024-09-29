"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import {Great_Vibes} from "next/font/google";
import {usePathname} from "next/navigation";
import Lottie from "react-lottie";
import {Logo} from "@/utils/AnimationData";

const logoFnt = Great_Vibes({subsets: ["latin"], weight: ["400"]});

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const getUrl = usePathname();

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

    const handleBurgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={`${styles.logo} ${logoFnt.className}`}>
                    <div className={styles.logoLottie}>
                        <Lottie
                            options={Logo}
                        />
                    </div>
                    <span className={styles.logoName}>Cn Restaurant.io</span>
                </Link>
                <div className={`${styles.navMenu} ${menuOpen ? styles.mobile : ""}`}>
                    {[
                        {id: 1, title: "Home", url: "/"},
                        {id: 2, title: "About", url: "/about"},
                        {id: 3, title: "Menu", url: "/menu"},
                        {id: 4, title: "Blog", url: "/blog"},
                        {id: 5, title: "Contact", url: "/contact"},
                    ].map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className={link.url === getUrl ? styles.active : styles.link}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className={styles.mobileLeft}>
                    <div className={styles.burgerMenu} onClick={handleBurgerClick}>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                    </div>
                    <Link
                        href="/book"
                        className={getUrl == "/book" ? styles.hideButton : ""}
                    >
                        <button className={styles.bookTable}>Book A Table</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
