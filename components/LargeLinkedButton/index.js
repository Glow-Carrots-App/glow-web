import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const LargeLinkedButton = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.largeButton}>{children}</a>
    </Link>
  );
};

LargeLinkedButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default LargeLinkedButton;
