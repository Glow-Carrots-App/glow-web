import React from "react";
import ReactLoading from "react-loading";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div role="loadingContainer" className={styles.loadingContainer}>
      <ReactLoading
        data-testid="loader"
        type="bubbles"
        height="100px"
        width="100px"
      />
    </div>
  );
};

export default Loading;
