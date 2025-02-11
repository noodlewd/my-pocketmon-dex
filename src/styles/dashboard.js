import styled from "styled-components";

export const DashBox = styled.div`
  border: 1px solid transparent;
`;

export const DashTitle = styled.h2`
  margin-top: 40px;
  padding-top: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: red;

  @media (max-width: 375px) {
    font-size: 18px; /* 더 작은 폰트 크기 */
    margin-top: 20px;
    padding-top: 20px;
  }
`;

export const MonsterBallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개로 설정 유지 */
  justify-content: space-between;
  margin: 40px 20px;

  @media (max-width: 375px) {
    grid-template-columns: repeat(3, 1fr); /* 3개로 설정 유지 */
    margin: 20px 10px; /* 여백을 더 줄이기 */
    gap: 5px; /* 항목 간격을 더 줄여서 화면을 절약 */
  }
`;

export const BallImg = styled.p`
  text-align: center;
  margin-bottom: 20px;
  margin-right: 10px;

  @media (max-width: 375px) {
    margin-right: 0; /* 작은 화면에서는 오른쪽 마진 제거 */
  }
`;

export const RemoveButton = styled.button`
  margin-bottom: 10px;
  padding: 6px 12px;
  border-radius: 5px;
  color: white;
  font-size: 12px; /* 더 작은 버튼 크기 */
  background-color: red;
  border-style: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;

  &:hover {
    font-size: 11px;
    transform: scale(0.95);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    background-color: darkred;
  }

  @media (max-width: 375px) {
    font-size: 10px; /* 버튼 글자 크기 줄이기 */
    padding: 5px 10px; /* 버튼 패딩 축소 */
  }
`;

export const TestImg = styled.img`
  width: 60px; /* 더 작은 크기로 변경 */
  height: 60px;
  border: 1px dashed gray;
  border-radius: 15px;
  box-shadow: 0 0 10px black;
  background-color: #fdfdfc;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 375px) {
    width: 50px; /* 화면 크기에 맞게 크기 줄이기 */
    height: 50px;
  }
`;
export const DashBorder = styled.div`
  background-color: #f6f6f5;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  border-radius: 15px;

  @media (max-width: 375px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
  }
`;

export const CardList = styled.div`
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 10px black;
  line-height: 40px;
  font-weight: bold;
  margin: 20px;

  @media (max-width: 375px) {
    margin: 10px; /* 작은 화면에서는 카드 마진 줄이기 */
  }
`;
