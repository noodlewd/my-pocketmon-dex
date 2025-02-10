import React, { useContext } from "react";
import {
  BallImg,
  CardList,
  DashBorder,
  DashBox,
  DashTitle,
  MonsterBallContainer,
  RemoveButton,
  TestImg,
} from "../styles/dashboard";
import monsterBallImg from "../assets/imgFile/poketball.png";
import { PoketmonContext } from "../context/PoketmonProvider";

const Dashboard = () => {
  const { myPokeBall, removePokemon } = useContext(PoketmonContext);

  const emptySlot = 6 - myPokeBall.length;
  const usuallySlot = [...myPokeBall, ...new Array(emptySlot).fill(null)];

  return (
    <DashBox>
      <DashBorder>
        <DashTitle>나만의 포켓몬</DashTitle>
        <MonsterBallContainer>
          {usuallySlot.map((card, index) => (
            <BallImg key={index}>
              {card ? (
                <CardList>
                  <img src={card.img_url} alt={card.korean_name} />
                  <p>{card.korean_name}</p>
                  <p>No. {card.id}</p>
                  <RemoveButton className="remove-btn" onClick={() => removePokemon(card.id)}>
                    삭제
                  </RemoveButton>
                </CardList>
              ) : (
                <TestImg src={monsterBallImg} alt="몬스터볼 사진" className="test" />
              )}
            </BallImg>
          ))}
        </MonsterBallContainer>
      </DashBorder>
    </DashBox>
  );
};

export default Dashboard;
