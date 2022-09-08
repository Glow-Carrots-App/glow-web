import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container} role="container">
      <p className={styles.text}>
        Glow is a food tracker app inspired by the Rainbow Diet and science
        linking nutrition to the colors our food.
      </p>
      <p className={styles.text}>
        This app is intended for all ages. It is not indended to treat,
        diagnose, prevent, or cure diseases.
      </p>
      <p className={styles.text}>
        Icons are made by
        <a href="https://www.flaticon.com/authors/freepik"> Freepik</a> from
        <a href="https://www.flaticon.com/"> www.flaticon.com</a>.
      </p>
    </div>
  );
};

export default About;
