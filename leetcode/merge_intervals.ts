function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  const indexMap = new Map();
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < intervals.length; j++) {
      if (i !== j) {
        if (intervals[i][0] <= intervals[j][0]) {
          if (
            intervals[i][1] <= intervals[j][1] &&
            intervals[i][1] >= intervals[j][0]
          ) {
            result.push([intervals[i][0], intervals[j][1]]);
            indexMap.set(i, true);
            indexMap.set(j, true);
          } else {
            if (!indexMap.has(j) && !indexMap.has(i)) {
              result.push([intervals[i][0], intervals[i][1]]);
            }
          }
        }
        if (intervals[i][0] > intervals[j][0]) {
          if (
            intervals[i][1] >= intervals[j][1] &&
            intervals[i][1] <= intervals[j][0]
          ) {
            if (intervals[i][0] === intervals[j][1]) {
              result.push([intervals[j][0], intervals[i][1]]);
              indexMap.set(i, true);
              indexMap.set(j, true);
            } else {
              result.push([intervals[j][0], intervals[i][1]]);
              indexMap.set(i, true);
              indexMap.set(j, true);
            }
          } 
        }
      }
    }
  }
  return result;
}

const intervals = [
  [4, 7],
  [1, 4],
];

console.log(merge(intervals)); // [[1,7]]
