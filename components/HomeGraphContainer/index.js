import styles from "./styles.module.css";

const HomeGraphContainer = () => {
  return (
    <>
      <div className={styles.graphContainer} role="graphContainer">
        <p className={styles.graphText}>Data driven graphs!</p>
        <img className={styles.graphImage} src="/landing/glow-graph-home.png" />
      </div>
    </>
  );
};

export default HomeGraphContainer;
