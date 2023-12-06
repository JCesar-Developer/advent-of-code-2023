export const getSumCalibrationValues = (calibrationCodes: string) => {
  let sum: number = 0;

  const codeLines = calibrationCodes.split('\n');
  codeLines.forEach( codeLine => {
    sum = sum + getLineCalibrationValue(codeLine); 
  });

  return sum;
}

export const getLineCalibrationValue = (codeLine: string): number => {
  const firstNumber = getFirstNumber(codeLine);
  const lastNumber  = getLastNumber(codeLine);

  const codeNumber  = parseInt(`${firstNumber}${lastNumber}`);
  return codeNumber;
}

const getFirstNumber = (codeLine: string): number|undefined => {
  for( let i = 0; i < codeLine.length; i++ ) {
    if (!isNaN( parseInt( codeLine[i] ))) {
      return parseInt( codeLine[i] );
    }
  }
}

const getLastNumber = (codeLine: string): number|undefined => {
  for( let i = codeLine.length; i >= 0; i-- ) {
    if (!isNaN( parseInt( codeLine[i] ))) {
      return parseInt( codeLine[i] );
    }
  }
}