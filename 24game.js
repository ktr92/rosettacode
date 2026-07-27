function solve24(numStr) {
  const nums = numStr.split("").map((i) => +i);

  function permute(arr) {
    const results = [];

    function backtrack(current, remaining) {
      if (remaining.length === 0) {
        results.push(current.slice());
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i]);
        const nextRemaining = remaining
          .slice(0, i)
          .concat(remaining.slice(i + 1));
        backtrack(current, nextRemaining);
        current.pop();
      }
    }

    backtrack([], arr);
    return results;
  }

  const numberPairs = permute(nums);

  const TARGET = 24;

  const result = "";

  const multiplication = (pair) => pair[0] * pair[1];
  const division = (pair) => pair[0] / pair[1];
  const addition = (pair) => pair[0] + pair[1];
  const subtraction = (pair) => pair[0] - pair[1];

  const operations = [multiplication, division, addition, subtraction];

  const operationPairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 1; j < nums.length; j++) {
        operationPairs.push();
      }
    }
  }

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
    action(numberPairs[0], numberPairs[10], [
      multiplication,
      multiplication,
      multiplication,
    ]),
  );
  return true;
}

solve24("1234");
