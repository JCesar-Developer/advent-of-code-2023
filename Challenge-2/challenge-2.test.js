import { describe, it, expect } from "vitest";
import { getSumOfLines, getGameValue } from './solution-1'
import { _getSumOfLines, getPowerOfGame } from './solution-2';
import { input2 as finalInput } from './input-2';

const input1 = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
const input2 = 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue';
const input3 = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
const input4 = 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red';
const input5 = 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green';
const firstInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

//Challenge 2 | part 1
describe("Challenge 2 | part 2", () => {
  it("The function getGameValue should return a number", () => {
    expect(typeof getGameValue(input1)).toBe('number');
  })

  it("The function getGameValue should return the ID of the game as a number if the input is valid", () => {
    expect(getGameValue(input1)).toBe(1);
    expect(getGameValue(input2)).toBe(2);
    expect(getGameValue(input5)).toBe(5);
  })

  it("The function getGameValue should return 0 if the input is invalid", () => {
    expect(getGameValue(input3)).toBe(0);
    expect(getGameValue(input4)).toBe(0);
  })

  it("The function getSumOfLines should return a number", () => {
    expect(typeof getSumOfLines(firstInput)).toBe('number');
  })

  it("The function getSumOfLines should return the sum of the IDs of the games if the input is valid", () => {
    expect(getSumOfLines(firstInput)).toBe(8);
  })

  it("The final result of the first challenge should be 2879", () => {
    expect(getSumOfLines(finalInput)).toBe(2879);
  })
})

//Challenge 2 | part 2
describe("Challenge 2 | part 2 | solution 2", () => {
  it("The function getPowerOfGame should return a number", () => {
    expect(typeof getPowerOfGame(input1)).toBe('number');
  })

  it("The function getPowerOfGame should return the power of a game as the product of the maximum number of cubes for color", () => {
    expect(getPowerOfGame(input1)).toBe(48);
    expect(getPowerOfGame(input2)).toBe(12);
    expect(getPowerOfGame(input3)).toBe(1560);
    expect(getPowerOfGame(input4)).toBe(630);
    expect(getPowerOfGame(input5)).toBe(36);
  })

  it("The function _getSumOfLines should return a number", () => {
    expect(typeof _getSumOfLines(firstInput)).toBe('number');
  })

  it("The function _getSumOfLines should return the sum of the powers of all the games", () => {
    expect(_getSumOfLines(firstInput)).toBe(2286);
  })

  it("The final result of the second challenge should be 2879", () => {
    expect(_getSumOfLines(finalInput)).toBe(65122);
  })
})