import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import monsterBallImg from "../assets/poketball.jpg";

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
    setMyPokeBall((prev) => {
      const index = prev.findIndex((pokemon) => pokemon.id === pokemonId);
      if (index === -1) return prev; // 만약 포켓몬이 없다면 기존 배열 유지

      const updatedList = [...prev]; // 기존 배열 복사
      updatedList.splice(index, 1); // 첫 번째로 찾은 포켓몬만 삭제
      return updatedList; // 업데이트된 배열 반환
    });
  };

  return (
    <div>
      <Dashboard myPokeBall={myPokeBall} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
