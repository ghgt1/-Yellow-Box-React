import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import boxIconEl from "../../assets/favicon2.png";
import githubEl from "../../assets/github.png";

const Header = () => {
  // 와 유즈이펙트 이렇게 쓰는건가... 언마운트될때 상정하고 클린업만 사용
  const useHomeHandler = () => {
    useEffect(() => {
      return () => {
        window.location.reload();
      };
    }, []);
  };

  return (
    <header>
      <div className={styles["left-container"]}>
        <Link to="/" onClick={useHomeHandler}>
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
