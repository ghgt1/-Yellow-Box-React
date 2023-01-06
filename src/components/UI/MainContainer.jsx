import React from "react";
import styles from "./MainContainer.module.scss";

const MainContainer = (props) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.back}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.3)), url("${props.backImg}")`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {props.children}
    </section>
  );
};

export default MainContainer;
