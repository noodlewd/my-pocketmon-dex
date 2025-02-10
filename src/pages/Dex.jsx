import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexContainer } from "../styles/list.js";

const Dex = () => {
  return (
    <DexContainer>
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;
