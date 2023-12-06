import { CubesColor, getGameCodeLine, format_CubesForHand_String, get_Number_Color_ofCubes } from "./shared";

export const getSumOfLines = (input: string) => {
  let sum: number = 0;

  const inputLines = input.split('\n');
  inputLines.forEach( inputLine => {
    sum = sum + getGameValue(inputLine); 
  });

  return sum;
}

/**
 * Play a game, and if the game is valid, returns the idGame as number; else, returns 0
 * @param game 
 */
export const getGameValue = (game: string) => {
  let gameCodeLine: string = getGameCodeLine(game);
  let validGame: boolean = true;

  for( let hand of gameCodeLine.split(';') ) {
    if(!validGame) break;

    for( let cubesForHand of hand.split(',') ){
      cubesForHand = format_CubesForHand_String(cubesForHand);
      if( !isValidCubesNumber( cubesForHand ) ) {
        validGame = false;
        break;
      }
    }
  }

  return ( validGame ) ? getId(game) : 0;
}

const isValidCubesNumber = (cubesForHand: string) => {
  const enum CubesMaxNumber { RED = 12, GREEN = 13, BLUE = 14 }
  const { numberOfCubes, colorOfCubes } = get_Number_Color_ofCubes(cubesForHand);

  let isValidCubesNumber: boolean = true;

  switch( colorOfCubes ) {
    case CubesColor.BLUE:
      (numberOfCubes <= CubesMaxNumber.BLUE) ? isValidCubesNumber : isValidCubesNumber = false;
      break;
    case CubesColor.GREEN:
      (numberOfCubes <= CubesMaxNumber.GREEN) ? isValidCubesNumber : isValidCubesNumber = false;
      break;
    case CubesColor.RED:
      (numberOfCubes <= CubesMaxNumber.RED) ? isValidCubesNumber : isValidCubesNumber = false;
      break;
  }

  return isValidCubesNumber;
}

const getId = (game: string) => {
  let i = 0;
  while( i < game.length ) {
    if( game[i] === ':' ) break;
    i++;
  }
  
  return parseInt(game.slice(5, i));
}