import Image from "next/image";
import React from "react";
import styles from "./testimonial.module.css";
import { Playfair_Display } from "next/font/google";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Testimonial = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={logoFnt.className}>What Our Customers Say...</h1>
        <section>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxHeading}>“The best restaurant”</div>
              <div className={styles.boxPara}>
                Last night, we dined at place and were simply blown away. From
                the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </div>
              <hr style={{ width: "210px", opacity: "60%" }} />
              <div className={styles.boxUser}>
                <div className={styles.boxUserAv}>
                  <Image
                    src="/avatar1.jpg"
                    width={60}
                    height={60}
                    alt="avatar"
                    className={styles.boxUserAvatar}
                  />
                </div>
                <div className={styles.boxUserInfo}>
                  <div className={styles.boxUserName}>Hari Krishna</div>
                  <div className={styles.boxUserAddress}>Bangalore, India</div>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxHeading}>“Simply delicious”</div>
              <div className={styles.boxPara}>
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </div>
              <hr style={{ width: "210px", opacity: "60%" }} />
              <div className={styles.boxUser}>
                <div className={styles.boxUserAv}>
                  <Image
                    src="/avatar3.png"
                    width={60}
                    height={60}
                    alt="avatar"
                    className={styles.boxUserAvatar}
                  />
                </div>
                <div className={styles.boxUserInfo}>
                  <div className={styles.boxUserName}>Narendran</div>
                  <div className={styles.boxUserAddress}>Chennai, India</div>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxHeading}>“One of a kind”</div>
              <div className={styles.boxPara}>
                The culinary experience at place is first to none. The
                atmosphere is vibrant, the food - nothing short of
                extraordinary. The food was the highlight of our evening. Highly
                recommended.
              </div>
              <hr style={{ width: "210px", opacity: "60%" }} />
              <div className={styles.boxUser}>
                <div className={styles.boxUserAv}>
                  <Image
                    src="/avatar2.jpg"
                    width={60}
                    height={60}
                    alt="avatar"
                    className={styles.boxUserAvatar}
                  />
                </div>
                <div className={styles.boxUserInfo}>
                  <div className={styles.boxUserName}>Geethanjali</div>
                  <div className={styles.boxUserAddress}>Trivendram,India</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
