import React, { useState } from "react";
import "./App.css";
import { FinalBoss } from "./components/FinalBoss";
import { GameOverScreen } from "./components/GameOverScreen";
import { IntroStory } from "./components/IntroStory";
import { StartCombat } from "./components/StartCombat";
import { TitleScreen } from "./components/TitleScreen";
import { useMap } from "./components/useMap";
import { VictoryScreen } from "./components/VictoryScreen";
import { inventory } from "./models";

function App() {
  enum menu {
    overworld = 0,
    move = 1,
    title = 2,
    intro = 3,
    explore = 4,
    boss = 5,
    combat = 6,
    gameOver = 7,
    gameWin = 8,
  }
  const [currentMenu, setCurrentMenu] = useState(menu.title);
  const map = useMap();

  const initialInventory: inventory = {
    triforcePiecesCollected: [],
    currentItem: "none",
  };
  const [inventory, setInventory] = useState<inventory>(initialInventory);

  const handleSetInventory = (inventory: inventory) => {
    setInventory(inventory);
    setCurrentMenu(menu.explore);
  };

  const initialThreat = 0;
  const [threat, setThreat] = useState(initialThreat);

  const handleIncreaseThreat = (amount: number = 2) => {
    setThreat((prev) => prev + amount);
  };

  const initialMovePoints = 1;
  let [movePoints, setMovePoints] = useState(initialMovePoints);

  const handleRestartGame = () => {
    map.reset();
    setInventory(initialInventory);
    setThreat(initialThreat);
    setMovePoints(initialMovePoints);
    setCurrentMenu(menu.intro);
  };

  const north = "NORTH",
    south = "SOUTH",
    west = "WEST",
    east = "EAST";

  const handleMove = (direction: string) => {
    if (movePoints <= 0) return;
    setMovePoints((prev) => prev - 1);
    handleIncreaseThreat();
    switch (direction) {
      case north:
        map.moveNorth();
        break;
      case south:
        map.moveSouth();
        break;
      case west:
        map.moveWest();
        break;
      case east:
        map.moveEast();
        break;

      default:
        break;
    }
    setCurrentMenu(menu.overworld);
  };

  const Move = () => {
    return (
      <div className="centered-menu">
        <button className="pure-button" onClick={() => handleMove(north)}>
          North
        </button>
        <button className="pure-button" onClick={() => handleMove(south)}>
          South
        </button>
        <button className="pure-button" onClick={() => handleMove(west)}>
          West
        </button>
        <button className="pure-button" onClick={() => handleMove(east)}>
          East
        </button>
        <button
          className="pure-button"
          onClick={() => setCurrentMenu(menu.overworld)}
        >
          Cancel
        </button>
      </div>
    );
  };

  const handleExplore = () => {
    setMovePoints(2);
    const maxEnemies = 15;
    let randomNumber = Math.floor(Math.random() * maxEnemies) + 1;
    if (randomNumber < threat) setCurrentMenu(menu.combat);
    else {
      handleIncreaseThreat();
      setCurrentMenu(menu.explore);
    }
  };

  const Overworld = () => {
    return (
      <React.Fragment>
        <div className="top-bar">
          <span className="triforce">
            Triforce: {inventory.triforcePiecesCollected.length}/3
          </span>
          <span className="threat">Threat: {threat}</span>
          <span className="item">Item: {inventory.currentItem}</span>
        </div>
        <div className="menu">
          <span className="story-text">{map.getPreviewText()}</span>
          <div>
            <button
              className="pure-button"
              onClick={() => setCurrentMenu(menu.move)}
              disabled={movePoints <= 0}
            >
              Move: {movePoints}
            </button>
            <button className="pure-button" onClick={handleExplore}>
              Explore
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const LeaveButton = () => {
    return (
      <button
        className="pure-button"
        onClick={() => setCurrentMenu(menu.overworld)}
      >
        Leave
      </button>
    );
  };

  const handleTrapThreat = () => {
    handleIncreaseThreat(4);
    setCurrentMenu(menu.overworld);
  };

  const handleTrapLost = () => {
    map.getLost();
    setCurrentMenu(menu.overworld);
  };

  const goToBoss = () => {
    setCurrentMenu(menu.boss);
  };

  const Explore = () => {
    return (
      <React.Fragment>
        <div className="top-bar">
          <span className="triforce">
            Triforce: {inventory.triforcePiecesCollected.length}/3
          </span>
          <span className="threat">Threat: {threat}</span>
          <span className="item">Item: {inventory.currentItem}</span>
        </div>
        <div className="menu">
          <span className="location-title">{map.getNameText()}</span>
          <span className="story-text">{map.getDescriptionText()}</span>
          <div>
            {map.getActions(
              inventory,
              handleSetInventory,
              handleIncreaseThreat,
              LeaveButton,
              handleTrapThreat,
              handleTrapLost,
              goToBoss,
            )}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const handleGameOver = () => {
    setCurrentMenu(menu.gameOver);
  };

  const handleGameWin = () => {
    setCurrentMenu(menu.gameWin);
  };

  const handleContinue = () => {
    setThreat(0);
    setCurrentMenu(menu.overworld);
  };

  switch (currentMenu) {
    case menu.overworld:
      return <Overworld />;
    case menu.move:
      return <Move />;
    case menu.title:
      return <TitleScreen startGame={() => setCurrentMenu(menu.intro)} />;
    case menu.intro:
      return <IntroStory proceed={() => setCurrentMenu(menu.overworld)} />;
    case menu.explore:
      return <Explore />;
    case menu.combat:
      return (
        <StartCombat
          newEnemies={threat}
          handleGameOver={handleGameOver}
          handleContinue={handleContinue}
        />
      );
    case menu.gameOver:
      return <GameOverScreen retry={handleRestartGame} />;
    case menu.gameWin:
      return <VictoryScreen />;
    case menu.boss:
      return (
        <FinalBoss
          handleGameOver={handleGameOver}
          handleContinue={handleGameWin}
        />
      );
    default:
      return <Overworld />;
  }
}

export default App;
