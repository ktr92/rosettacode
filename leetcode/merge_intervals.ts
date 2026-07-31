function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  const indexMap = new Map();
  for (let i = 0; i < intervals.length; i++) {
    const first_start = intervals[i][0];
    const first_end = intervals[i][1];
    for (let j = 0; j < intervals.length; j++) {
      const second_start = intervals[j][0];
      const second_end = intervals[j][1];
      if (i !== j) {
        if (first_start < second_start) {
          if (first_end <= second_end && first_end >= second_start) {
            if (!indexMap.has(j) && !indexMap.has(i)) {
              result.push([first_start, second_end]);
              indexMap.set(i, true);
              indexMap.set(j, true);
            }
          } else {
            if (!indexMap.has(j) && !indexMap.has(i)) {
              result.push([first_start, first_end]);
               indexMap.set(i, true);
                indexMap.set(j, true);
            }
          }
        }
        if (first_start > second_start) {
          if (first_end >= second_end && first_end >= second_start) {
              if (!indexMap.has(j) && !indexMap.has(i)) {
                result.push([second_start, first_end]);
                indexMap.set(i, true);
                indexMap.set(j, true);
              }
        
          } else {
            if (!indexMap.has(j) && !indexMap.has(i)) {
              result.push([first_start, first_end]);
               indexMap.set(i, true);
                indexMap.set(j, true);
            }
          }
        }
        if (first_start === second_end) {
          if (first_end > second_start) {
            if (!indexMap.has(j) && !indexMap.has(i)) {
              result.push([second_start, first_end]);
              indexMap.set(i, true);
              indexMap.set(j, true);
            }
          }
        }
        if (!indexMap.has(i)) {
          result.push([first_start, first_end]);
           indexMap.set(i, true);
        }
        if (!indexMap.has(j)) {
          result.push([second_start, second_end]);
                indexMap.set(j, true);
        }
      }
    }
  }
  return result;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals)); // [[1,7]]
