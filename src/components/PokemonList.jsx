import React, { useContext } from "react";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import { UlStyle, LiCover } from "../styles/list";
import { PoketmonContext } from "../context/PoketmonProvider";

const PokemonList = () => {
  // 전역상태 데이터 가져오기(추가 로직)
  const { addPokemon } = useContext(PoketmonContext);

  return (
    <UlStyle>
      <LiCover>
        {/* import 해온 데이터를 map을 이용해 순회하여 출력 */}
        {MOCK_DATA.map((card) => (
          <PokemonCard key={card.id} card={card} addPokemon={addPokemon} />
        ))}
      </LiCover>
    </UlStyle>
  );
};

export default PokemonList;
