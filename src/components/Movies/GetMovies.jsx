import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { searchMovies } from "../../api/requests";
import MovieElement from "./MovieElement";
import styles from "./GetMovies.module.scss";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  // 제목은 디바운스로 처리
  const searchTerm = useDebounce(query.get("q"), 500);
  console.log(searchTerm);
  console.log(movies);
  const yearTerm = query.get("y");
  const typeTerm = query.get("t");

  const fetchSearchMovies = async (title, year, type) => {
    const searchedMovies = await searchMovies(title, year, type);
    setMovies(searchedMovies);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovies(searchTerm, yearTerm, typeTerm);
    }
    console.log(typeTerm);
    console.log(movies);
  }, [searchTerm, yearTerm, typeTerm]);

  let searchResults = [];
  if (movies) {
    searchResults = movies.map((movie) => {
      return <MovieElement key={movie.id} movieInfo={movie} />;
    });
  }

  return (
    <div className={styles["movie-container"]}>
      {searchResults.length !== 0 ? (
        searchResults
      ) : (
        <span className={styles.inner}>검색결과가 없습니다.</span>
      )}
    </div>
  );
};

export default GetMovies;
