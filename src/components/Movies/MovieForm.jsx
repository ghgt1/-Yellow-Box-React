import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MovieForm.module.scss";

const MovieForm = ({ isSubmitted }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputYear, setInputYear] = useState("all");
  const [inputType, setInputType] = useState("multi");

  const yearOptions = ["전체 기간"];
  const curYear = new Date().getFullYear();
  for (let year = curYear; year >= 1985; year--) yearOptions.push(year);

  // useNavigate로 실시간으로 쿼리스트링으로 검색어를 넘김
  const navigate = useNavigate();
  const searchChangeHandler = (event) => {
    setInputTitle(event.target.value);
    navigate(`/?q=${event.target.value}&y=${inputYear}&t=${inputType}`);
  };
  const yearChangeHandler = (event) => {
    setInputYear(event.target.value);
    navigate(`/?q=${inputTitle}&y=${event.target.value}&t=${inputType}`);
  };
  const typeChangeHandler = (event) => {
    setInputType(event.target.value);
    navigate(`/?q=${inputTitle}&y=${inputYear}&t=${event.target.value}`);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    isSubmitted(true);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputTitle}
        type="text"
        name="title"
        placeholder="Search Worldwide movies, series, or episodes."
        onChange={searchChangeHandler}
      />
      <select name="year" onChange={yearChangeHandler}>
        {yearOptions.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <select name="type" onChange={typeChangeHandler}>
        <option value="multi">전체</option>
        <option value="movie">영화</option>
        <option value="tv">TV</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieForm;
