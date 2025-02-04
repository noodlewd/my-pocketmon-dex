import React from "react";
import "../styles/list.css";
import MOCK_DATA from "../assets/pokemon/MOCK_DATA";

const PokemonList = ({addPokemon}) => {
  return (
    <ul className="ul-style">
      {/* li를 반복시켜서 리스트를 만들 예정 */}
      {MOCK_DATA.map((card) => (
        <li key={card.id} className="li-style">
          <img src={card.img_url} alt={card.korean_name} />
          <p>{card.korean_name}</p>
          <p>No. {card.id}</p>
          <button className="plus-btn" onClick={()=> addPokemon(card)}>추가</button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
