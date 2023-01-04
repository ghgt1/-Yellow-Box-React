import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import boxIconEl from "../../assets/favicon2.png";
import githubEl from "../../assets/github.png";

const Header = () => {
  return (
    <header>
      <div className={styles["left-container"]}>
        <Link to="/">
          <img src={boxIconEl} alt="노랑박스로고" />
          <span>YELLOW&nbsp;</span>
          <span> BOX</span>
        </Link>
        <h1>yellowbox.com</h1>
      </div>
      <div className={styles["right-container"]}>
        <a href="https://github.com/ghgt1">
          <img src={githubEl} alt="깃허브 로고" />
        </a>
      </div>
    </header>
  );
};

export default Header;
