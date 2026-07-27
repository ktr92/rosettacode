function getAllPermutations(arr, k) {
    const results = [];

    // Вспомогательная функция для генерации всех перестановок
    function permute(tempArr, remainingArr) {
        if (tempArr.length === k) {
            results.push(tempArr.slice());
            return;
        }
        for (let i = 0; i < remainingArr.length; i++) {
            const newTemp = tempArr.concat(remainingArr[i]);
            const newRemaining = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
            permute(newTemp, newRemaining);
        }
    }

    permute([], arr);
    return results;
}


function solve24(numStr) {
  const nums = numStr.split("").map((i) => +i);
  const numberPairs = getAllPermutations(nums, 2);
  console.log(numberPairs)
  const TARGET = 24;

  const result = "";

  const multiplication = (pair) => pair[0] * pair[1];
  const division = (pair) => pair[0] / pair[1];
  const addition = (pair) => pair[0] + pair[1];
  const subtraction = (pair) => pair[0] - pair[1];

  const operations = [multiplication, division, addition, subtraction];

  const operationPairs = getAllPermutations(operations, 3);
  console.log(operationPairs)

  // 3 операции в одном выражении,
  // 2 из них между двумя парами
  // 1 между пром.результатами
  const action = (pairA, pairB, operators) => {
    const left = operators[0](pairA);
    const right = operators[1](pairB);
    const result1 = operators[2]([left, right]);
    const result2 = operators[2]([right, left]);
    return [result1, result2];
  };
  console.log(
    action(numberPairs[0], numberPairs[11], [
      multiplication,
      multiplication,
      multiplication,
    ]),
  );
  return true;
}

solve24("1234");
