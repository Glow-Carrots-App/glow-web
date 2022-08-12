import styles from "./styles.module.css";

const AvatarListItem = ({ children }) => {
  return (
    <div className={styles.container}>
      <p>{children}</p>
    </div>
  );
};

export default AvatarListItem;
