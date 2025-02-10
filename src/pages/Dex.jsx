import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexContainer } from "../styles/list.js";

const Dex = () => {
  return (
    <DexContainer>
      {/* Dex페이지를 Dashboard와 PokemonList로 구성 */}
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;
