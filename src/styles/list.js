import styled from "styled-components";

export const UlStyle = styled.ul``;
export const LiStyle = styled.li`
  margin: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 10px black;
  line-height: 50px;
  font-weight: bold;

  img {
    width: 130px;
    cursor: pointer;
  }

  p {
    font-weight: bold;
  }
`;

export const LiCover = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;
  list-style: none;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: #f6f6f5;
  margin: 30px;
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
`;

export const DexContainer = styled.div`
  background-color: #ffdfad;
`;
