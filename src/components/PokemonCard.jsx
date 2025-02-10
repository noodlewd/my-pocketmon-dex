import React, { useContext } from "react";
import "../styles/list.js";
import { useNavigate } from "react-router-dom";
import { AddButton, LiStyle } from "../styles/list.js";
import { PoketmonContext } from "../context/PoketmonProvider.jsx";

const PokemonCard = ({ card }) => {
  // 페이지 이동 방식
  const navigate = useNavigate();
  const { addPokemon } = useContext(PoketmonContext);

  // 이미지 클릭 시 detail 페이지로 이동
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
