import styles from "./ContainerMiddle.module.css";

const ContainerMiddle = ({ handleType }) => {
  return (
    <div className={styles.containerMiddle}>
      <div className={styles.categories}>
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
  );
};

export default ContainerMiddle;
