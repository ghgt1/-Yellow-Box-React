import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
