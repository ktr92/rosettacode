function merge(intervals: number[][]): number[][] {
  const merged: number[][] = [];
  const sorted: number[][] = intervals.sort((a: number[], b: number[]) =>
    a[0] > b[0] ? 1 : -1,
  );
  /*   console.log(sorted)
   */
  const mergeMap = new Map();
  const startflat = sorted.flat();
  
  function checkMerge(flat: number[]) {
    console.log("NEWFLAT: ", flat);
    console.log("NEWMERGE: ", merged);
    mergeMap.clear();
    merged.length = 0;

    for (let i = 0; i < flat.length; i++) {
      
      let parity = i % 2;
      const current = flat[i] as number;
      const isNext = typeof flat[i + 1] !== "undefined" ? true : false;
      const isPrev = typeof flat[i - 1] !== "undefined" ? true : false;
      const isNextEdge = typeof flat[i + 1] !== "undefined" ? true : false;
      const next =
        typeof flat[i + 1] !== "undefined" ? (flat[i + 1] as number) : null;
      const prev =
        typeof flat[i - 1] !== "undefined" ? (flat[i - 1] as number) : null;
      const nextEdge =
        typeof flat[i + 2] !== "undefined" ? (flat[i + 2] as number) : null;
      const isEdge = parity !== 0;

      // если ранее не использован
      if (!mergeMap.has(i)) {
        // если не последний
        if (isNext) {
          if (isNextEdge) {
            if (current === next && !isEdge && next < nextEdge) {
              merged.push([current, next]);
              mergeMap.set(i, true);
              mergeMap.set(i + 1, true);
            }
          }

          // если не последний и не первый, и нечетный т.е. правая граница
          if (isPrev) {
            // если текущий можно слить со следующим
            if (current >= next && isEdge) {
              mergeMap.set(i, true);
              mergeMap.set(i + 1, true);
              mergeMap.set(i + 2, true);

              const newArr = [...flat.filter((el, index) => index > i + 2)];
              if (nextEdge >= current) {
                merged.push([prev, nextEdge]);
                checkMerge([...merged.flat(), ...newArr]);
                continue;
              } else {
                merged.push([prev, current]);
                checkMerge([...merged.flat(), ...newArr]);
                continue;
              }
            } else {
              if (isEdge && current < next) {
                merged.push([prev, current]);
                mergeMap.set(i, true);
                mergeMap.set(i + 1, true);
                continue;
              }
              if (1) {
                merged.push([current, next]);
                mergeMap.set(i, true);
                mergeMap.set(i + 1, true);
                continue;
              }
            }
          }
          //
        } else {
          if (isPrev) {
            merged.push([prev, current]);
            mergeMap.set(i, true);
            continue;
          }
        }
      }
    }
  }

  checkMerge(startflat);

  return merged;
}

const intervals1 = [
  [1, 4],
  [0, 0],
];
const intervals2 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const intervals3 = [
  [1, 4],
  [4, 5],
];
const intervals4 = [
  [4, 7],
  [1, 4],
];
const intervals5 = [
  [1, 4],
  [1, 5],
];
const intervals6 = [
  [1, 4],
  [5, 6],
];
const intervals7 = [
  [1, 4],
  [0, 2],
  [3, 5],
];

console.log("\n ========== merge: ", merge(intervals1)); // [[0,0],[1,4]]
console.log("\n ========== merge: ", merge(intervals2)); // [[1,6],[8,10],[15,18]]
console.log("\n ========== merge: ", merge(intervals3)); // [[1,5]]
console.log("\n ========== merge: ", merge(intervals4)); // [[1,7]]
console.log("\n ========== merge: ", merge(intervals5)); // [[1,5]]
console.log("\n ========== merge: ", merge(intervals6)); // [[1,4],[5,6]]
console.log("\n ========== merge: ", merge(intervals7)); // [[0,5]]
