import React, { useEffect, useState } from "react";
import "./App.css";
import { useMap } from "./components/useMap";
import { TitleScreen } from "./components/TitleScreen";
import { IntroStory } from "./components/IntroStory";
import { inventory } from "./models";
import { StartCombat } from "./components/StartCombat";
import { GameOverScreen } from "./components/GameOverScreen";
import { VictoryScreen } from "./components/VictoryScreen";
import { FinalBoss } from "./components/FinalBoss";

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

  const [inventory, setInventory] = useState<inventory>({
    triforcePiecesCollected: [],
    currentItem: "none",
  });

  const handleSetInventory = (inventory: inventory) => {
    setInventory(inventory);
    setCurrentMenu(menu.explore);
  };

  const [threat, setThreat] = useState(0);

  const handleIncreaseThreat = (amount: number = 2) => {
    setThreat((prev) => prev + amount);
  };

  useEffect(() => {
    map.getLocationInfo();
  }, [map]);

  useEffect(() => {
    console.log(inventory);
  }, [inventory]);

  let [movePoints, setMovePoints] = useState(1);

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
              goToBoss
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
      return <GameOverScreen />;
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
