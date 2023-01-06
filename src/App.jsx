import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/details/:movieType/:movieId" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
