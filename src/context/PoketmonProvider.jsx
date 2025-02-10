import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const PoketmonContext = createContext(null);

const PoketmonProvider = ({ children }) => {
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
    <PoketmonContext.Provider value={{ myPokeBall, addPokemon, removePokemon }}>{children}</PoketmonContext.Provider>
  );
};

export default PoketmonProvider;
