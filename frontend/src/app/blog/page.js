"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { articles, months, years } from "@/utils/Utils";

const BlogArticles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleBlog = (id) => {
    router.push(`/blog/${id}`);
  };

  const filteredArticles = articles.filter((article) => {
    const articleDate = new Date(article.date);
    const articleMonth = articleDate.toLocaleString("default", {
      month: "long",
    });
    const articleYear = articleDate.getFullYear().toString();

    return (
      article.title.toLowerCase().includes(searchTerm) &&
      (!selectedMonth || articleMonth === selectedMonth) &&
      (!selectedYear || articleYear === selectedYear)
    );
  });

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <hr className={styles.divider} />
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <label className={styles.filterLabel} htmlFor="search">
            Search By Name:
          </label>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Articles"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.navRight}>
          <div className={styles.navRight1}>
            <label className={styles.filterLabel} htmlFor="month">
              Filter by Month:
            </label>
            <select
              id="month"
              className={styles.filterSelect}
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              <option value="">Select Month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.navRight2}>
            <label className={styles.filterLabel} htmlFor="year">
              Filter by Year:
            </label>
            <select
              id="year"
              className={styles.filterSelect}
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="">Select Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <div className={styles.articlesGrid}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div className={styles.articleCard} key={article.id}>
              <Image
                src={`/images/articleImage/${article.imgSrc}`}
                width={300}
                height={600}
                className={styles.articleImg}
                alt={article.title}
              />
              <div className={styles.articleInfo}>
                <p>{article.date}</p>
                <h3>{article.title}</h3>
                <p>{article.Desc}</p>
                <button
                  className={styles.readMore}
                  onClick={() => handleBlog(article.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
};

export default BlogArticles;
