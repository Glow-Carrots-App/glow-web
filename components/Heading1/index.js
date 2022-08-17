import styles from "./styles.module.css";

const Heading1 = ({ children }) => {
  return <h1 className={styles.heading1}>{children}</h1>;
};

export default Heading1;
