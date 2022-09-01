import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const SmallLinkedButton = ({ children, href, isLanding = false }) => {
  return (
    <Link href={href}>
      <a className={isLanding ? styles.smallLandingButton : styles.smallButton}>
        {children}
      </a>
    </Link>
  );
};

SmallLinkedButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default SmallLinkedButton;
