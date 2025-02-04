import React from "react";
import "../styles/dashboard.css";

const Dashboard = ({ myPokeBall, removePokemon }) => {
  return (
    <div className="dash-box">
      <h2 className="dash-title">나만의 포켓몬</h2>
      <div className="monster-ball">
        {myPokeBall.map((card) => (
          <p key={card.id} className="ball-image">
            <img src={card.img_url} alt={card.korean_name} />
            <p>{card.korean_name}</p>
            <p>No. {card.id}</p>
            <button className="remove-btn" onClick={() => removePokemon(card.id)}>
              삭제
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
