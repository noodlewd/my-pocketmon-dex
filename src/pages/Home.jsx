import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/dex">포켓몬 도감 시작하기</Link>
      <button>포켓몬 도감 시작하기</button>
    </div>
  );
};

export default Home;
