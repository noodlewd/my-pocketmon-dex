import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-box">
      <h2 className="dash-title">나만의 포켓몬</h2>
      <div className="monster-ball">
        <p className="ball-image">몬스터볼 사진</p>
        <p className="ball-image">몬스터볼 사진</p>
        <p className="ball-image">몬스터볼 사진</p>
        <p className="ball-image">몬스터볼 사진</p>
        <p className="ball-image">몬스터볼 사진</p>
        <p className="ball-image">몬스터볼 사진</p>
      </div>
    </div>
  );
};

export default Dashboard;
