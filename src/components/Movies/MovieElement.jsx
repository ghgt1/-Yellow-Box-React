import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MovieElement.module.scss";
import noImgEl from "./../../assets/image-not-found.png";

const MovieElement = ({ movieInfo }) => {
  const year = (movieInfo.first_air_date || movieInfo.release_date)?.slice(
    0,
    4
  );
  let posterSrc = `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`;
  if (!movieInfo.poster_path) {
    posterSrc = noImgEl;
  }
  const curLocation = useLocation();
  const useQuery = () => {
    return new URLSearchParams(curLocation.search);
  };
  let query = useQuery();
  let typeTerm = query.get("t");
  if (typeTerm === "multi") typeTerm = movieInfo.media_type;
  return (
    <Link to={`details/${typeTerm}/${movieInfo.id}`} className={styles.movie}>
      <img src={posterSrc} alt="poster" />
      <div className={styles.description}>
        <h2>{movieInfo.title || movieInfo.name}</h2>
        <h2>{year || "????"}</h2>
      </div>
    </Link>
  );
};

export default MovieElement;
