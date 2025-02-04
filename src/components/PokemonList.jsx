import React from "react";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import "../styles/list.css";

const PokemonList = ({ addPokemon }) => {
  return (
    <ul className="ul-style">
      {MOCK_DATA.map((card) => (
        <PokemonCard key={card.id} card={card} addPokemon={addPokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
