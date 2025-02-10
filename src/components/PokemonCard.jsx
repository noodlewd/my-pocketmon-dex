import React from "react";
import "../styles/list.js";
import { useNavigate } from "react-router-dom";
import { AddButton, LiStyle } from "../styles/list.js";

const PokemonCard = ({ card, addPokemon }) => {
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate(`/detail?id=${card.id}`);
  };

  return (
    <LiStyle key={card.id}>
      <img src={card.img_url} alt={card.korean_name} onClick={handleImgClick} />
      <p>{card.korean_name}</p>
      <p>No. {card.id}</p>
      <AddButton onClick={() => addPokemon(card)}>추가</AddButton>
    </LiStyle>
  );
};

export default PokemonCard;
