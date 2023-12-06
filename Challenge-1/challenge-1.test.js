import { describe, it, expect } from "vitest";
import { getSumCalibrationValues, getLineCalibrationValue } from './solution-1';
import { _getSumCalibrationValues, _getLineCalibrationValue } from './solution-2';
import { input1 as input} from './input-1';

// Challenge 1 | part 1
describe('Challenge-1 | part-1', () => {

  it('Should return a number', () => {
    expect(typeof getLineCalibrationValue('1abc2')).toBe('number');
  })

  it('Should return the numbers on the extreme of the string given', () => {
    expect(getLineCalibrationValue('1abc2')).toBe(12);
    expect(getLineCalibrationValue('pqr3stu8vwx')).toBe(38);
    expect(getLineCalibrationValue('a1b2c3d4e5f')).toBe(15);
    expect(getLineCalibrationValue('treb7uchet')).toBe(77);
  })

  it('The sum of calibrations values should be right', () => {
    expect(getSumCalibrationValues(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`)).toBe(142);
  })

  it('The final solution of the part one should be 55123', () => {
    expect(getSumCalibrationValues(input)).toBe(55123);
  })

})

// Challenge 1 | part 2
describe('Challenge-1 | part-2', () => {

  it('Should return a number', () => {
    expect(typeof _getLineCalibrationValue('two1nine')).toBe('number');
  })

  it('Should return a number on the extreme of the string given even if the number is writted as a string', () => {
    expect(_getLineCalibrationValue('two1nine')).toBe(29);
    expect(_getLineCalibrationValue('eightwothree')).toBe(83);
    expect(_getLineCalibrationValue('abcone2threexyz')).toBe(13);
    expect(_getLineCalibrationValue('xtwone3four')).toBe(24);
    expect(_getLineCalibrationValue('4nineeightseven2')).toBe(42);
    expect(_getLineCalibrationValue('zoneight234')).toBe(14);
    expect(_getLineCalibrationValue('7pqrstsixteen')).toBe(76);
  })

  it('The sum of calibration values should be a number', () => {
    expect(typeof _getSumCalibrationValues(`two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`)).toBe('number');
  })

  it('The sum of calibrations values should be right', () => {
    expect(_getSumCalibrationValues(`two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`)).toBe(281);
  })

  it('The final solution of the part two should be 55260', () => {
    expect(_getSumCalibrationValues(input)).toBe(55260);
  })

})