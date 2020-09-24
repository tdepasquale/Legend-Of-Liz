import React from "react";

interface IProps {
  startGame: () => void;
}

export const TitleScreen: React.FC<IProps> = ({ startGame }) => {
  return (
    <div className="title-screen">
      <span className="title-above">The Legend of</span>
      <span className="title-name">Liz</span>
      <span className="title-below">Breath of Covidius</span>
      <button className="pure-button" onClick={startGame}>
        Start
      </button>
    </div>
  );
};
