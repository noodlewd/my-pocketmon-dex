import styled from "styled-components";

export const DashBox = styled.div`
  border: 1px solid transparent;
`;

export const DashTitle = styled.h2`
  margin-top: 80px;
  padding-top: 70px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const MonsterBallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  margin: 80px 120px 0px 120px;
`;

export const BallImg = styled.p`
  text-align: center;
  margin-bottom: 30px;
  margin-right: 20px;
`;

export const RemoveButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  background-color: red;
  border-style: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
  box-sizing: border-box;

  &:hover {
    font-size: 13px;
    transform: scale(0.97);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    background-color: darkred;
  }
`;

export const TestImg = styled.img`
  width: 150px;
  height: 150px;
  border: 1px dashed gray;
  border-radius: 15px;
  box-shadow: 0 0 10px black;
  background-color: #fdfdfc;
  padding: 15px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const DashBorder = styled.div`
  background-color: #f6f6f5;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 70px;
  border-radius: 15px;
`;

export const CardList = styled.div`
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 10px black;
  line-height: 50px;
  font-weight: bold;
  margin: 30px;
`;
