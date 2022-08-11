import styles from "./styles.module.css";

const AvatarContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <p>{children}</p>
    </div>
  );
};

export default AvatarContainer;
