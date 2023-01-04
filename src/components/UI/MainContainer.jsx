import React from "react";
import styles from "./MainContainer.module.scss";

const MainContainer = (props) => {
  return <section className={styles.container}>{props.children}</section>;
};

export default MainContainer;
