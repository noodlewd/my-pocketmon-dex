import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, LogoImg, StartButton } from "../styles/main";

const Home = () => {
  return (
    <HomeContainer>
      <LogoImg />
      <StartButton>
        <Link to="/dex">포켓몬 도감 시작하기</Link>
      </StartButton>
    </HomeContainer>
  );
};

export default Home;
