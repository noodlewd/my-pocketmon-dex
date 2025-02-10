import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";
import Swal from "sweetalert2";
import {
  BackButton,
  DetailAdd,
  DetailContainer,
  DetailExplain,
  DetailImg,
  DetailName,
  DetailType,
} from "../styles/detail";
import { PoketmonContext } from "../context/PoketmonProvider";

export const PokemonDetail = () => {
  const { addPokemon, myPokeBall, removePokemon } = useContext(PoketmonContext);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const pokemonId = queryParams.get("id");
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(pokemonId));

  const existPokemon = myPokeBall.some((pocket) => pocket.id === pokemon.id);

  const handleAutoButton = () => {
    if (existPokemon) {
      removePokemon(pokemon.id);
      Swal.fire(`목록에서 삭제되었습니다`);
    } else {
      addPokemon(pokemon);
      Swal.fire(`목록에 추가되었습니다`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailContainer>
      <DetailImg src={pokemon.img_url} alt="포켓몬" />
      <DetailName>{pokemon.korean_name}</DetailName>
      <DetailType>타입 : {pokemon.types}</DetailType>
      <DetailExplain>{pokemon.description}</DetailExplain>
      <DetailAdd isAddOrRemove={existPokemon} onClick={handleAutoButton}>
        {existPokemon ? "삭제하기" : "추가하기"}
      </DetailAdd>
      <BackButton onClick={handleBack}>뒤로가기</BackButton>
    </DetailContainer>
  );
};
export default PokemonDetail;
