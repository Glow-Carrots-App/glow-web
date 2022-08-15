import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const SmallLinkedButton = ({ children, href, onClick }) => {
  return (
    <Link href={href}>
      <a className={styles.smallButton} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

SmallLinkedButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default SmallLinkedButton;
