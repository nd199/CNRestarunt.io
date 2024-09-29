// src/app/page.js
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import Menu from "../components/home-group/menu/Menu";
import AboutUs from "@/components/home-group/about/AboutUs";
import Services from "@/components/home-group/services/Services";
import Content from "@/components/home-group/content/Content";
import BlogAndArticles from "@/components/home-group/blogAndArticles/BlogAndArticles";
import Link from "next/link";

const logoFnt = Playfair_Display({
    subsets: ["latin-ext"],
    weight: ["400"],
    style: ["italic"],
});

export default function Home({ mobileMenuOpen }) {
    return (
        <div className={styles.page}>
            <div className={styles.section1}>
                {mobileMenuOpen && (
                    <div className={styles.mobileScreenRight}>
                        <ul className={styles.sideNavLinks}>
                            <li className={styles.sideNavLink}>Home</li>
                            <li className={styles.sideNavLink}>About</li>
                            <li className={styles.sideNavLink}>Menu</li>
                            <li className={styles.sideNavLink}>Blog</li>
                            <li className={styles.sideNavLink}>Contact</li>
                        </ul>
                    </div>
                )}
                <div className={styles.texts}>
                    <div className={styles.title}>
                        <h1 className={logoFnt.className}>Best food for your taste</h1>
                    </div>
                    <p className={styles.subTitle}>
                        Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
                    </p>
                    <div className={styles.buttons}>
                        <Link href={"/book"}>
                            <button className={styles.button}>Book A Table</button>
                        </Link>
                        <Link href={"/menu"}>
                            <button className={styles.btn}>Explore Menu</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.section2}>
                <Menu />
            </div>
            <div className={styles.section3}>
                <AboutUs />
            </div>
            <section className={styles.section4}>
                <Services />
            </section>
            <div className={styles.section5}>
                <Content />
            </div>
            <div className={styles.section7}>
                <BlogAndArticles />
            </div>
        </div>
    );
}
