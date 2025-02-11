import styled from "styled-components";

export const UlStyle = styled.ul``;

export const LiStyle = styled.li`
  margin: 8px; /* 카드 간 여백 줄이기 */
  line-height: 30px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 8px black; /* 그림자 약간 줄이기 */
  line-height: 40px; /* 텍스트 줄 높이 줄이기 */
  font-weight: bold;
  padding: 8px; /* 카드 내부 여백 줄이기 */

  img {
    width: 70px; /* 이미지 크기 더 줄이기 */
    height: 70px; /* 이미지 높이도 줄이기 */
    cursor: pointer;
  }

  p {
    font-weight: bold;
    font-size: 10px; /* 폰트 크기 추가 축소 */
  }
`;

export const LiCover = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개씩 배치 */
  gap: 8px; /* 항목 간 간격 줄이기 */
  padding: 10px;
  justify-content: center;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: #f6f6f5;
  margin: 10px;

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서도 2개씩 배치 */
    padding: 5px; /* 여백 줄이기 */
    gap: 5px; /* 항목 간격 축소 */
    margin: 5px;
  }
`;

export const AddButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  background-color: red;
  border-style: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
  &:hover {
    font-size: 13px;
    transform: scale(0.97);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    background-color: darkred;
  }

  @media (max-width: 375px) {
    font-size: 12px; /* 버튼 크기 줄이기 */
    padding: 6px 12px; /* 버튼 패딩 줄이기 */
  }
`;

export const DexContainer = styled.div`
  background-color: #ffdfad;
  max-width: 100%; /* 화면 크기에 맞춰 최대 너비 제한 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  padding: 0 10px; /* 좌우 여백 줄이기 */

  @media (max-width: 375px) {
    padding: 5px; /* 작은 화면에서의 패딩 조정 */
  }
`;

export const MonsterBallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 한 줄에 두 개씩 배치 */
  gap: 10px;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  max-width: 100%; /* 화면 크기에 맞춰 최대 너비 제한 */

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서는 두 개씩 배치 */
    gap: 8px; /* 항목 간 간격 줄이기 */
  }
`;
