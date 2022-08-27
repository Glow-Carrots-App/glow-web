import React from "react";
import ReactLoading from "react-loading";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <ReactLoading type="bubbles" height="100px" width="100px" />
    </div>
  );
};

export default Loading;
