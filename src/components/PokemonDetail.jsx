import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";
import { BackButton, DetailContainer, DetailExplain, DetailImg, DetailName, DetailType } from "../styles/detail";

export const PokemonDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const pokemonId = queryParams.get("id");
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(pokemonId));

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailContainer>
      <DetailImg src={pokemon.img_url} alt="" />
      <DetailName>{pokemon.korean_name}</DetailName>
      <DetailType>타입 : {pokemon.types}</DetailType>
      <DetailExplain>{pokemon.description}</DetailExplain>
      <BackButton onClick={handleBack}>뒤로가기</BackButton>
    </DetailContainer>
  );
};
export default PokemonDetail;
