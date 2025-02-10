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
  // 전역상태 데이터 가져오기(보유 포켓몬 리스트, 삭제 로직)
  const { myPokeBall, removePokemon } = useContext(PoketmonContext);

  // 빈 슬롯 갯수
  const emptySlot = 6 - myPokeBall.length;
  // 보유한 포켓몬 리스트 + 빈 슬롯에 null값을 채움(6개가 유지되도록)
  const usuallySlot = [...myPokeBall, ...new Array(emptySlot).fill(null)];

  return (
    <DashBox>
      <DashBorder>
        <DashTitle>나만의 포켓몬</DashTitle>
        <MonsterBallContainer>
          {usuallySlot.map((card, index) => (
            <BallImg key={index}>
              {/* 삼항연산자를 이용하여 포켓몬이 있으면 CardList, 없으면 TestImg를 표시 */}
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
