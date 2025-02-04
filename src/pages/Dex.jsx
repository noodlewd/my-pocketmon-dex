import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [myPokeBall, setMyPokeBall] = useState([]);

  // 대쉬보드 포켓몬 추가 로직
  const addPokemon = (pokemon) => {
    if (myPokeBall.length < 6) {
      setMyPokeBall([...myPokeBall, pokemon]);
    } else {
      alert(`포켓몬은 최대 6마리까지만 추가할 수 있습니다.`);
    }
  };

  // 대쉬보드 포켓몬 삭제 로직
  const removePokemon = (pokemonId) => {
    const updateList = myPokeBall.filter((item) => item.id !== pokemonId);
    setMyPokeBall(updateList);
  };

  return (
    <div>
      <Dashboard myPokeBall={myPokeBall} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
