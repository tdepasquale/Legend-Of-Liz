import React from "react";

export const GameOverScreen = () => {
  return (
    <div className="centered-menu">
      <div className="game-over-text">Game Over</div>
      <div className="game-over-tip">
        Tip: Click / tap on the viruses to lower the threat count. When the
        threat count reaches zero, press the "Destroy Virus" button at the
        bottom of the screen to destroy the virus and escape combat.
      </div>
      <div className="game-over-tip">
        Tip: Not every item is useful in each playthrough.
      </div>
    </div>
  );
};
