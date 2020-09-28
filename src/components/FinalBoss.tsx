import React, { useEffect, useRef, useState } from "react";
import { bossExplodeSFX, enemyHitSFX, hurtSFX } from "../App";

interface IProps {
  handleGameOver: () => void;
  handleContinue: () => void;
}

export const FinalBoss: React.FC<IProps> = ({
  handleGameOver,
  handleContinue,
}) => {
  const [enemies, setEnemies] = useState(() => 50);

  const square1 = useRef<null | HTMLDivElement>(null);
  const square2 = useRef<null | HTMLDivElement>(null);
  const square3 = useRef<null | HTMLDivElement>(null);
  const square4 = useRef<null | HTMLDivElement>(null);
  const square5 = useRef<null | HTMLDivElement>(null);
  const square6 = useRef<null | HTMLDivElement>(null);
  const square7 = useRef<null | HTMLDivElement>(null);
  const square8 = useRef<null | HTMLDivElement>(null);
  const square9 = useRef<null | HTMLDivElement>(null);

  const [enemyLocation, setEnemyLocation] = useState(square5);

  const moveEnemy = () => {
    enemyLocation.current!.classList.toggle("enemy");
    let currentLocation = parseInt(enemyLocation.current!.id);
    let newLocation = currentLocation;
    while (newLocation === currentLocation)
      newLocation = Math.floor(Math.random() * 9) + 1;
    switch (newLocation) {
      case 1:
        square1.current?.classList.toggle("enemy");
        setEnemyLocation(square1);
        break;
      case 2:
        square2.current?.classList.toggle("enemy");
        setEnemyLocation(square2);
        break;
      case 3:
        square3.current?.classList.toggle("enemy");
        setEnemyLocation(square3);
        break;
      case 4:
        square4.current?.classList.toggle("enemy");
        setEnemyLocation(square4);
        break;
      case 5:
        square5.current?.classList.toggle("enemy");
        setEnemyLocation(square5);
        break;
      case 6:
        square6.current?.classList.toggle("enemy");
        setEnemyLocation(square6);
        break;
      case 7:
        square7.current?.classList.toggle("enemy");
        setEnemyLocation(square7);
        break;
      case 8:
        square8.current?.classList.toggle("enemy");
        setEnemyLocation(square8);
        break;
      case 9:
        square9.current?.classList.toggle("enemy");
        setEnemyLocation(square9);
        break;

      default:
        break;
    }
  };

  const handleHitEnemy = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.currentTarget.classList.contains("enemy")
      ? hitEnemy()
      : missedEnemy();
  };

  const missedEnemy = () => {
    hurtSFX.play();
    setEnemies((prev) => prev + 1);
  };

  const hitEnemy = () => {
    enemyHitSFX.play();
    setEnemies((prev) => prev - 1);
    moveEnemy();
  };

  const gameOver = () => {
    handleGameOver();
  };

  const countdown = () => {
    setTimer((prev) => prev - 1);
  };

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let combatInterval = setInterval(countdown, 1000);
    return () => clearInterval(combatInterval);
  }, []);

  useEffect(() => {
    if (timer < 0) {
      gameOver();
    }
  }, [timer]);

  const continueButton = () => {
    bossExplodeSFX.play();
    handleContinue();
  };

  return (
    <React.Fragment>
      <div className="top-bar">
        <span className="timer">Time Left: {timer}</span>
        <span className="enemies-remaining">Enemies: {enemies}</span>
      </div>
      <div className="grid">
        <div
          id="1"
          ref={square1}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="2"
          ref={square2}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="3"
          ref={square3}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="4"
          ref={square4}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="5"
          ref={square5}
          className="enemy square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="6"
          ref={square6}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="7"
          ref={square7}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="8"
          ref={square8}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
        <div
          id="9"
          ref={square9}
          className="square-illusion"
          onClick={handleHitEnemy}
        ></div>
      </div>
      <button
        className="continue pure-button"
        disabled={enemies > 0}
        onClick={continueButton}
      >
        Destroy Virus
      </button>
    </React.Fragment>
  );
};
