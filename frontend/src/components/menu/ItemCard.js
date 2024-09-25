import Image from "next/image";
import React from "react";
import styles from "./itemCard.module.css";

const ItemCard = ({ item }) => {
  const { imageName, name, price, category, desc } = item;

  const isVegetarian = category.includes("vegetarian");
  const isNonVeg = category.includes("non-vegetarian");
  const isVegan = category.includes("vegan");
  const isSeaFood = category.includes("Sea-Food");

  return (
    <div className={styles.container}>
      <div
        className={
          isVegan
            ? styles.categoryBoxVegan
            : isSeaFood
            ? styles.categoryBoxSeaFood
            : isNonVeg
            ? styles.categoryBoxNon
            : isVegetarian
            ? styles.categoryBoxVeg
            : ""
        }
      >
        <div
          className={
            isVegan
              ? styles.circleVegan
              : isSeaFood
              ? styles.circleSeaFood
              : isNonVeg
              ? styles.circleNon
              : isVegetarian
              ? styles.circleVeg
              : ""
          }
        ></div>
      </div>
      <div className={styles.image}>
        <div className={styles.itemImage}>
          <Image
            src={`/images/menu/${imageName}`}
            width={340}
            height={200}
            alt={name}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.itemPrice}>
          <p>{price}</p>
        </div>
        <div className={styles.itemName}>
          <p>{name}</p>
        </div>
        <div className={styles.itemDesc}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
