import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import Menu from "../components/home-group/menu/Menu";
import AboutUs from "@/components/home-group/about/AboutUs";
import Services from "@/components/home-group/services/Services";
import Content from "@/components/home-group/content/Content";
import Testimonial from "@/components/home-group/testimonials/Testimonial";
import BlogAndArticles from "@/components/home-group/blogAndArticles/BlogAndArticles";
import Link from "next/link";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.section1}>
        <div className={styles.texts}>
          <div className={logoFnt.className}>
            <span className={styles.title}>Best food for your taste </span>
          </div>
          <p className={styles.subTitle}>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
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
      </section>

      <section className={styles.section2}>
        <Menu />
      </section>
      <section className={styles.section3}>
        <AboutUs />
      </section>
      <section className={styles.section4}>
        <Services />
      </section>
      <section className={styles.section5}>
        <Content />
      </section>
      <section className={styles.section6}>
        <Testimonial />
      </section>
      <section className={styles.section7}>
        <BlogAndArticles />
      </section>
    </div>
  );
}
