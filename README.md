# Legend Of Liz

A rogue-lite adventure game built with React, Typescript, HTML5, and CSS3. Published as a PWA.

## Story 

It is a dark time for the inhabitants of Earth. Emperor Covidius and his stealth army have seized control of the planet. People are holed up in their houses, afraid to venture out. In an attempt to stifle the rebellion once and for all, the fiendish Covidius has swept into New York and kidnapped Tom. This has gone too far. The reign of Emperor Covidius must come to an end....

You play as the heroic Liz, and attempt to save Tom from the clutches of the evil Emperor Covidius.

## How to Win

Players must figure out how to obtain the 3 pieces of the tri-force, locate the evil Emperor Covidius, and defeat him!

## Randomly Generated Map

A random set of 3 key locations is chosen for each run. Then the set of locations are randomly placed on the map. You start the game at a random location on the map. This creates variety between runs. 

## Overworld

On the overworld screen players can either choose to move or to explore their current location. Players are given 2 movement points before they are forced to explore. Players should read the location description carefully to avoid exploring trap locations. Players can move North, South, East or West on the map. Players should take note of how the map is laid out so they can avoid traps and easily navigate to where they want to go.

## Exploring Locations

Most locations have an item that you can take. Your inventory can only contain 1 item, which will be replaced when you pick up another one. Each location has a description of what is going on there, which contains a clue as to which item is required. Players must deduce where to use each item. Not every item is used in every run. Through clever deduction, players will locate the 3 pieces of the tri-force. After doing so they must locate the boss and fight it.

## Threat

Every action you take in the game causes your threat level to increase. As it increases so does your chance of having a surprise, timed encounter with a virus instead of taking the action that you intended! In order to survive the encounter you must tap / click on viruses until the threat counter is reduced to zero, and then click the "Destroy Virus" button. If you fail to do so before the timer runs out, you succumb to the evil Emperor Covidius and the game is over.

# Dependencies

## Howler

Howler is used to play sound effects.
Sound Effects were found here: http://noproblo.dayjo.org/ZeldaSounds/
The sound effects are stored in an AWS bucket to maintain https since the original site is not secure.
