import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import monsterBallImg from "../assets/imgFile/poketball.png";
import Swal from "sweetalert2";
import "../styles/list.js";
import { DexContainer } from "../styles/list.js";

const Dex = () => {
  const [myPokeBall, setMyPokeBall] = useState([]);

  // 대쉬보드 포켓몬 추가 로직
  const addPokemon = (pokemon) => {
    if (myPokeBall.length < 6) {
      setMyPokeBall([...myPokeBall, pokemon]);
    } else {
      Swal.fire(`포켓몬은 최대 6마리까지만 추가할 수 있습니다.`);
    }
  };

  // 대쉬보드 포켓몬 삭제 로직
  const removePokemon = (pokemonId) => {
    setMyPokeBall((prev) => {
      let removeDash = false;
      return prev.filter((pokemon) => {
        if (pokemon.id === pokemonId && !removeDash) {
          removeDash = true;
          return false;
        }
        return true;
      });
    });
  };

  return (
    <DexContainer>
      <Dashboard myPokeBall={myPokeBall} removePokemon={removePokemon} monsterBallImg={monsterBallImg} />
      <PokemonList addPokemon={addPokemon} />
    </DexContainer>
  );
};

export default Dex;
