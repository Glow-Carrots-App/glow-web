import styles from "./styles.module.css";

const AvatarListItem = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AvatarListItem;
