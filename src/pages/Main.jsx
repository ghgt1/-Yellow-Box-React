import React from "react";
import styles from "./Main.module.scss";
import MainContainer from "../components/UI/MainContainer";
import MovieForm from "../components/Movies/MovieForm";
import GetMovies from "../components/Movies/GetMovies";

const Main = () => {
  return (
    <main>
      <section>
        <div className={styles.main}>
          <span>YELLOW&nbsp;</span>
          <span>BOX</span>
        </div>
        <div className={styles.description}>
          <h2>Explore any movies, TV shows, series or episodes.</h2>
          <span>Powered by OMDB api.</span>
        </div>
        <MovieForm />
      </section>
      <MainContainer>
        <GetMovies />
      </MainContainer>
    </main>
  );
};

export default Main;
