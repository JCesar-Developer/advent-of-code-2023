import * as adventJS from './challenges-files';

//CHALLENGE 1
console.log('CHALLENGE 1\n----------');
const challenge1_solution1 = adventJS.getSumCalibrationValues(adventJS.input1)
const challenge1_test1 = ( challenge1_solution1 === 55123 )
console.log('First part: ', {challenge1_test1, challenge1_solution1})

const challenge1_solution2 = adventJS._getSumCalibrationValues(adventJS.input1)
const challenge1_test2 = ( challenge1_solution2 === 55260 )
console.log('Second part: ', {challenge1_test2, challenge1_solution2})

console.log('\n');

//CHALLENGE 2
console.log('CHALLENGE 2\n----------');
const challenge2_solution1 = adventJS.getSumOfLines(adventJS.input2)
const challenge2_test1 = ( challenge2_solution1 === 2879 )
console.log('First part: ', {challenge2_test1, challenge2_solution1})

const challenge2_solution2 = adventJS._getSumOfLines(adventJS.input2)
const challenge2_test2 = ( challenge2_solution2 === 65122 )
console.log('Second part: ', {challenge2_test2, challenge2_solution2})

console.log('\n');