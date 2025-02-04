import React from "react";
import "../styles/list.css";

const PokemonCard = ({ card, addPokemon }) => {
  return (
    <li key={card.id} className="li-style">
      <img src={card.img_url} alt={card.korean_name} />
      <p>{card.korean_name}</p>
      <p>No. {card.id}</p>
      <button className="plus-btn" onClick={() => addPokemon(card)}>
        추가
      </button>
    </li>
  );
};

export default PokemonCard;
