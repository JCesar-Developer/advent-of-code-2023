export const _getSumCalibrationValues = (calibrationCodes: string) => {
  let sum: number = 0;

  const codeLines = calibrationCodes.split('\n');
  codeLines.forEach( codeLine => {
    sum = sum + _getLineCalibrationValue(codeLine); 
  });

  return sum;
}

export const _getLineCalibrationValue = (codeLine: string): number => {
  const firstNumber = getFirstNumber(codeLine);
  const lastNumber  = getLastNumber(codeLine);

  const codeNumber  = parseInt(`${firstNumber}${lastNumber}`);
  return codeNumber;
}

const numStrings: Map<number, string> = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
]);

const getFirstNumber = (codeLine: string): number|undefined => {
  let continueLoop: boolean = true;
  let i = 0;

  while( continueLoop && i <= codeLine.length ) {
    const stringIndex = i;

    //find by number 
    if (!isNaN( parseInt( codeLine[stringIndex] ))) {
      return parseInt( codeLine[stringIndex] );
    }

    //find by string as number    
    const subString = codeLine.slice(0, stringIndex + 1);
    
    if( i > 1 && find_NumString_In_SubString(subString) ) {
      const firstNumString = find_NumString_In_SubString(subString) as string;
      return getKeyByValue(numStrings, firstNumString);
    }

    i++;
  }
}

const getLastNumber = (codeLine: string) => {
  let continueLoop: boolean = true;
  let i = 1;

  while( continueLoop && i <= codeLine.length ) {
    const stringIndex = codeLine.length - i;
    
    //find by number 
    if (!isNaN( parseInt( codeLine[stringIndex] ))) {
      return parseInt( codeLine[stringIndex] );
    }
    
    //find by string as number
    const subString = codeLine.slice(stringIndex, codeLine.length);

    if( i > 2 && find_NumString_In_SubString(subString) ) {
      const lastNumString = find_NumString_In_SubString(subString) as string;
      return getKeyByValue(numStrings, lastNumString);
    }

    i++;
  }
}

const find_NumString_In_SubString = (subString: string): string|undefined => {
  for( let index = 1 ; index <= numStrings.size ; index++ ) {
    const numString = numStrings.get(index);

    if( !numString ) break;

    if (subString.includes(numString)) {
      return numString;
    }
  }
  return undefined;
}

const getKeyByValue = (map: Map<number, string>, value: string): number | undefined => {
  for (const [key, val] of map.entries()) {
    if (val === value) {
      return key;
    }
  }
  return undefined;
};