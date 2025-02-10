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

  // 현재 URL을 가져오며 쿼리 파라미터로 ID값을 얻을 수 있음
  const location = useLocation();
  const navigate = useNavigate();
  // URL 쿼리 파라미터를 쉽게 처리하도록 도와줌
  const queryParams = new URLSearchParams(location.search);
  const pokemonId = queryParams.get("id");
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(pokemonId));

  // 6개 몬스터볼 리스트에서 선택된 포켓몬이 포함되어있는지 확인
  const existPokemon = myPokeBall.some((pocket) => pocket.id === pokemon.id);

  const handleAutoButton = () => {
    // true 일 경우 삭제구현
    if (existPokemon === false) {
      if (myPokeBall.length < 6) {
        addPokemon(pokemon);
        Swal.fire(`목록에 추가되었습니다`);
      } else {
        Swal.fire(`포켓몬은 최대 6마리까지만 <br/> 추가할 수 있습니다.`);
      }
      // false 일 경우 추가구현
    } else {
      removePokemon(pokemon.id);
      Swal.fire(`목록에서 삭제되었습니다`);
    }
  };
  // 뒤로가기 버튼을 클릭 시 이전 dex 페이지로 이동
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailContainer>
      <DetailImg src={pokemon.img_url} alt="포켓몬" />
      <DetailName>{pokemon.korean_name}</DetailName>
      <DetailType>타입 : {pokemon.types}</DetailType>
      <DetailExplain>{pokemon.description}</DetailExplain>
      {/* 버튼 한 개로 두 개의 기능을 구현하기위해 스타일 컴포넌트가 props 받아서 사용가능하도록 구현 */}
      <DetailAdd isAddOrRemove={existPokemon} onClick={handleAutoButton}>
        {existPokemon ? "삭제하기" : "추가하기"}
      </DetailAdd>
      <BackButton onClick={handleBack}>뒤로가기</BackButton>
    </DetailContainer>
  );
};
export default PokemonDetail;
