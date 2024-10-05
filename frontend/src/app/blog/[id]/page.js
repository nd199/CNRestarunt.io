"use client";
import React from "react";
import Image from "next/image"; // Importing the Image component
import { usePathname } from "next/navigation";
import { articles } from "@/utils/Utils";
import styles from "./blogFull.module.css"; // Importing the CSS module
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import Link from "next/link";

const BlogPost = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const blog = articles.find((article) => article.id === parseInt(id));

  if (!blog) {
    return <p className={styles.notFound}>Blog post not found</p>;
  }

  return (
    <div className={styles.page}>
      <Link href={'/blog'}>
        <button className={styles.back}>
          <KeyboardBackspaceOutlined /> Back
        </button>
      </Link>
      <div className={styles.blogContainer}>
        <div className={styles.blogContainerLeft}>
          <Image
            src={`/images/articleImage/${blog.imgSrc}`}
            alt={blog.title}
            width={600}
            height={400}
            className={styles.img}
          />
          <p className={styles.date}>{blog.date}</p>
        </div>
        <div className={styles.blogContainerRight}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <div className={styles.blogContent}>{blog.Desc}</div>
          <p>
            <ul className={styles.prepPoints}>
              {blog.preparation.map((point) => {
                return (
                  <li key={point} className={styles.prepPoint}>
                    {point}
                  </li>
                );
              })}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
