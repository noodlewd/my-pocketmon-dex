import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdddac;
  width: 100%;
  height: 100vh;
  line-height: 50px;
`;

export const DetailImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const DetailName = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: red;
`;

export const DetailType = styled.p`
  font-weight: bold;
`;

export const DetailExplain = styled.p`
  font-weight: bold;
`;

export const BackButton = styled.button`
  background-color: black;
  color: white;
  width: 80px;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
  &:hover {
    transform: scale(0.9);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const DetailAdd = styled.button`
  background-color: ${(props) => (props.isAddOrRemove ? "red" : "green")};
  color: white;
  width: 80px;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
  &:hover {
    transform: scale(0.9);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
