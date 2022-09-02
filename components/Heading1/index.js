import styles from "./styles.module.css";

const Heading1 = ({ children, isLanding = false }) => {
  return (
    <h1 className={isLanding ? styles.heading1Landing : styles.heading1}>
      {children}
    </h1>
  );
};

export default Heading1;
