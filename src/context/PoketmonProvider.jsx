import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

// Context 생성
export const PoketmonContext = createContext(null);

// Provider 컴포넌트
const PoketmonProvider = ({ children }) => {
  // 초기 데이터 불러오기
  const [myPokeBall, setMyPokeBall] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("myPokeBall"));
    return saveData || [];
  });

  // 대쉬보드 포켓몬 추가 로직
  const addPokemon = (pokemon) => {
    // 중복 포켓몬 방지
    const existPokeBall = myPokeBall.some((exist) => exist.id === pokemon.id);
    if (existPokeBall) {
      Swal.fire(`이미 가지고있는 포켓몬 입니다.`);
      return;
    }

    // 배열의 길이가 6보다 작을 때 즉, 6마리까지만 추가 가능
    if (myPokeBall.length < 6) {
      const updateData = [...myPokeBall, pokemon];
      setMyPokeBall(updateData);
      //로컬스토리지 저장
      localStorage.setItem("myPokeBall", JSON.stringify(updateData));
    } else {
      // alert 창 디자인
      Swal.fire(`포켓몬은 최대 6마리까지만 </br> 추가할 수 있습니다.`);
    }
  };

  // 대쉬보드 포켓몬 삭제 로직
  const removePokemon = (pokemonId) => {
    const updateData = myPokeBall.filter((pokemon) => pokemon.id !== pokemonId);
    setMyPokeBall(updateData);
    localStorage.setItem("myPokeBall", JSON.stringify(updateData));
  };

  return (
    // 포켓몬 리스트, 추가로직, 삭제로직을 전역으로 관리
    <PoketmonContext.Provider value={{ myPokeBall, addPokemon, removePokemon }}>{children}</PoketmonContext.Provider>
  );
};

export default PoketmonProvider;
