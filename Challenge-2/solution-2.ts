import { CubesColor, getGameCodeLine, format_CubesForHand_String, get_Number_Color_ofCubes } from "./shared";

export const _getSumOfLines = (input: string): number => {
  let sum: number = 0;

  const inputLines = input.split('\n');
  inputLines.forEach( inputLine => {
    sum = sum + getPowerOfGame(inputLine); 
  });

  return sum;
} 

export const getPowerOfGame = (game: string): number => {
  let gameCodeLine: string = getGameCodeLine(game);
  let minSetOfCubes: Map<CubesColor, number> = new Map([
    [CubesColor.BLUE, 0],
    [CubesColor.GREEN, 0],
    [CubesColor.RED, 0],
  ]);

  for( let hand of gameCodeLine.split(';') ) {
    for( let cubesForHand of hand.split(',') ) {
      cubesForHand = format_CubesForHand_String(cubesForHand);
      setMinSetOfCubes(minSetOfCubes, cubesForHand);
    }
  }

  return getProductOfMapValues(minSetOfCubes);
}

const setMinSetOfCubes = (minSetOfCubes: Map<CubesColor, number>, cubesForHand: string): void => {
  const { numberOfCubes, colorOfCubes } = get_Number_Color_ofCubes(cubesForHand);
  const currentNumberOfCubes = minSetOfCubes.get(colorOfCubes) || 0;

  if (numberOfCubes > currentNumberOfCubes) {
    minSetOfCubes.set(colorOfCubes, numberOfCubes);
  }
};

const getProductOfMapValues = (minSetOfCubes: Map<CubesColor, number>): number => {
  let product: number = 1;

  minSetOfCubes.forEach((value) => product = product * value );

  return product;
}