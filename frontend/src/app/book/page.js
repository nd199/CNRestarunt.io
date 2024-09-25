import styles from "./page.module.css";
import BookTable from "@/components/bookTable/BookTable";

const Book = () => {
  return (
    <div className={styles.container}>
      <BookTable />
    </div>
  );
};

export default Book;
