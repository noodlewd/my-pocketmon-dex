import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import { PokemonDetail } from "../components/PokemonDetail";
import PoketmonProvider from "../context/PoketmonProvider.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <PoketmonProvider>
        {" "}
        {/*Provider로 감싸줌(전역에 포켓몬 관련 데이터 관리 가능) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PokemonDetail />}></Route>
        </Routes>
      </PoketmonProvider>
    </BrowserRouter>
  );
};

export default Router;
