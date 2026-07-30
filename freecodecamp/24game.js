function getAllPermutations(arr, k) {
  const results = [];

  function permute(tempArr, remainingArr) {
    if (tempArr.length === k) {
      results.push(tempArr.slice());
      return;
    }
    for (let i = 0; i < remainingArr.length; i++) {
      const newTemp = tempArr.concat(remainingArr[i]);
      const newRemaining = remainingArr
        .slice(0, i)
        .concat(remainingArr.slice(i + 1));
      permute(newTemp, newRemaining);
    }
  }

  permute([], arr);
  return results;
}

function solve24(numStr) {
  const nums = numStr.split("").map((i) => +i);
  const numberPairs = getAllPermutations(nums, 2);
  const TARGET = 24;

  let result = "";

  const multiplication = (pair) => pair[0] * pair[1];
  const division = (pair) => pair[0] / pair[1];
  const addition = (pair) => pair[0] + pair[1];
  const subtraction = (pair) => pair[0] - pair[1];

  const operationsMap = new Map();
  operationsMap.set({
    multiplication: '*'
  })
  operationsMap.set({
    subtraction: '-'
  })
  operationsMap.set({
    addition: '+'
  })
  operationsMap.set({
    division: '/'
  })

  const operations = [multiplication, division, addition, subtraction];

  // 3 operation within one expression,
  // 2 operations between numberPairs
  // 1 operation between intermediate result


  const action = (pairA, pairB, operators) => {
    const left = operators[0](pairA);
    const right = operators[1](pairB);
    const result1 = operators[2]([left, right]);
    const result2 = operators[2]([right, left]);
    if (result1 === TARGET) {
     console.log(result1, pairA, pairB, operators)
     result = `${pairA[0]}${operationsMap.get(operators[0])}${pairA[1]}${operationsMap.get(operators[2])}${pairB[0]}${operationsMap.get(operators[1])}${pairB[1]}` 
    }
    if (result2 === TARGET) {
     console.log(result2, pairB, pairA, operators)
      result = `${pairB[0]}${operationsMap.get(operators[0])}${pairB[1]}${operationsMap.get(operators[2])}${pairA[0]}${operationsMap.get(operators[1])}${pairA[1]}` 
    }
  };

  for (let i = 0; i < numberPairs.length; i++) {
    for (let j = 0; j < numberPairs.length; j++) {
      if (i !== j) {
        for (let k = 0; k < 4; k++) {
        for (let l = 0; l < 4; l++) {
          for (let m = 0; m < 4; m++) {
            action(numberPairs[i], numberPairs[j], [operations[k], operations[l], operations[m]]);
          }
        }
      }
      }
      
    }
  }

  console.log(numberPairs);

  return result;
}

console.log(solve24("1234"));
