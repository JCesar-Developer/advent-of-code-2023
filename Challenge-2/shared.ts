export const enum CubesColor { RED = 'red', GREEN = 'green', BLUE = 'blue' }

export const getGameCodeLine = (game: string) => {
  let i = 0;
  while( i < game.length ) {
    if( game[i] === ':' ) break;
    i++;
  }

  return game.slice(i + 2);
}

export const format_CubesForHand_String = (cubesForHand: string): string => {
  return (cubesForHand[0] === ' ') 
    ? cubesForHand = cubesForHand.slice(1)
    : cubesForHand;
}

export const get_Number_Color_ofCubes = (cubesForHand: string): 
{numberOfCubes: number, colorOfCubes: CubesColor} => {
  const gameParams = cubesForHand.split(' ');
  const numberOfCubes: number = parseInt(gameParams[0]);
  const colorOfCubes: CubesColor = gameParams[1] as CubesColor;

  return { numberOfCubes, colorOfCubes };
}