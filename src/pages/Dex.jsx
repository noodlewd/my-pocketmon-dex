import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [myPokeBall, setMyPokeBall] = useState([]);

  const addPokemon = (pokemon) => {
    if (myPokeBall.length < 6) {
      setMyPokeBall([...myPokeBall, pokemon]);
    } else {
      alert(`포켓몬은 최대 6마리까지만 추가할 수 있습니다.`);
    }
  };

  return (
    <div>
      <Dashboard myPokeBall={myPokeBall} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
