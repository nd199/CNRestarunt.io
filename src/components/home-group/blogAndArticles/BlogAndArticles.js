import Image from "next/image";
import styles from "./ba.module.css";
import { Playfair_Display } from "next/font/google";
import React from "react";
import Link from "next/link";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const BlogAndArticles = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={(styles.pageTitle, styles.title)}>
            <h1 className={logoFnt.className}>Our Blog & Articles</h1>
          </div>
          <Link href="/blog">
            <button className={styles.headButton}>Read All Articles</button>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.section1}>
            <Image
              src={"/images/blog&articles/biryani.jpg"}
              width={430}
              height={390}
              alt="Biryani"
              className={styles.biryani}
            />
            <div className={styles.desc}>
              <div className={styles.date}>January 3, 2024</div>
              <div className={styles.paraHead}>
                The secret tips & tricks to prepare a perfect biryani for our
                customers
              </div>
              <div className={styles.para}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam illum nesciunt optio quod neque, non tempore porro
                dolorem velit eligendi soluta odit possimus sint voluptatem nam
                nulla dolores earum quisquam?
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.section2Top}>
              <div className={styles.section2TopPart1}>
                <Image
                  src={"/images/blog&articles/burger.png"}
                  width={420}
                  height={420}
                  alt="burger"
                  className={styles.section2TopPart1Image}
                />
                <div className={styles.section2TopPart1Desc}>
                  <div className={styles.section2TopPart1DescHead}>
                    The secret tips & tricks to prepare a perfect biryani for
                    our customers
                  </div>
                  <div className={styles.section2TopPart1DescPara}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam illum nesciunt optio quod neque, non tempore porro
                    dolorem velit eligendi soluta odit possimus sint voluptatem
                    nam nulla dolores earum quisquam?
                  </div>
                </div>
              </div>
              <div className={styles.section2TopPart2}>
                <Image
                  src={"/images/blog&articles/PodiIdili.jpeg"}
                  width={420}
                  height={420}
                  alt="podiIdli"
                  className={styles.section2TopPart2Image}
                />
                <div className={styles.section2TopPart2Desc}>
                  <div className={styles.section2TopPart2DescHead}>
                    The secret tips & tricks to prepare a perfect biryani for
                    our customers
                  </div>
                  <div className={styles.section2TopPart2DescPara}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam illum nesciunt optio quod neque, non tempore porro
                    dolorem velit eligendi soluta odit possimus sint voluptatem
                    nam nulla dolores earum quisquam?
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section2Bottom}>
              <div className={styles.section2BottomPart1}>
                <Image
                  src={"/images/blog&articles/Cakes.png"}
                  width={420}
                  height={420}
                  alt="cakes"
                  className={styles.section2BottomPart1Image}
                />
                <div className={styles.section2BottomPart1Desc}>
                  <div className={styles.section2BottomPart1DescHead}>
                    The secret tips & tricks to prepare a perfect biryani for
                    our customers
                  </div>
                  <div className={styles.section2BottomPart1DescPara}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam illum nesciunt optio quod neque, non tempore porro
                    dolorem velit eligendi soluta odit possimus sint voluptatem
                    nam nulla dolores earum quisquam?
                  </div>
                </div>
              </div>
              <div className={styles.section2BottomPart2}>
                <Image
                  src={"/images/blog&articles/gulabJamun.jpg"}
                  width={420}
                  height={420}
                  alt="jamun"
                  className={styles.section2BottomPart2Image}
                />
                <div className={styles.section2BottomPart2Desc}>
                  <div className={styles.section2BottomPart2DescHead}>
                    The secret tips & tricks to prepare a perfect biryani for
                    our customers
                  </div>
                  <div className={styles.section2BottomPart2DescPara}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam illum nesciunt optio quod neque, non tempore porro
                    dolorem velit eligendi soluta odit possimus sint voluptatem
                    nam nulla dolores earum quisquam?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndArticles;
