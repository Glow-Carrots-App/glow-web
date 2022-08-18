import styles from "./styles.module.css";

const ColorFilter = () => {
  const icons = [
    "/colorIcons/red.png",
    "/colorIcons/yellow.png",
    "/colorIcons/orange.png",
    "/colorIcons/green.png",
    "/colorIcons/purple.png",
    "/colorIcons/white.png",
  ];
  return (
    <>
      <p className={styles.subheading}>Filter by Color: </p>
      <div className={styles.container}>
        {icons.map((icon, index) => (
          <img key={index + icon} className={styles.icon} src={icon} />
        ))}
      </div>
    </>
  );
};

export default ColorFilter;
