import React, { useState } from "react";
import styles from "./Main.module.scss";
import MainContainer from "../components/UI/MainContainer";
import MovieForm from "../components/Movies/MovieForm";
import GetMovies from "../components/Movies/GetMovies";

const Main = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = (status) => {
    setIsSubmitted(status);
  };

  return (
    <main>
      <section>
        <div className={`${styles.main} logo`}>
          <span>YELLOW&nbsp;</span>
          <span>BOX</span>
        </div>
        <div className={styles.description}>
          <h2>Explore any movies, TV shows, series or episodes.</h2>
          <span>Powered by OMDB api.</span>
        </div>
        <MovieForm isSubmitted={submitHandler} />
      </section>
      <MainContainer>
        <GetMovies submitStatus={isSubmitted} submitHandle={submitHandler} />
      </MainContainer>
    </main>
  );
};

export default Main;
