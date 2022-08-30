import styles from "./styles.module.css";

const PageContainer = ({ children, isLanding = false }) => {
  return (
    <div
      className={styles.container}
      style={
        isLanding
          ? { backgroundImage: "linear-gradient(-45deg, white, #573d8d)" }
          : null
      }
    >
      {children}
    </div>
  );
};

export default PageContainer;
