import styles from "./styles.module.css";

const EatColorFilter = ({ selectedColor, setSelectedColor }) => {
  const icons = [
    "/colorIcons/Red.png",
    "/colorIcons/Yellow.png",
    "/colorIcons/Orange.png",
    "/colorIcons/Green.png",
    "/colorIcons/Purple.png",
    "/colorIcons/White.png",
  ];

  const handleSelectedColor = (color) => {
    color === selectedColor ? setSelectedColor(null) : setSelectedColor(color);
  };

  return (
    <div className={styles.container}>
      <p className={styles.subheading}>Filter by Color:</p>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <div
            role={`filter-button-${index}`}
            key={index + icon}
            className={
              selectedColor === icon.slice(12, -4)
                ? styles.iconHighlight
                : styles.iconContainer
            }
          >
            <img
              onClick={() => handleSelectedColor(icon.slice(12, -4))}
              className={styles.icon}
              src={icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EatColorFilter;
