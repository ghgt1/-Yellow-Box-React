import React from "react";
import topBtn from "../../assets/toTop.svg";
import styles from "./ToTop.module.scss";

// const topDest = document.querySelector(".logo");
// console.log(topDest);

const topBtnHandle = () => {
  const topDest = document.querySelector(".logo");
  console.log(topDest);
  topDest.scrollIntoView({ behavior: "smooth" });
};

const ToTop = () => {
  return (
    <img
      className={styles.topBtn}
      src={topBtn}
      alt="상단이동버튼"
      onClick={topBtnHandle}
    />
  );
};

export default ToTop;
