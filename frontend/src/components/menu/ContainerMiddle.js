import styles from "./ContainerMiddle.module.css";

const ContainerMiddle = ({ handleType }) => {
  return (
    <div className={styles.containerMiddle}>
      <div className={styles.categories}>
        <h2 className={styles.need}>Choose Your Need</h2>
        <div className={styles.filter}>
          <select
            className={styles.select}
            onChange={(e) => handleType(e.target.value)}
          >
            <option value="All" defaultChecked>
              All
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Main Dish">Main Dish</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks </option>
            <option value="Desserts">Desserts</option>
          </select>
        </div>
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
