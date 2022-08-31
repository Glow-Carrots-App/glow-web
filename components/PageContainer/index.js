import styles from "./styles.module.css";

const PageContainer = ({ children, isLanding = false }) => {
  return (
    <div className={isLanding ? styles.containerLanding : styles.container}>
      {children}
    </div>
  );
};

export default PageContainer;
