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
