import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailMovies } from "../../api/requests";
import styles from "./DetailMovies.module.scss";
import starImg from "../../assets/star.webp";
import shortid from "shortid";
import LoadDetail from "../UI/LoadDetail";
import noImgEl from "../../assets/image-not-found.png";

const DetailMovies = ({ setBackground }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [loadStatus, setLoadStatus] = useState(false);

  // useparams로 일단 id를 받아오자
  const id = useParams().movieId;
  const type = useParams().movieType;

  // 사실 여기는 마운트될때만 검색해주면됨. 따라서 api호출 디펜던시없이
  const fetchDetailMovie = async () => {
    const results = await detailMovies(id, type);
    setTimeout(() => {
      setMovieInfo(results);
      console.log(results);
      setBackground(
        `https://image.tmdb.org/t/p/original${results.backdrop_path}`
      );
      setLoadStatus(false);
    }, 3000);
  };

  useEffect(() => {
    setLoadStatus(true);
    fetchDetailMovie();
  }, []);

  // 문제는 TV랑 다른 처리해야한다는 점...
  // 그냥 여기서 처리하고 변수로 넘겨주는게 깔끔할듯
  const voteRate = Number.parseFloat(movieInfo.vote_average).toFixed(2);
  const runtime = movieInfo.runtime || movieInfo.episode_run_time;
  const date = movieInfo.release_date || movieInfo.first_air_date;
  const title = movieInfo.title || movieInfo.name;

  let posterSrc = `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`;
  if (!movieInfo.poster_path) {
    posterSrc = noImgEl;
  }

  const detailContainer = (
    <div className={styles.details}>
      <img src={posterSrc} alt="poster" />
      <div className={styles.specs}>
        <h1>{title}</h1>
        <span>{`${date} · ${runtime}분 · ${
          movieInfo.production_countries &&
          movieInfo.production_countries[0].name
        }`}</span>
        <h2>{movieInfo.overview}</h2>
        <div>
          평점
          <p className={styles.rate}>
            <img src={starImg} alt="tmdbRate" />
            <span>{`${voteRate}/10 (${movieInfo.vote_count})`}</span>
          </p>
        </div>

        {console.log(movieInfo)}
        <div>
          제작사
          {movieInfo.production_companies &&
            movieInfo.production_companies.map((company) => (
              <p key={shortid.generate()}>{company.name}</p>
            ))}
        </div>
        <div>
          장르
          {movieInfo.genres &&
            movieInfo.genres.map((genre) => (
              <p key={shortid.generate()}>{genre.name}</p>
            ))}
        </div>
      </div>
    </div>
  );

  return loadStatus ? <LoadDetail /> : detailContainer;
};

export default DetailMovies;
