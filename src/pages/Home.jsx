import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, LogoImg, StartButton } from "../styles/main";

const Home = () => {
  return (
    <HomeContainer>
      <LogoImg />
      <StartButton>
        <Link to="/dex">포켓몬 도감 시작하기</Link> {/* dex페이지로 이동 */}
      </StartButton>
    </HomeContainer>
  );
};

export default Home;
