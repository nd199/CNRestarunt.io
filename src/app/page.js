import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import Menu from "@/components/home-group/menu/Menu";
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
    <sections>
      <section1 className={styles.page}>
        <div className={styles.texts}>
          <div className={logoFnt.className}>
            <span className={styles.title}>Best food for your taste </span>
          </div>
          <p className={styles.subTitle}>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <di className={styles.buttons}>
            <Link href={"/book"}>
              <button className={styles.button}>Book A Table</button>
            </Link>
            <Link href={"/menu"}>
              <button className={styles.btn}>Explore Menu</button>
            </Link>
          </di>
        </div>
        <div className={styles.item}></div>
      </section1>
      <section2>
        <Menu />
      </section2>
      <section3>
        <AboutUs />
      </section3>
      <section4>
        <Services />
      </section4>
      <section5>
        <Content />
      </section5>
      <section5>
        <Testimonial />
      </section5>
      <section5>
        <BlogAndArticles />
      </section5>
    </sections>
  );
}
