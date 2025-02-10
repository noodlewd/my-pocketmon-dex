import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fdddac;
  overflow: hidden;
`;

export const LogoImg = styled.img`
  width: 50%;
  height: 300px;
  background-color: transparent;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StartButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 50px;
  background-color: red;
  border-radius: 15px;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    transform: scale(0.97);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const Link = styled.a`
  width: 200px;
  height: 70px;
`;
