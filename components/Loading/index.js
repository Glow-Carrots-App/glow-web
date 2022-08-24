import React from "react";
import ReactLoading from "react-loading";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <ReactLoading type="bubbles" height="200px" width="200px" />
    </div>
  );
};

export default Loading;
