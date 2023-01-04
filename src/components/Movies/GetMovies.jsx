import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { searchMovies } from "../../api/requests";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  // 제목은 디바운스로 처리
  const searchTerm = useDebounce(query.get("q"), 500);
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
  if (typeTerm === "movie") {
    searchResults = movies.map((movie) => {
      return <p key={movie.id}>{movie.title}</p>;
    });
  } else if (typeTerm === "tv") {
    searchResults = movies.map((movie) => {
      return <p key={movie.id}>{movie.name}</p>;
    });
  } else {
    searchResults = movies.map((movie) => {
      return <p key={movie.id}>{movie.name || movie.title}</p>;
    });
  }

  return <div>{searchResults}</div>;
};

export default GetMovies;
