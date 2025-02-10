import React, { useContext } from "react";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import { UlStyle, LiCover } from "../styles/list";
import { PoketmonContext } from "../context/PoketmonProvider";

const PokemonList = () => {
  const { addPokemon } = useContext(PoketmonContext);

  return (
    <UlStyle>
      <LiCover>
        {MOCK_DATA.map((card) => (
          <PokemonCard key={card.id} card={card} addPokemon={addPokemon} />
        ))}
      </LiCover>
    </UlStyle>
  );
};

export default PokemonList;
