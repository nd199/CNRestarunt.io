import styles from "./ContainerBottom.module.css";

const ContainerBottom = ({ handleCategory }) => {
  return (
    <div className={styles.containerBottom}>
      <h2 className={styles.need}>Choose Your Type</h2>
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
  );
};

export default ContainerBottom;
