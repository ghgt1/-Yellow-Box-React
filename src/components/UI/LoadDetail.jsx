import React from "react";
import styles from "./LoadDetail.module.scss";

const Loader = () => {
  return (
    <li className={styles["skeleton-item"]}>
      <div>
        <div className={styles["skeleton-img"]} />
      </div>
      <div className={styles["skeleton-info"]}>
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
        <p className={styles["skeleton-title"]} />
      </div>
    </li>
  );
};

const LoadDetail = () => {
  return (
    <>
      <Loader />
    </>
  );
};

export default LoadDetail;
