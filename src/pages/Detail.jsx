import React, { useState } from "react";
import MainContainer from "../components/UI/MainContainer";
import DetailMovies from "../components/Movies/DetailMovies";

const Detail = () => {
  // 여기서 하려는건, 백드롭 이미지를 컨테이너에 배경으로 넣으려함.
  // 따라서 state공유
  const [backdrop, setBackdrop] = useState("");
  const handleBackdrop = (link) => {
    setBackdrop(link);
  };

  return (
    <MainContainer backImg={backdrop}>
      <DetailMovies setBackground={handleBackdrop} />
    </MainContainer>
  );
};

export default Detail;
