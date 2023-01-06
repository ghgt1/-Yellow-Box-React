import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useDebounce } from "../../hooks/useDebounce";
import { searchMovies } from "../../api/requests";
import MovieElement from "./MovieElement";
import Loading from "../UI/Loading";
import styles from "./GetMovies.module.scss";
import shortid from "shortid";

const GetMovies = ({ submitStatus, submitHandle }) => {
  const [movies, setMovies] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);

  const page = useRef(1);
  const totalPages = useRef(0);
  const targetRef = useRef();

  const curLocation = useLocation();
  const useQuery = () => {
    return new URLSearchParams(curLocation.search);
  };

  let query = useQuery();

  // 제목은 디바운스로 처리
  const searchTerm = query.get("q");
  const yearTerm = query.get("y");
  const typeTerm = query.get("t");

  const fetchSearchMovies = async () => {
    // fetch전후로 로딩상태정의
    setLoadStatus(true);
    let searchedMovies = [];
    [searchedMovies, totalPages.current] = await searchMovies(
      searchTerm,
      yearTerm,
      typeTerm,
      page.current
    );
    // 이전 state다룰때 조심... 에효
    setTimeout(() => {
      setMovies((prevState) => {
        return [...prevState, ...searchedMovies];
      });
      setLoadStatus(false);
      page.current += 1;
    }, 2000);
  };

  // 최초호출. 즉 뒤로가기나 새로고침에 대응
  useEffect(() => {
    setMovies([]);
    page.current = 1;
    if (searchTerm) fetchSearchMovies();
  }, []);

  // submit시 호출
  useEffect(() => {
    console.log("ZZ");
    setMovies([]);
    page.current = 1;
    if (searchTerm && submitStatus) {
      console.log("zzz");
      fetchSearchMovies();
    }
    return () => {
      submitHandle(false);
    };
  }, [submitStatus]);

  // insetesection observer로 무한스크롤 구현
  // 최대페이지이상에서는 작동x, 검색페이지(메인)에서만 작동, 이전작업이 끝났을때만 작동(unobserve)
  // 생각해보니 io를 사용하면 throttle할 필요가 없음
  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        curLocation.pathname === "/" &&
        movies.length > 0 &&
        totalPages.current >= page.current
      ) {
        console.log("무한스크롤작동중");
        observer.unobserve(entry.target);
        fetchSearchMovies();
      }
    });
  };

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.5,
    });
    observer.observe(targetRef.current);
    return () => {
      observer && observer.disconnect();
    };
  }, [intersectionCallback]);

  // 로딩상태면 로딩되게
  let searchResults = [];
  let loadingResults = [];
  if (loadStatus) {
    for (let i = 0; i < 20; i++) {
      loadingResults.push(<Loading key={shortid.generate()} />);
    }
  }
  // 무비 컴포넌트들 작성
  if (movies) {
    searchResults = movies.map((movie) => {
      return <MovieElement key={shortid.generate()} movieInfo={movie} />;
    });
    console.log(searchResults);
  }

  return (
    <>
      {/* {<Loading />} */}
      <div className={styles["movie-container"]}>
        {searchResults.length !== 0
          ? searchResults
          : !loadStatus && (
              <span className={styles.inner}>검색결과가 없습니다.</span>
            )}
        {/* 아래는 스켈레톤 ui */}
        {loadStatus && loadingResults}
      </div>
      {/* io감시하는 영역 */}
      <div ref={targetRef} />
    </>
  );
};

export default GetMovies;
