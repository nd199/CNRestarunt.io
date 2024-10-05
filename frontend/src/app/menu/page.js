"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ItemCard from "@/components/menu/ItemCard";
import { items } from "@/utils/Utils";
import ContainerTop from "@/components/menu/ContainerTop";
import ContainerMiddle from "@/components/menu/ContainerMiddle";
import ContainerBottom from "@/components/menu/ContainerBottom";

const Dashboard = () => {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const handleCategory = (category) => setCategory(category);
  const handleType = (type) => setType(type);

  const filteredItems = items.filter((item) => {
    const matchCategory =
      category === "All" || item.category.includes(category);
    const matchType = type === "All" || item.type === type;
    return matchCategory && matchType;
  });

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <ContainerTop />
      </div>
      <div className={styles.content}>
        <div className={styles.filters}>
          <ContainerMiddle handleType={handleType} />
          <ContainerBottom handleCategory={handleCategory} />
        </div>
        <hr className={styles.underline} />
        <div className={styles.items}>
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
