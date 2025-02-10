import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

// Context 생성
export const PoketmonContext = createContext(null);

// Provider 컴포넌트
const PoketmonProvider = ({ children }) => {
  const [myPokeBall, setMyPokeBall] = useState([]);

  // 대쉬보드 포켓몬 추가 로직
  const addPokemon = (pokemon) => {
    // 배열의 길이가 6보다 작을 때 즉, 6마리까지만 추가 가능
    if (myPokeBall.length < 6) {
      setMyPokeBall([...myPokeBall, pokemon]);
    } else {
      // alert 창 디자인
      Swal.fire(`포켓몬은 최대 6마리까지만 </br> 추가할 수 있습니다.`);
    }
  };

  // 대쉬보드 포켓몬 삭제 로직
  const removePokemon = (pokemonId) => {
    setMyPokeBall((prev) => {
      // 같은 id값으로 인한 중복 삭제 에러 및 방지
      let removeDash = false;
      // 삭제 할 포켓몬 제외 나머지 반환
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
    // 포켓몬 리스트, 추가로직, 삭제로직을 전역으로 관리
    <PoketmonContext.Provider value={{ myPokeBall, addPokemon, removePokemon }}>{children}</PoketmonContext.Provider>
  );
};

export default PoketmonProvider;
