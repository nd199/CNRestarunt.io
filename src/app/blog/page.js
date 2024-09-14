import React from "react";
import styles from "./page.module.css"; // Import the CSS module
import Image from "next/image";

const BlogArticles = () => {
  const articles = [
    {
      id: 1,
      title: "How to prepare a delicious gluten free sushi",
      date: "January 3, 2023",
      imgSrc: "ChickenRoast.jpg",
    },
    {
      id: 2,
      title: "Exclusive baking lessons from the pastry king",
      date: "January 3, 2023",
      imgSrc: "jpg",
    },
    {
      id: 3,
      title: "How to prepare the perfect fries in an air fryer",
      date: "January 3, 2023",
      imgSrc: "/path-to-image3.jpg",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <div className={styles.articleCard} key={article.id}>
            <Image
              src={`/images/menu/${article.imgSrc}`}
              width={300}
              height={300}
              alt={article.title}
            />
            <div className={styles.articleInfo}>
              <p>{article.date}</p>
              <h3>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticles;
