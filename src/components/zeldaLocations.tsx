import React from "react";
import { hurtSFX } from "../App";
import { location } from "../models";
import { gridHeight, gridWidth } from "./useMap";

const sword = "Sword",
  bomb = "Bomb",
  bowAndArrows = "Bow and Arrows",
  fireRod = "Fire Rod",
  lightningRod = "Lightning Rod",
  waterRod = "Water Rod",
  hookshot = "Hookshot",
  emptyBottle = "Empty Bottle";

const rupees = "A Ton of Rupees",
  ruby = "Ruby",
  invisibilityPotion = "Invisibility Potion",
  blueFrog = "Blue Frog",
  popcorn = "Popcorn",
  crosswordPuzzles = "Crossword Puzzles",
  ocarina = "Ocarina",
  fairy = "Fairy";

const zeldaLocations = (): location[] => {
  return [
    {
      name: "Hyrule Field",
      preview:
        "You come upon a grassy field that seems to stretch on for miles.",
      description:
        "As you explore the field you stumble over an empty bottle. The grass is quite tall and could hide many treasures underneath.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = emptyBottle;
        const itemNeed = sword;
        const itemGet2 = rupees;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Colored Caverns",
      preview: "The mouth of a cave presents itself.",
      description:
        "As you approach the cave you notice a small sword stuck in the stump of a tree. Inside the cave is a sprawling network of tunnels. You spot a crack in one of the walls and notice that it is lined with a reflective red rock.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = sword;
        const itemNeed = bomb;
        const itemGet2 = ruby;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Korok Forest",
      preview:
        "You can hear spontaneous bursts of noise coming from what at first seemed to be a serene forest.",
      description:
        "As you walk amongst the trees you stumble upon a hidden stash of bombs. You hear footsteps but see no one. You notice an apple that appears to be floating next to a tree. Target practice?",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = bomb;
        const itemNeed = bowAndArrows;
        const itemGet2 = invisibilityPotion;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Mount Hylia",
      preview: "The snowy mountains stretch on for as far as you can see.",
      description:
        "Nestled in a small alcove you find an old bow and some arrows. A large block of ice sits atop the highest peak. Inside of it you can see a small blue critter.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = bowAndArrows;
        const itemNeed = fireRod;
        const itemGet2 = blueFrog;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Circus District",
      preview:
        "Before you lies a bustling town full of performers, animals, and stage props.",
      description:
        "The head of the circus attempts to recruit you by offering a hookshot that once belonged to an acrobat. When you refuse to join the circus he begs you to at least aid them in repairing their popcorn machine which requires a jolt of electricity.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = hookshot;
        const itemNeed = lightningRod;
        const itemGet2 = popcorn;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Mail District",
      preview:
        "In the distance you spot a small village which appears to be up in flames.",
      description:
        "Small creatures wearing tiny hats rush by you. They throw their packages to the wayside and hurry to quell the flames.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = fireRod;
        const itemNeed = waterRod;
        const itemGet2 = crosswordPuzzles;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Great Cliffs",
      preview:
        "High above sea level a series of bridges would allow you passage between the various cliff faces.",
      description:
        "As you walk through the clouds, lightning strikes erratically. You notice an errant lightning rod which seems to be the source of it all. A thick wooden bridge is raised on an opposing cliff face. Sounds of music emanate from the other side.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = lightningRod;
        const itemNeed = hookshot;
        const itemGet2 = ocarina;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Fairy Lake",
      preview: "Small glowing orbs float between the trees in the distance.",
      description:
        "A water rod sits nearby an artificially created lake. Faint fairies flicker as they float through the air. You sit down to admire the beauty of your surroundings.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = waterRod;
        const itemNeed = emptyBottle;
        const itemGet2 = fairy;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet2}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? handleSetInventory({
                      triforcePiecesCollected:
                        inventory.triforcePiecesCollected,
                      currentItem: itemGet2,
                    })
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
  ];
};

const zeldaKeyLocations = (): location[] => {
  return [
    {
      name: "South Mine",
      preview:
        "You can see several people digging with pickaxes in the distance.",
      description:
        "As you approach, you notice an empty bottle laying on the ground. One of the miners tells you that he dug up what he believes to be a valuable relic. He says that he'll sell it to you for a high price.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = emptyBottle;
        const itemNeed = rupees;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Jeff's Gems",
      preview: "A lone, ornamented shop sits between two hills.",
      description:
        "You notice a small sword propped up against the side of the shop. The owner laments a shortage of red gems, and promises to pay dearly for them.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = sword;
        const itemNeed = ruby;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Gerudo Prison",
      preview:
        "You pass through a small town. A large building with bars on the windows catches your attention.",
      description:
        "Once inside, you notice a storage room filled with bombs amongst other supplies. You speak with an old friend that promises they were imprisoned unjustly. They beg you to help them escape without a trace, and promise you a great reward.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = bomb;
        const itemNeed = invisibilityPotion;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Witch Hut",
      preview:
        "You come upon a round building with smoke bellowing from the chimney.",
      description:
        "A large cauldron full of red goop sits at the center of the room. The witch looks up from her grimoire, snarls, and demands an ingredient to turn her potion purple. She promises great rewards, and gives you a bow along with some arrows.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = bowAndArrows;
        const itemNeed = blueFrog;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Mage Academy",
      preview:
        "A large building with spiralling towers and exquisite architecture. You can see balls of fire being thrown about inside.",
      description:
        "As you enter, a small girl storms over towards you. She throws her fire rod on the ground, and demands a snack.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = fireRod;
        const itemNeed = popcorn;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Small Home",
      preview: "You spot a quaint home in the countryside.",
      description:
        "The elderly man thanks you for visiting, and offers you an old lightning rod that he no longer needs. He explains that he just wants to solve his puzzles but the mail hasn't come lately.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = lightningRod;
        const itemNeed = crosswordPuzzles;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Seaside Village",
      preview:
        "You look up to notice that you're surrounded by a bustling harborside town.",
      description:
        "A young couple greet you, and offer you a water rod as a welcoming gift. The two of them complain about how loud it is around here. They claim to have an item of great value they'd be willing to part with in exchange for some soothing music.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = waterRod;
        const itemNeed = ocarina;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
    {
      name: "Old Home",
      preview:
        "A tiny, rundown house in the corner of the large town piques your interest.",
      description:
        "An elderly woman welcomes you inside, and offers you a hookshot that belonged to her husband. She explains that she has outlived all of her siblings, but hasn't been feeling well. She offers you something of great value in exchange for the cure.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
      ) => {
        const itemGet1 = hookshot;
        const itemNeed = fairy;
        const usedWrongItem = () => {
          handleIncreaseThreat();
          hurtSFX.play();
        };
        const gotTriforce = () => {
          handleSetInventory(
            {
              triforcePiecesCollected: inventory.triforcePiecesCollected.concat(
                [itemNeed],
              ),
              currentItem: inventory.currentItem,
            },
            true,
          );
        };
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.currentItem === itemGet1}
              onClick={() =>
                handleSetInventory({
                  triforcePiecesCollected: inventory.triforcePiecesCollected,
                  currentItem: itemGet1,
                })
              }
            >
              Take {itemGet1}
            </button>

            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.includes(itemNeed)}
              onClick={() =>
                inventory.currentItem === itemNeed
                  ? gotTriforce()
                  : usedWrongItem()
              }
            >
              Use {inventory.currentItem}
            </button>
            <LeaveButton />
          </React.Fragment>
        );
      },
    },
  ];
};

const zeldaTrapLocations = (): location[] => {
  return [
    {
      name: "Shady Town",
      preview: "A small town full of shady characters.",
      description: "The townsfolk surround and ambush you.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapThreat()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Shady Woods",
      preview: "Unusual creatures stalk through the nearby woods.",
      description: "The creatures surround and ambush you.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapThreat()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Shady Mountain",
      preview: "Enormous footprints track through the snow.",
      description: "You are ambushed by an enormous yeti.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapThreat()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Shady Desert",
      preview: "Cloaked figures slink between caravans.",
      description: "The cloaked figures ambush you.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapThreat()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Dark Woods",
      preview: "A dark aura surrounds the nearby woods.",
      description: "The darkness consumes you and spits you out elsewhere.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
        handleTrapLost,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapLost()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Owl's Peak",
      preview: "Owls with blackened feathers and glowing eyes perch nearby.",
      description:
        "They were not what they seemed to be. A large portal opens up and sucks you in. You are now someplace else.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
        handleTrapLost,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapLost()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Dark Desert",
      preview:
        "Strangely colored clouds linger in the skies above the deserted landscape.",
      description: "The sky opens up and you are transported elsewhere.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
        handleTrapLost,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapLost()}>
            It's a TRAP
          </button>
        );
      },
    },
    {
      name: "Time Tower",
      preview:
        "Time seems to move at an inconsistent pace as you move towards a tower.",
      description:
        "The passage of time slowly stops sputtering as you approach the tower, but when you look up you are someplace else.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
        handleTrapLost,
      ) => {
        return (
          <button className="pure-button" onClick={() => handleTrapLost()}>
            It's a TRAP
          </button>
        );
      },
    },
  ];
};

const zeldaBossLocations = (): location[] => {
  return [
    {
      name: "Castle Covidius",
      preview: "The castle of the dark lord stands in the distance.",
      description:
        "The menacing stone castle is enormous. Its black spires reach to the clouds. Looking at it feels like staring into the void. You feel the loss of hope in the pit of your stomach.",
      actions: (
        inventory,
        handleSetInventory,
        handleIncreaseThreat,
        LeaveButton,
        handleTrapThreat,
        handleLostThreat,
        goToBoss,
      ) => {
        return (
          <React.Fragment>
            <button
              className="pure-button"
              disabled={inventory.triforcePiecesCollected.length < 3}
              onClick={() => goToBoss()}
            >
              Clash with Covidius
            </button>

            <LeaveButton />
          </React.Fragment>
        );
      },
    },
  ];
};

export const getZeldaMap = (): location[][] => {
  let trapRooms: location[] = [];
  const trapRoomsNeeded = 4;
  let possibleTrapRooms = zeldaTrapLocations();
  for (let index = 0; index < trapRoomsNeeded; index++) {
    let randomTrapNumber = Math.floor(Math.random() * possibleTrapRooms.length);
    let chosenTrap = possibleTrapRooms.splice(randomTrapNumber, 1);
    trapRooms.push(chosenTrap[0]);
  }

  let keyRooms: location[] = [];
  const keyRoomsNeeded = 3;
  let possibleKeyRooms = zeldaKeyLocations();
  for (let index = 0; index < keyRoomsNeeded; index++) {
    let randomKeyRoomNumber = Math.floor(
      Math.random() * possibleKeyRooms.length,
    );
    let chosenKeyRoom = possibleKeyRooms.splice(randomKeyRoomNumber, 1);
    keyRooms.push(chosenKeyRoom[0]);
  }

  let bossRoom: location[] = [];
  let possibleBossRoom = zeldaBossLocations();
  bossRoom.push(
    possibleBossRoom[Math.floor(Math.random() * zeldaBossLocations().length)],
  );

  let map: location[][] = [];
  let locations = zeldaLocations();
  locations = locations.concat(trapRooms, keyRooms, bossRoom);
  for (let index = 0; index < gridHeight; index++) {
    let rowOfRooms: location[] = [];

    for (let index = 0; index < gridWidth; index++) {
      let randomLocationNumber = Math.floor(Math.random() * locations.length);
      let chosenLocation = locations.splice(randomLocationNumber, 1);
      rowOfRooms.push(chosenLocation[0]);
    }

    map.push(rowOfRooms);
  }

  return map;
};
