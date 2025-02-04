import React from "react";
import "../styles/list.css";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <ul className="ul-style">
      {/* li를 반복시켜서 리스트를 만들 예정 */}
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
      <li className="li-style">
        <p>이상해씨</p>
        <p>id값</p>
        <button>추가</button>
      </li>
    </ul>
  );
};

export default PokemonList;
