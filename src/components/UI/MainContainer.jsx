import React from "react";
import styles from "./MainContainer.module.scss";

const MainContainer = (props) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.back}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.8)), url("${props.backImg}")`,
        }}
      ></div>
      {props.children}
    </section>
  );
};

export default MainContainer;
