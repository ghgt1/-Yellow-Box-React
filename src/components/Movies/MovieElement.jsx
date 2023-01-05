import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieElement.module.scss";
import noImgEl from "./../../assets/image-not-found.png";

const MovieElement = ({ movieInfo }) => {
  console.log(movieInfo);
  const year = (movieInfo.first_air_date || movieInfo.release_date)?.slice(
    0,
    4
  );
  let posterSrc = `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`;
  if (!movieInfo.poster_path) {
    posterSrc = noImgEl;
  }
  return (
    <Link className={styles.movie}>
      <img src={posterSrc} alt="poster" />
      <div className={styles.description}>
        <h2>{movieInfo.title || movieInfo.name}</h2>
        <h2>{year || "????"}</h2>
      </div>
    </Link>
  );
};

export default MovieElement;
