import Image from "next/image";
import React from "react";
import styles from "./itemCard.module.css";

const ItemCard = ({ item }) => {
  const { imageName, name, price, desc } = item;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.itemImage}>
          <Image
            src={`/${imageName}`}
            width={100}
            height={100}
            alt=""
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
