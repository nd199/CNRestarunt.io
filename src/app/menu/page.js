import React from "react";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import ItemCard from "@/components/menu/ItemCard";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const items = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: "₹200",
    imageName: "pbm.jpeg",
    desc: "A classic Indian dish made with locally sourced paneer, butter, and spices. Pair it with naan or roti for a quick and easy meal.",
  },
  {
    id: 2,
    name: "ChocolateCake",
    price: "₹150",
    imageName: "ChocolateCake.jpeg",
    desc: "A classic Indian dessert made with locally sourced milk, sugar, and cocoa powder. Pair it with brownies or cheesecakes for a healthy and delicious treat.",
  },
  {
    id: 3,
    name: "IceCream",
    price: "₹100",
    imageName: "iceCream.jpeg",
    desc: "A classic Indian Ice cream made with locally sourced milk, sugar, and vanilla extract.",
  },
  {
    id: 4,
    imageName: "pannertikka.jpg",
    name: "PaneerTikka",
    price: "₹200",
    desc: "A classic Indian dish made with locally sourced paneer, spices, and yogurt. Pair it with naan or roti for a quick and easy meal.",
  },
  {
    id: 5,
    imageName: "samosa.jpeg",
    name: "Samosa",
    price: "₹50",
    desc: "A classic Indian dish made with locally sourced potatoes, spices, and yogurt. Pair it with naan or roti for a quick and easy meal.",
  },
];

const Dashboard = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={logoFnt.className}>
            <h1 className={styles.title}>Explore Our Menu</h1>
          </div>
          <div className={styles.para}>
            <p>
              <strong>
                Welcome to CN_Restaurant.io, where the vibrant flavors of India
                come alive. Our menu is a celebration of rich culinary
                traditions, offering a diverse range of dishes crafted with the
                freshest ingredients.
              </strong>{" "}
            </p>
            <p>
              Whether you&apos;re craving bold spices or subtle tastes, each
              meal is prepared with passion and care, bringing the essence of
              India to your plate. Join us on a flavorful journey that delights
              the senses and satisfies every craving.
            </p>
          </div>
        </div>
        <div className={styles.containerMiddle}>
          <div className={styles.categories}>
            <hr className={styles.underline} />
            <h2 className={styles.need}>Choose Your need</h2>
            <div className={styles.needButtons}>
              <button className={styles.needButton}>All</button>
              <button className={styles.needButton}>Breakfast</button>
              <button className={styles.needButton}>Main Dish</button>
              <button className={styles.needButton}>Drinks</button>
              <button className={styles.needButton}>Desserts</button>
            </div>
            <hr className={styles.underline} />
          </div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.filter}>
            <select className={styles.select}>
              <option value="" defaultChecked>
                Veg
              </option>
              <option value="">Non Veg</option>
              <option value="">Vegan</option>
              <option value="">Gluten Free</option>
              <option value="">Sea Food</option>
            </select>
          </div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.items}>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
