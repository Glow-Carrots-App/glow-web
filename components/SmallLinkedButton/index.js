import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const SmallLinkedButton = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.smallButton}>{children}</a>
    </Link>
  );
};

SmallLinkedButton.propTypes = {
  href: PropTypes.string,
};

export default SmallLinkedButton;
