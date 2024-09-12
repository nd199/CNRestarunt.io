"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import ItemCard from "@/components/menu/ItemCard";
import { items } from "@/utils/Utils";

const logoFnt = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["italic"],
});

const Dashboard = () => {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleType = (type) => {
    setType(type);
  };

  const filteredItems = items.filter((item) => {
    const matchCategory =
      category === "All" || item.category.includes(category);
    const matchType = type === "All" || item.type === type;
    return matchCategory && matchType;
  });

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
            <h2 className={styles.need}>Choose Your Need</h2>
            <div className={styles.needButtons}>
              <button
                className={styles.needButton}
                onClick={() => handleType("All")}
              >
                All
              </button>
              <button
                className={styles.needButton}
                onClick={() => handleType("Breakfast")}
              >
                Breakfast
              </button>
              <button
                className={styles.needButton}
                onClick={() => handleType("Main Dish")}
              >
                Main Dish
              </button>
              <button
                className={styles.needButton}
                onClick={() => handleType("Snacks")}
              >
                Snacks
              </button>
              <button
                className={styles.needButton}
                onClick={() => handleType("Drinks")}
              >
                Drinks
              </button>
              <button
                className={styles.needButton}
                onClick={() => handleType("Desserts")}
              >
                Desserts
              </button>
            </div>
            <hr className={styles.underline} />
          </div>
        </div>
        <div className={styles.containerBottom}>
          <h2 className={styles.need}>
            Choose Your Type - (Veg, Non-veg, Vegan, Sea Food)
          </h2>
          <div className={styles.filter}>
            <select
              className={styles.select}
              onChange={(e) => handleCategory(e.target.value)}
            >
              <option value="All" defaultChecked>
                All
              </option>
              <option value="vegetarian">Veg</option>
              <option value="non-vegetarian">Non Veg</option>
              <option value="vegan">Vegan</option>
              <option value="Sea-Food">Sea Food</option>
            </select>
          </div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.items}>
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
