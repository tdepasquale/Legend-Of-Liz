import { useState } from "react";
import { gridPosition, inventory, location } from "../models";
import { getZeldaMap } from "./zeldaLocations";

export const gridWidth = 4;
export const gridHeight = 4;

export const randomGridLocation = (): gridPosition => {
  return {
    x: Math.floor(Math.random() * gridWidth),
    y: Math.floor(Math.random() * gridHeight),
  };
};

export const useMap = () => {
  let [grid, setGrid] = useState<location[][]>(() => getZeldaMap());

  const [currentLocation, setCurrentLocation] = useState<gridPosition>(
    randomGridLocation(),
  );

  const reset = () => {
    setGrid(() => getZeldaMap());
    setCurrentLocation(randomGridLocation());
  };

  const getLost = () => {
    let newLocation = randomGridLocation();
    setCurrentLocation(newLocation);
  };

  const moveNorth = () => {
    let newY = 0;
    if (currentLocation.y === 0) newY = grid.length - 1;
    else newY = currentLocation.y - 1;
    setCurrentLocation({ x: currentLocation.x, y: newY });
    getLocationInfo();
  };

  const moveSouth = () => {
    let newY = 0;
    if (currentLocation.y === grid.length - 1) newY = 0;
    else newY = currentLocation.y + 1;
    setCurrentLocation({ x: currentLocation.x, y: newY });
    getLocationInfo();
  };

  const moveWest = () => {
    let newX = 0;
    if (currentLocation.x === 0) newX = grid[0].length - 1;
    else newX = currentLocation.x - 1;
    setCurrentLocation({ x: newX, y: currentLocation.y });
    getLocationInfo();
  };

  const moveEast = () => {
    let newX = 0;
    if (currentLocation.x === grid[0].length - 1) newX = 0;
    else newX = currentLocation.x + 1;
    setCurrentLocation({ x: newX, y: currentLocation.y });
    getLocationInfo();
  };

  // for debugging / testing purposes
  const getLocationInfo = () => {
    console.log("map", grid, "current location", currentLocation);
  };

  const getNameText = () => {
    return grid[currentLocation.y][currentLocation.x].name;
  };

  const getPreviewText = () => {
    return grid[currentLocation.y][currentLocation.x].preview;
  };

  const getDescriptionText = () => {
    return grid[currentLocation.y][currentLocation.x].description;
  };

  const getActions = (
    inventory: inventory,
    handleSetInventory: (inventory: inventory) => void,
    handleInscreaseThreat: () => void,
    LeaveButton: () => JSX.Element,
    handleTrapThreat: () => void,
    handleTrapLost: () => void,
    goToBoss: () => void,
  ) => {
    return grid[currentLocation.y][currentLocation.x].actions(
      inventory,
      handleSetInventory,
      handleInscreaseThreat,
      LeaveButton,
      handleTrapThreat,
      handleTrapLost,
      goToBoss,
    );
  };

  return {
    getLocationInfo,
    moveNorth,
    moveSouth,
    moveWest,
    moveEast,
    getPreviewText,
    getNameText,
    getDescriptionText,
    getActions,
    getLost,
    reset,
  };
};
