export interface location {
  name: string;
  preview: string;
  description: string;
  actions: (
    inventory: inventory,
    handleSetInventory: (inventory: inventory, isTriforce?: boolean) => void,
    handleInscreaseThreat: () => void,
    LeaveButton: () => JSX.Element,
    handleTrapThreat: () => void,
    handleTrapLost: () => void,
    goToBoss: () => void,
  ) => JSX.Element;
}

export interface gridPosition {
  x: number;
  y: number;
}

export interface inventory {
  triforcePiecesCollected: string[];
  currentItem: string;
}
