"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {Great_Vibes} from "next/font/google";
import Lottie from "react-lottie";
import {Logo} from "@/utils/AnimationData";

const logoFnt = Great_Vibes({subsets: ["latin"], weight: ["400"]});

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerFull}>
                <div className={styles.leftFooter}>
                    <Link href="/" className={`${styles.logo} ${logoFnt.className}`}>
                        <div className={styles.logoLottie}>
                            <Lottie
                                options={Logo}
                            />
                        </div>
                        <span className={styles.logoName}>Cn Restaurant.io</span>
                    </Link>
                    <p className={styles.p}>
                        Where flavor meets passion, and every dish tells a story. Crafted
                        with the finest ingredients, served with heart. Experience
                        unforgettable moments, one bite at a time.
                    </p>
                    <div className={styles.social}>
                        <Link href={"https://www.linkedin.com/in/narendran-m-d-3193b0170"}>
                            <Image
                                src="/images/socials/4.png"
                                width={25}
                                height={25}
                                className={styles.icon}
                                alt="Social icon 4"
                            />
                        </Link>
                        <Link href={"https://www.instagram.com/narendran._.d/"}>
                            <Image
                                src="/images/socials/2.png"
                                width={25}
                                height={25}
                                className={styles.icon}
                                alt="Instagram"
                            />
                        </Link>
                        <Link href={"https://www.facebook.com/"}>
                            <Image
                                src="/images/socials/1.png"
                                width={25}
                                height={25}
                                className={styles.icon}
                                alt="facebook"
                            />
                        </Link>
                        <Image
                            src="/images/socials/3.png"
                            width={25}
                            height={25}
                            className={styles.icon}
                            alt="Social icon 3"
                        />
                    </div>
                </div>
                <div className={styles.middleFooter}>
                    <h3 style={{textAlign: "center"}}>Quick Links</h3>
                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/book">Book</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blogs</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className={styles.rightFooter}>
                    <h3>Contact Us</h3>
                    <p>Phone: +918072205480</p>
                    <p>Email: naren06251999@gmail.com</p>
                    <p>Hours: 9am - 9pm</p>
                    <p>Developed by: Cn Restaurant.io</p>
                    <p>Version: 1.0.0</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                Made with ❤️️ @2024 CodeNaren.io. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
